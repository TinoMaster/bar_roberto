export const bannerTittle = {
  initial: {
    opacity: 0,
    x: "100px",
  },
  animate: {
    opacity: 1,
    x: 0,
    /* transition: {
        duration: 0.3,
      }, */
  },
};

export const bannerBigTittle = {
  initial: {
    opacity: 0,
    x: "-100px",
  },
  animate: {
    opacity: 1,
    x: 0,
    /* transition: {
        duration: 0.3,
      }, */
  },
};

export const image1historyHome = {
  initial: {
    opacity: 0,
    rotate: -10,
    x: 8,
    y: 12,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

export const image2historyHome = {
  initial: {
    opacity: 0,
    rotate: 12,
    x: -8,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

export const containerImagesPrefers = {
  hidden: { y: "100px" },
  show: {
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const itemImagePrefer = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};
