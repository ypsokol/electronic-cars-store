import Image from "../../UI/Image";
import {
  RiChargingPile2Fill,
  RiDashboard3Line,
  RiFundsBoxLine,
  RiShoppingBag2Line,
} from "react-icons/ri";

type Props = {
  title: string;
  subtitle: string;
  price: string;
  image: any;
};

const Card = ({ title, subtitle, price, image }: Props) => {
  return (
    <article className="popular__card">
      <div className="shape shape__smaller" />
      <h1 className="popular__title">{title}</h1>
      <h3 className="popular__subtitle">{subtitle}</h3>

      <Image src={image} alt="" layout="responsive" className="popular__img" />
      <div className="popular__data">
        <div className="popular__data-group">
          <RiDashboard3Line className="popular__data-group-icon" /> 3.7 Sec
        </div>
        <div className="popular__data-group">
          <RiFundsBoxLine className="popular__data-group-icon" /> 356 Km/h
        </div>
        <div className="popular__data-group">
          <RiChargingPile2Fill className="popular__data-group-icon" /> Electric
        </div>
      </div>

      <h3 className="popular__price">{price}</h3>
      <button className="button popular__button">
        <RiShoppingBag2Line className="popular__button-icon" />
      </button>
    </article>
  );
};

export default Card;
