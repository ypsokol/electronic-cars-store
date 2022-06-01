import Image from "../../UI/Image";
import { RiShoppingBag2Line } from "react-icons/ri";

const Card = ({
  title,
  subtitle,
  price,
  image,
}: {
  title: string;
  subtitle: string;
  price: string;
  image: any;
}) => {
  return (
    <article className={`featured__card`}>
      <div className="shape shape__smaller" />
      <h1 className="featured__card-title">{title}</h1>
      <h2 className="featured__card-subtitle">{subtitle}</h2>

      <Image className="featured__card-img" src={image} alt="" />

      <h3 className="featured__card-price">{price}</h3>
      <button className="button featured__card-button">
        <RiShoppingBag2Line className="featured__card-button-icon" />
      </button>
    </article>
  );
};

export default Card;
