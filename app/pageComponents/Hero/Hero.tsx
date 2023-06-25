'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useWindowSize } from 'usehooks-ts';

import createAnimation from '@/helpers/createAnimation';
import character1 from '@/public/character-1.webp';
import grid from '@/public/grid.svg';
import arrow from '@/public/arrow.svg';
import Character from '@/components/reusable/Character/Character';
import { breakpoints } from '@/helpers/breakpoints';
import styles from './Hero.module.scss';

const Hero = () => {
  const { width } = useWindowSize();

  const scrollToPos = () => {
    const yOffset = -100;
    const element = document.getElementById('call-to-action');
    const y = element!.getBoundingClientRect().top + scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <section className={styles.heroSection}>
      <motion.div
        variants={
          width > breakpoints.med
            ? createAnimation('staggerContainer')
            : createAnimation('fadeIn')
        }
        initial="hidden"
        animate="show">
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
        <motion.h1
          variants={createAnimation('fadeIn')}
          className={styles.head}>
          Virtual Beings,
          <br />
          <span className={styles.subHead}>Real Impact</span>
        </motion.h1>
        <motion.p
          variants={createAnimation('fadeIn')}
          className={styles.description}>
          A digital representation of your
          <br />
          contributions towards humanity,
          <br />
          for use
          <span style={{ fontWeight: 600 }}> across the metaverse</span>
        </motion.p>
        <motion.button
          variants={createAnimation('fadeIn')}
          className={styles.mainBtn}
          onClick={scrollToPos}>
          Sign up{' '}
          <span>
            <Image
              src={arrow}
              alt=""
              width={25}
              height={25}
            />
          </span>
        </motion.button>
        <Character
          rotationDirection="clockwise"
          character={character1}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
