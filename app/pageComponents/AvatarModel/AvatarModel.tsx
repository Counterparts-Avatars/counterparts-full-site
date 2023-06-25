'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import character from '@/public/character-6.webp';
import createAnimation from '@/helpers/createAnimation';
import styles from './AvatarModel.module.scss';
import SplinePortal from '@/components/reusable/SplinePortal/SplinePortal';
import { useWindowSize } from 'usehooks-ts';

const callOuts = [
  { title: 'Glasses', description: 'Funded climate research' },
  { title: 'Jacket', description: 'Organized beach clean-up' },
  { title: 'Pants', description: 'Mentored STEM students' },
  { title: 'Shoes', description: 'Volunteered in community' },
];

const AvatarModel = () => {
  const { width } = useWindowSize();

  return (
    <section className={styles.modelSection}>
      <Image
        src={character}
        alt="A large representation of a Counterparts avatar"
        width={400}
        height={600}
        className={styles.avatar}
      />
      {callOuts.map((callOut, i) => (
        <motion.p
          key={i}
          className={styles.callOut}
          variants={
            i % 2 === 0
              ? createAnimation('fadeInRight')
              : createAnimation('fadeInLeft')
          }
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 'all',
            margin: '-100px 0px -100px 0px',
          }}>
          <span className={styles.callOutTitle}>{callOut.title}</span>
          {callOut.description}
        </motion.p>
      ))}
      <SplinePortal
        position={{
          top: '0',
          bottom: 'unset',
          left: '0',
          right: '0',
          translateX: '-50%',
          translateY: '5%',
        }}
        scale={0.5}
        width={300}
      />
      <SplinePortal
        position={{
          top: 'unset',
          bottom: '0',
          left: '0',
          right: '0',
          translateX: '-50%',
          translateY: '88%',
        }}
        scale={'-0.5 0.5'}
        width={300}
      />
    </section>
  );
};

export default AvatarModel;
