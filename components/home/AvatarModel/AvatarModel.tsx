'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useWindowSize } from 'usehooks-ts';

import character from '@/public/character-6.webp';
import createAnimation from '@/helpers/createAnimation';
import SplinePortal from '@/components/reusable/SplinePortal/SplinePortal';
import { breakpoints } from '@/helpers/breakpoints';
import ParallaxText from '@/components/reusable/ParallaxText/ParallaxText';
import styles from './AvatarModel.module.scss';

const callOuts = [
  { title: 'Glasses', description: 'Funded climate research' },
  { title: 'Jacket', description: 'Organized beach clean-up' },
  { title: 'Pants', description: 'Mentored STEM students' },
  { title: 'Shoes', description: 'Volunteered in community' },
];

const AvatarModel = () => {
  const { width } = useWindowSize();
  let isMobile = false;
  if (typeof window !== 'undefined') {
    isMobile = window.innerWidth < breakpoints.med;
  }

  let portalScale;
  let topPortalTranslateY;
  let bottomPortalTranslateY;
  let topPortalTranslateX = '-50%';
  let bottomPortalTranslateX = '-50%';

  if (width < breakpoints.xsmall) {
    portalScale = 0.5;
    topPortalTranslateY = '5%';
    bottomPortalTranslateY = '88%';
  } else if (width < breakpoints.small && width >= breakpoints.xsmall) {
    portalScale = 0.6;
    topPortalTranslateY = '5%';
    bottomPortalTranslateY = '75%';
  } else if (width < breakpoints.med && width >= breakpoints.small) {
    portalScale = 0.8;
    topPortalTranslateY = '10%';
    bottomPortalTranslateY = '55%';
  } else if (width < breakpoints.large && width >= breakpoints.med) {
    portalScale = 0.8;
    topPortalTranslateY = '25%';
    bottomPortalTranslateY = '50%';
  } else if (width < breakpoints.xlarge && width >= breakpoints.large) {
    portalScale = 0.8;
    topPortalTranslateY = '30%';
    bottomPortalTranslateY = '50%';
    topPortalTranslateX = '-60%';
    bottomPortalTranslateX = '-40%';
  } else {
    portalScale = 0.8;
    topPortalTranslateY = '30%';
    bottomPortalTranslateY = '50%';
    topPortalTranslateX = '-60%';
    bottomPortalTranslateX = '-40%';
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
            !isMobile
              ? i % 2 === 0
                ? createAnimation('fadeInRight')
                : createAnimation('fadeInLeft')
              : createAnimation('fadeIn')
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
          translateX: topPortalTranslateX,
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
          translateX: bottomPortalTranslateX,
          translateY: bottomPortalTranslateY,
        }}
        scale={`-${portalScale} ${portalScale}`}
        width={300}
      />
      <div style={{ width: '100%', height: '100%' }}>
        <ParallaxText baseVelocity={1} />
        <ParallaxText baseVelocity={-1} />
      </div>
    </section>
  );
};

export default AvatarModel;
