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
    <section
      id="be-the-first"
      className={styles.actionSection}>
      <motion.div
        variants={createAnimation('staggerContainer')}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.65 }}
        className={styles.motionWrapper}>
        <motion.h3
          variants={createAnimation('fadeInDown')}
          className={styles.actionHead}>
          Be the first
        </motion.h3>
        <motion.div
          variants={createAnimation('fadeIn')}
          className={styles.portalBox}>
          <Portal
            width={width * 0.55}
            maxWidth={500}
            rotationDirection="none"
            scrollAnimation={width >= breakpoints.med}
            logo
          />
        </motion.div>
        <motion.div variants={createAnimation('fadeInUp')}>
          <Image
            src={
              width >= breakpoints.med
                ? characterGroupLarge
                : characterGroupSmall
            }
            alt="A group of Counterparts characters"
            width={600}
            height={600}
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
      </motion.div>
    </section>
  );
};

export default CallToAction;
