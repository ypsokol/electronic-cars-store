import { Variants } from "framer-motion";

export const carVariants: Variants = {
  offscreen: {
    y: 200,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};
