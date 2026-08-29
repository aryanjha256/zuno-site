import type { Variants } from "motion/react";

export const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOutExpo } },
};

/** Parent variant that releases its children one after another. */
export const stagger = (children = 0.07, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: children, delayChildren: delay } },
});
