import Image from "../../UI/Image";
import Card from "./Card";

import features from "/public/assets/images/features.webp";
import map from "/public/assets/images/map.svg";
import { Sections } from "../../../constants/routes";

const Features = () => {
  return (
    <section className="features section" id={Sections.features}>
      <h2 className="section__title">More Features</h2>
      <div className="features container grid">
        <div className="features__group">
          <Image src={features} alt="" className="features__img" />
          <Image className="features__map" alt="" src={map} />
          <Card
            title="800v"
            description="Turbo <br> Chargin</p>"
            position={1}
          />
          <Card title="350" description={`Km <br> Range`} position={2} />
          <Card title="480" description="Km <br> Travel" position={3} />
        </div>
      </div>
    </section>
  );
};

export default Features;