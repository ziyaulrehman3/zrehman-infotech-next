export const fadeUpAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: "easeOut" },
  viewport: { amount: 0.5 },
};

export const rightLeftAnimation = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  transition: {
    duration: 1,
    ease: "easeOut",
  },
  viewport: {
    amount: 0.5,
  },
};

export const leftRightAnimation = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  transition: {
    duration: 1,
    ease: "easeOut",
  },
  viewport: {
    amount: 0.5,
  },
};

export const fadeDownAnimation = {
  initial: { opacity: 0, y: -50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: "easeOut" },
  viewport: { amount: 0.5 },
};
