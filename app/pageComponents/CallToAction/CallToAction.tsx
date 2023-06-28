'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Audiowide } from 'next/font/google';
import { useWindowSize } from 'usehooks-ts';

import characterGroupSmall from '@/public/character-group-small.webp';
import characterGroupLarge from '@/public/character-group-large.webp';
import createAnimation from '@/helpers/createAnimation';
import EmailForm from './EmailForm';
import Portal from '@/components/reusable/Portal/Portal';
import { breakpoints } from '@/helpers/breakpoints';
import styles from './CallToAction.module.scss';

const audiowide = Audiowide({ subsets: ['latin'], weight: '400' });

const CallToAction = () => {
  const { width } = useWindowSize();

  return (
    <motion.section
      id="call-to-action"
      className={styles.actionSection}
      variants={createAnimation('staggerContainer')}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.8 }}>
      <motion.h3
        variants={createAnimation('fadeInDown')}
        className={styles.actionHead}>
        Be the first
      </motion.h3>
      <motion.div
        variants={createAnimation('custom', {
          duration: 0.5,
          delay: 0,
          movementVector: { x: 0, y: 0 },
          timingFunction: 'linear',
          opacity: { start: 0, end: 0.5 },
          scale: { start: 1, end: 1.3 },
        })}
        className={styles.portalBox}>
        <Portal
          width={width * 0.55}
          maxWidth={500}
          rotationDirection="clockwise"
          scrollAnimation={width >= breakpoints.med}
          logo
        />
      </motion.div>
      <motion.div variants={createAnimation('fadeInUp')}>
        <Image
          src={characterGroupSmall}
          alt="A group of Counterparts characters"
          width={400}
          height={400}
          className={styles.characterGroup}
        />
      </motion.div>
      <motion.div
        className={styles.formContainer}
        variants={createAnimation('fadeInUp')}>
        <p className={styles.subText}>
          Sign up to reserve your 1st generation{' '}
          <span className={audiowide.className}>
            COUNTER<span className={styles.part}>PART</span>
          </span>
        </p>
        <EmailForm />
      </motion.div>
    </motion.section>
  );
};

export default CallToAction;
