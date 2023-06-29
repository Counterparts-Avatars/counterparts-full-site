'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useWindowSize } from 'usehooks-ts';
import { useEffect, useState } from 'react';

import createAnimation from '@/helpers/createAnimation';
import character1 from '@/public/character-1.webp';
import character7 from '@/public/character-7.webp';
import character8 from '@/public/character-8.webp';
import grid from '@/public/grid-mountains.svg';
import arrow from '@/public/arrow.svg';
import Character from '@/components/reusable/Character/Character';
import { breakpoints } from '@/helpers/breakpoints';
import styles from './Hero.module.scss';

const Hero = () => {
  const { width } = useWindowSize();
  const [characterRootSize, setCharacterRootSize] = useState<
    number | undefined
  >();

  useEffect(() => {
    switch (true) {
      case width < breakpoints.small:
        setCharacterRootSize(undefined);
        break;
      case width < breakpoints.med && width >= breakpoints.small:
        setCharacterRootSize(500);
        break;
      case width < breakpoints.large && width >= breakpoints.med:
        setCharacterRootSize(width * 0.35);
        break;
      case width < breakpoints.xlarge && width >= breakpoints.large:
        setCharacterRootSize(width * 0.3);
        break;
      case width >= breakpoints.xlarge:
        setCharacterRootSize(400);
        break;
    }
  }, [width]);

  const scrollToPos = () => {
    const yOffset = 0;
    const element = document.getElementById('be-the-first');
    const y = element!.getBoundingClientRect().top + scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <section className={styles.heroSection}>
      <motion.div
        variants={createAnimation('staggerContainer')}
        initial="hidden"
        animate="show"
        className={styles.heroText}>
        <motion.div
          variants={createAnimation('fadeIn')}
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
          Virtual Avatars,
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
              width={width >= breakpoints.small ? 35 : 25}
              height={width >= breakpoints.small ? 35 : 25}
            />
          </span>
        </motion.button>
      </motion.div>
      <motion.div
        variants={createAnimation('staggerContainer')}
        initial="hidden"
        animate="show"
        className={styles.characterBox}>
        <motion.div
          className={styles.characterWrapper}
          variants={createAnimation('fadeIn')}>
          <Character
            rotationDirection="clockwise"
            character={character1}
            scrollAnimation={width >= breakpoints.med}
            width={characterRootSize}
            maxWidth={characterRootSize}
          />
        </motion.div>
        {width >= breakpoints.med && (
          <motion.div
            className={styles.characterWrapper}
            variants={createAnimation('fadeIn')}>
            <Character
              rotationDirection="counterclockwise"
              character={character8}
              scrollAnimation={width >= breakpoints.med}
              width={
                characterRootSize ? characterRootSize * 0.6 : characterRootSize
              }
              maxWidth={
                characterRootSize ? characterRootSize * 0.6 : characterRootSize
              }
            />
          </motion.div>
        )}
        {width >= breakpoints.large && (
          <motion.div
            className={styles.characterWrapper}
            variants={createAnimation('fadeIn')}>
            <Character
              rotationDirection="counterclockwise"
              character={character7}
              scrollAnimation={width >= breakpoints.med}
              width={
                characterRootSize ? characterRootSize * 0.7 : characterRootSize
              }
              maxWidth={
                characterRootSize ? characterRootSize * 0.7 : characterRootSize
              }
            />
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Hero;
