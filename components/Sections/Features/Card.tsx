import { motion } from "framer-motion";
import { cardVariants } from "./animations/card";

const Card = ({
  title,
  description,
  position,
}: {
  title: string;
  description: string;
  position: number;
}) => {
  const direction = position === 1 || position === 3 ? "left" : "right";

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      variants={cardVariants(direction)}
      className={`features__card features__card-${position}`}
    >
      <h3 className="features__card-title">{title}</h3>
      <p className="features__card-description">{description}</p>
    </motion.div>
  );
};

export default Card;
