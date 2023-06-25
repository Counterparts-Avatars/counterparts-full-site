export type AnimationObject = {
  hidden: {
    opacity?: number;
    translateY?: number | string;
    translateX?: number | string;
    scale?: number;
  };
  show: {
    opacity?: number;
    translateY?: number;
    translateX?: number;
    scale?: number;
    transition?: {
      duration?: number;
      delay?: number;
      ease?: string;
      staggerChildren?: number;
    };
  };
};

export type AnimationInputs = {
  duration: number;
  delay: number;
  movementVector: { y: number | string; x: number | string };
  timingFunction: string;
  staggerDuration?: number;
  opacity: { start: number; end: number };
  scale: { start: number; end: number };
};
