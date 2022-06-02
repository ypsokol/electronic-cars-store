import { Variants } from "framer-motion";

export const cardVariants: (direction: string) => Variants = (direction) => ({
  offscreen: {
    x: direction === "left" ? -100 : 100,
  },
  onscreen: {
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
});
