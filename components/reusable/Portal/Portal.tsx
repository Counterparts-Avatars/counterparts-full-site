'use client';

import Image from 'next/image';
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';

import portal from '@/public/portal-2.webp';
import logoMark from '@/public/counterparts-logo-mark.svg';
import styles from './Portal.module.scss';

interface PortalProps {
  width?: number;
  maxWidth?: number;
  rotationDirection: 'clockwise' | 'counterclockwise' | 'none';
  scrollAnimation: boolean;
  logo: boolean;
}

const Portal = ({
  width,
  maxWidth,
  rotationDirection,
  scrollAnimation,
  logo,
}: PortalProps) => {
  const { scrollY } = useScroll();

  let degrees;
  if (scrollAnimation && rotationDirection === 'clockwise') {
    degrees = 360;
  } else if (scrollAnimation && rotationDirection === 'counterclockwise') {
    degrees = -360;
  } else if (!scrollAnimation) {
    degrees = 0;
  } else {
    degrees = 360;
  }
  const rotation = useTransform(scrollY, [0, 3500], [0, degrees], {
    clamp: false,
  });

  useMotionValueEvent(scrollY, 'change', latest => {
    rotation.set(latest);
  });

  return (
    <div
      className={styles.portalBox}
      style={
        width && maxWidth
          ? {
              width: width,
              height: Math.min(width, maxWidth), // portal remains square
              maxWidth: maxWidth,
            }
          : {}
      }>
      <motion.div
        className={styles.spinnerBox}
        style={
          width && maxWidth
            ? {
                width: width,
                height: Math.min(width, maxWidth), // portal remains square
                maxWidth: maxWidth,
                rotate: rotation,
              }
            : { rotate: rotation }
        }>
        <Image
          src={portal}
          alt=""
          fill
          sizes={width ? width.toString() : '50vw'}
          className={styles.portal}
          style={
            rotationDirection === 'none'
              ? { animation: 'none' }
              : rotationDirection === 'counterclockwise'
              ? { animationDirection: 'reverse' }
              : {}
          }
        />
      </motion.div>
      {logo && (
        <Image
          src={logoMark}
          alt=""
          fill
          sizes={width ? width.toString() : '30vw'}
          className={styles.logo}
        />
      )}
    </div>
  );
};

export default Portal;
