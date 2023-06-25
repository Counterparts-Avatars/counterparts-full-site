'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import character from '@/public/character-6.webp';
import createAnimation from '@/helpers/createAnimation';
import styles from './AvatarModel.module.scss';
import SplinePortal from '@/components/reusable/SplinePortal/SplinePortal';
import { useWindowSize } from 'usehooks-ts';
import { breakpoints } from '@/helpers/breakpoints';

const callOuts = [
  { title: 'Glasses', description: 'Funded climate research' },
  { title: 'Jacket', description: 'Organized beach clean-up' },
  { title: 'Pants', description: 'Mentored STEM students' },
  { title: 'Shoes', description: 'Volunteered in community' },
];

const AvatarModel = () => {
  const { width } = useWindowSize();

  let portalScale;
  let topPortalTranslateY;
  let bottomPortalTranslateY;

  if (width < breakpoints.xsmall) {
    portalScale = 0.5;
    topPortalTranslateY = '5%';
    bottomPortalTranslateY = '88%';
  } else if (width < breakpoints.small && width >= breakpoints.xsmall) {
    portalScale = 0.6;
    topPortalTranslateY = '5%';
    bottomPortalTranslateY = '75%';
  } else if (width < breakpoints.med && width >= breakpoints.small) {
    portalScale = 0.6;
    topPortalTranslateY = '5%';
    bottomPortalTranslateY = '75%';
  } else if (width < breakpoints.large && width >= breakpoints.med) {
    portalScale = 0.6;
    topPortalTranslateY = '5%';
    bottomPortalTranslateY = '75%';
  } else if (width < breakpoints.xlarge && width >= breakpoints.large) {
    portalScale = 0.6;
    topPortalTranslateY = '5%';
    bottomPortalTranslateY = '75%';
  } else {
    portalScale = 0.6;
    topPortalTranslateY = '5%';
    bottomPortalTranslateY = '75%';
  }

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
          translateY: topPortalTranslateY,
        }}
        scale={portalScale}
        width={300}
      />
      <SplinePortal
        position={{
          top: 'unset',
          bottom: '0',
          left: '0',
          right: '0',
          translateX: '-50%',
          translateY: bottomPortalTranslateY,
        }}
        scale={`-${portalScale} ${portalScale}`}
        width={300}
      />
    </section>
  );
};

export default AvatarModel;
