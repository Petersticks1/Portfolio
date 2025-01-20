export const fadeOut = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
    },

    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const fadeIn = (direction, delay, options = {}) => {
  const {
    rotate = 0, // Rotation angle in degrees
    scale = 1, // Scale factor
    backgroundColor = null, // Background color for animation
    skewX = 0, // Skew along the X-axis
    skewY = 0, // Skew along the Y-axis
    borderRadius = "0%", // Border radius for shape transitions
    boxShadow = "none", // Shadow animation
  } = options;

  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
      rotate: rotate !== 0 ? -rotate : 0, // Start with negative rotation
      scale: scale !== 1 ? 0.8 : 1, // Slightly smaller initial size
      skewX: skewX !== 0 ? -skewX : 0, // Initial skew along X-axis
      skewY: skewY !== 0 ? -skewY : 0, // Initial skew along Y-axis
      borderRadius: "0%", // Start as a square/rectangle
      boxShadow: "none", // No shadow initially
      backgroundColor: backgroundColor || "transparent", // Default to transparent
    },

    show: {
      y: 0,
      x: 0,
      opacity: 1,
      rotate: 0, // Rotate back to 0
      scale: 1, // Return to original size
      skewX: 0, // Remove skew along X-axis
      skewY: 0, // Remove skew along Y-axis
      borderRadius: borderRadius, // Target border radius
      boxShadow: boxShadow, // Apply the shadow
      backgroundColor: backgroundColor, // Transition to target color
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
