import { Variants } from "framer-motion";

export const cardVariant: Variants = {
  offscreen: {
    opacity: 0,
    scale: 0,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};
