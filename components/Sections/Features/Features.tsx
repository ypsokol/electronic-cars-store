import Image from "next/image";
import { motion } from "framer-motion";
import Card from "./Card";

import features from "/public/assets/images/features.webp";
import map from "/public/assets/images/map.svg";
import { Sections } from "../../../constants/routes";

import { carVariants } from "./animations/car";
import { mapVariants } from "./animations/map";

const Features = () => {
  return (
    <section className="features section" id={Sections.features}>
      <h2 className="section__title">More Features</h2>
      <div className="features container grid">
        <div className="features__group">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={carVariants}
            className="features__img"
          >
            <Image src={features} alt="" placeholder="blur" />
          </motion.div>

          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={mapVariants}
            className="features__map"
          >
            <Image alt="" src={map} />
          </motion.div>

          <Card title="800v" description="Turbo Charging" position={1} />
          <Card title="350" description={`Km Range`} position={2} />
          <Card title="480" description="Km Travel" position={3} />
        </div>
      </div>
    </section>
  );
};

export default Features;
