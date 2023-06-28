import { AnimationInputs, AnimationObject } from '@/types';

const animationDefaults: AnimationInputs = {
  duration: 0.25,
  delay: 0,
  movementVector: { y: 0, x: 0 },
  timingFunction: 'linear',
  staggerDuration: undefined,
  opacity: { start: 1, end: 1 },
  scale: { start: 1, end: 1 },
};

export default function createAnimation(
  name:
    | 'fadeIn'
    | 'fadeInUp'
    | 'fadeInDown'
    | 'fadeInLeft'
    | 'fadeInRight'
    | 'fadeInScale'
    | 'staggerContainer'
    | 'custom',
  animationInputs: AnimationInputs = animationDefaults
): AnimationObject | undefined {
  if (name === 'fadeIn') {
    return {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          duration: 0.25,
        },
      },
    };
  }
  if (name === 'fadeInUp') {
    return {
      hidden: { opacity: 0, translateY: 50 },
      show: {
        opacity: 1,
        translateY: 0,
        transition: {
          duration: 0.25,
        },
      },
    };
  }
  if (name === 'fadeInDown') {
    return {
      hidden: { opacity: 0, translateY: -50 },
      show: {
        opacity: 1,
        translateY: 0,
        transition: {
          duration: 0.5,
        },
      },
    };
  }
  if (name === 'fadeInLeft') {
    return {
      hidden: { opacity: 0, translateX: -50 },
      show: {
        opacity: 1,
        translateX: 0,
        transition: {
          duration: 0.25,
        },
      },
    };
  }
  if (name === 'fadeInRight') {
    return {
      hidden: { opacity: 0, translateX: 50 },
      show: {
        opacity: 1,
        translateX: 0,
        transition: {
          duration: 0.25,
        },
      },
    };
  }
  if (name === 'fadeInScale') {
    return {
      hidden: { opacity: 0, translateY: -50, scale: 1 },
      show: {
        opacity: 1,
        translateY: 0,
        scale: 1.3,
        transition: {
          duration: 0.8,
          ease: 'easeOut',
        },
      },
    };
  }
  if (name === 'staggerContainer') {
    return {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
        },
      },
    };
  }
  if (name === 'custom') {
    return {
      hidden: {
        opacity: animationInputs!.opacity!.start,
        translateY: animationInputs!.movementVector!.y,
        translateX: animationInputs!.movementVector!.x,
        scale: animationInputs!.scale!.start,
      },
      show: {
        opacity: animationInputs!.opacity!.end,
        translateY: 0,
        translateX: 0,
        scale: animationInputs!.scale!.end,
        transition: {
          duration: animationInputs!.duration!,
          delay: animationInputs!.delay!,
          ease: animationInputs!.timingFunction!,
          staggerChildren: animationInputs!.staggerDuration,
        },
      },
    };
  } else {
    return undefined;
  }
}
