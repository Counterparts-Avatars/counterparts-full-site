'use client';

import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import { useWindowSize } from 'usehooks-ts';

import createAnimation from '@/helpers/createAnimation';
import grid from '@/public/grid.svg';
import Character from '@/components/reusable/Character/Character';
import Portal from '@/components/reusable/Portal/Portal';
import { breakpoints } from '@/helpers/breakpoints';
import styles from './SingleFeature.module.scss';

interface SingleFeatureProps {
  index: number;
  head: string;
  text: string;
  character: StaticImageData;
}

const SingleFeature = ({
  index,
  head,
  text,
  character,
}: SingleFeatureProps) => {
  const { width } = useWindowSize();

  return (
    <motion.div
      className={
        index % 2 === 0
          ? `${styles.featureBox} ${styles.featureBox__left}`
          : `${styles.featureBox} ${styles.featureBox__right}`
      }
      variants={
        width > breakpoints.med
          ? createAnimation('staggerContainer')
          : createAnimation('fadeIn')
      }
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.75 }}>
      <motion.div
        variants={
          width > breakpoints.med
            ? createAnimation('fadeInScale')
            : createAnimation('fadeIn')
        }
        className={styles.gridBox}>
        <Image
          src={grid}
          alt=""
          fill
          sizes="100vw"
          className={styles.grid}
        />
      </motion.div>
      <motion.h3
        variants={
          width > breakpoints.med
            ? createAnimation('fadeInDown')
            : createAnimation('fadeIn')
        }
        className={styles.head}>
        {head}
      </motion.h3>
      <motion.div
        variants={
          index % 2 === 0
            ? createAnimation('fadeInLeft')
            : createAnimation('fadeInRight')
        }
        className={styles.characterBox}>
        <Character
          width={width * 0.55}
          maxWidth={width * 0.55}
          rotationDirection={index % 2 === 0 ? 'counterclockwise' : 'clockwise'}
          scrollAnimation={width > breakpoints.med}
          character={character}
        />
      </motion.div>
      <motion.div
        variants={
          index % 2 === 0
            ? createAnimation('fadeInRight')
            : createAnimation('fadeInLeft')
        }
        className={styles.portalBox}>
        <Portal
          width={width * 0.2}
          maxWidth={width * 0.2}
          rotationDirection={index % 2 === 0 ? 'clockwise' : 'counterclockwise'}
          scrollAnimation={width > breakpoints.med}
          logo={false}
        />
      </motion.div>
      <motion.p
        variants={
          index % 2 === 0
            ? createAnimation('fadeInRight')
            : createAnimation('fadeInLeft')
        }
        className={styles.text}>
        {text}
      </motion.p>
    </motion.div>
  );
};

export default SingleFeature;
