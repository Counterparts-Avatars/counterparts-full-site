'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Audiowide } from 'next/font/google';

import gameframe from '@/public/gameframe.webp';
import styles from './HoloText.module.scss';
import createAnimation from '@/helpers/createAnimation';

const audiowide = Audiowide({ subsets: ['latin'], weight: '400' });

interface HoloTextProps {
  text: string;
  emphasizedText?: string;
}

const HoloText = ({ text, emphasizedText }: HoloTextProps) => {
  const formattedText = text.replace('counterpart', '|'); // used to check for presence of the word "Counterpart" so it can be formatted it correctly

  return (
    <section className={styles.holoBox}>
      <motion.div
        initial={'hidden'}
        whileInView={'show'}
        viewport={{ once: true, amount: 'all' }}
        variants={createAnimation('custom', {
          duration: 0.5,
          delay: 0,
          movementVector: { x: 0, y: 0 },
          timingFunction: 'easeOut',
          opacity: { start: 0, end: 1 },
          scale: { start: 1, end: 1 },
        })}
        className={styles.frameBox}>
        <Image
          src={gameframe}
          alt=""
          fill
          sizes="90vw"
          className={styles.gameframe}
        />
      </motion.div>
      <motion.h3
        initial={'hidden'}
        whileInView={'show'}
        viewport={{ once: true, amount: 'all' }}
        variants={createAnimation('custom', {
          duration: 0.2,
          delay: 0.4,
          movementVector: { x: 0, y: 0 },
          timingFunction: 'linear',
          opacity: { start: 0, end: 1 },
          scale: { start: 1, end: 1 },
        })}
        className={styles.text}>
        {formattedText.split('|')[0] && formattedText.split('|')[0]}
        {formattedText.split('|')[1] && (
          <span
            className={styles.counterpart}
            style={audiowide.style}>
            Counter<span>part</span>
          </span>
        )}
        {formattedText.split('|')[1] && formattedText.split('|')[1]}
        {emphasizedText && (
          <>
            <span className={styles.emphasizedText}>{emphasizedText}</span>
          </>
        )}
      </motion.h3>
      <motion.div
        initial={'hidden'}
        whileInView={'show'}
        viewport={{ once: true, amount: 'all' }}
        variants={createAnimation('custom', {
          duration: 0.5,
          delay: 0,
          movementVector: { x: 0, y: '100%' },
          timingFunction: 'easeOut',
          opacity: { start: 1, end: 1 },
          scale: { start: 1, end: 1 },
        })}
        className={styles.frameBox}>
        <Image
          src={gameframe}
          alt=""
          fill
          sizes="90vw"
          className={styles.gameframe}
        />
      </motion.div>
    </section>
  );
};

export default HoloText;
