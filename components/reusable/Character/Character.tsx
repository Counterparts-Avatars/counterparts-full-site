'use client';

import Image, { StaticImageData } from 'next/image';
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useWindowSize } from 'usehooks-ts';

import createAnimation from '@/helpers/createAnimation';
import portal from '@/public/portal.webp';
import styles from './Character.module.scss';
import { breakpoints } from '@/helpers/breakpoints';

interface CharacterProps {
  width?: number;
  maxWidth?: number;
  rotationDirection: 'clockwise' | 'counterclockwise';
  character: StaticImageData;
}

const Character = ({
  width,
  maxWidth,
  rotationDirection,
  character,
}: CharacterProps) => {
  const { scrollY } = useScroll();
  const { width: windowWidth } = useWindowSize();

  let degrees;
  if (rotationDirection === 'clockwise') {
    degrees = 360;
  } else {
    degrees = -360;
  }
  const rotation = useTransform(scrollY, [0, 1500], [0, degrees], {
    clamp: false,
  });

  useMotionValueEvent(scrollY, 'change', latest => {
    rotation.set(latest);
  });

  return (
    <motion.div
      className={styles.characterBox}
      style={
        width && maxWidth
          ? {
              width: width,
              height: width * 1.2,
              maxWidth: maxWidth,
            }
          : {} // if width and maxWidth are given, set the width and height of the character to the width prop and the maxWidth prop, respectively
      }
      variants={createAnimation('fadeIn')}
      initial={'hidden'}
      animate={'show'}>
      <Image
        src={character}
        alt="A Counterparts avatar character"
        fill
        sizes={width ? width.toString() : '95vw'}
        className={styles.character}
      />
      <motion.div
        className={styles.portalBox}
        style={
          width && maxWidth
            ? {
                width: width,
                height: width, // portal remains square
                maxWidth: maxWidth,
                rotate: rotation,
              }
            : { rotate: rotation }
        }>
        <Image
          src={portal}
          alt=""
          fill
          sizes={width ? width.toString() : '95vw'}
          className={styles.portal}
          style={
            rotationDirection === 'counterclockwise'
              ? { animationDirection: 'reverse' }
              : {}
          }
        />
      </motion.div>
    </motion.div>
  );
};

export default Character;
