import { Variants } from "framer-motion";

export const imageVariant: Variants = {
  offscreen: {
    x: -200,
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.2,
    },
  },
};
