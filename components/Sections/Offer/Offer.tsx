import Image from "../../UI/Image";

import offer_bg from "../../../public/assets/images/offer-bg.webp";
import offer from "../../../public/assets/images/offer.webp";
import { Sections } from "../../../constants/routes";

const Offer = () => {
  return (
    <section className="offer section" id={Sections.offer}>
      <div className="offer__container container grid">
        <Image src={offer_bg} layout="fill" alt="" className="offer__bg" />
        <div className="offer__data">
          <h2 className="section__title offer__title">
            Do You Want To Receive <br /> Special Offers?
          </h2>

          <p className="offer__description">
            Be the first to receive all the information about our products and
            new cars by email by subscribing to our mailing list.
          </p>

          <a href="#" className="button">
            Subscribe Now
          </a>
        </div>
        <Image src={offer} alt="" className="offer__img" />
      </div>
    </section>
  );
};

export default Offer;
