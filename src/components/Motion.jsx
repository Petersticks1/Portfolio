const EASE_OUT_EXPO = [0.22, 1, 0.36, 1];

export const fadeOut = (direction = "up", delay = 0) => ({
  hidden: {
    y: direction === "up" ? 28 : direction === "down" ? -28 : 0,
    x: direction === "left" ? 28 : direction === "right" ? -28 : 0,
    opacity: 0,
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.65,
      delay,
      ease: EASE_OUT_EXPO,
    },
  },
});

export const fadeIn = (direction = "up", delay = 0, options = {}) => {
  const { scale = 1 } = options;

  return {
    hidden: {
      y: direction === "up" ? 28 : direction === "down" ? -28 : 0,
      x: direction === "left" ? 28 : direction === "right" ? -28 : 0,
      opacity: 0,
      scale: scale !== 1 ? 0.94 : 1,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.65,
        delay,
        ease: EASE_OUT_EXPO,
      },
    },
  };
};

export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0.1) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: EASE_OUT_EXPO,
    },
  },
};

export const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay,
      ease: EASE_OUT_EXPO,
    },
  },
});
