'use client';

import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import { useWindowSize } from 'usehooks-ts';

import createAnimation from '@/helpers/createAnimation';
import grid from '@/public/grid.svg';
import Character from '@/components/reusable/Character/Character';
import Portal from '@/components/reusable/Portal/Portal';
import styles from './SingleFeature.module.scss';
import { breakpoints } from '@/helpers/breakpoints';

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
          : createAnimation('fadeInUp')
      }
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.75 }}>
      <motion.div
        variants={createAnimation('fadeInScale')}
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
        variants={createAnimation('fadeInDown')}
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
          maxWidth={300}
          rotationDirection={index % 2 === 0 ? 'counterclockwise' : 'clockwise'}
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
          width={75}
          maxWidth={75}
          rotationDirection={index % 2 === 0 ? 'clockwise' : 'counterclockwise'}
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
