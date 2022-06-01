import {
  RiDashboard3Line,
  RiFlashlightFill,
  RiTempColdLine,
} from "react-icons/ri";

import Image from "next/image";
import Item from "./Item";

import home from "../../../public/assets/images/home.webp";
import { Sections } from "../../../constants/routes";

const HomeSection = () => {
  return (
    <section className="home section" id={Sections.home}>
      <div className="shape shape__big"></div>
      <div className="shape shape__small"></div>

      <div className="home__container container grid">
        <div className="home__data">
          <h1 className="home__title">Choose the best car</h1>
          <h2 className="home__subtitle">Porsche Mission E</h2>
          <h3 className="home__elec">
            <RiFlashlightFill className="home__elec-icon" />
            Electric car
          </h3>
        </div>
        <div className="home__img">
          <Image src={home} alt="" />
        </div>

        <div className="home__car">
          <Item title="24*" description="TEMPERATURE">
            <RiTempColdLine />
          </Item>

          <Item title="873" description="MILEAGE">
            <RiDashboard3Line />
          </Item>

          <Item title="94%" description="Battery">
            <RiFlashlightFill />
          </Item>
        </div>
        <a href={`#${Sections.about}`} className="home__button">
          Start
        </a>
      </div>
    </section>
  );
};

export default HomeSection;