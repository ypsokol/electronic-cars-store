import Image from "../../UI/Image";
import { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
};

const Logo = ({ image }: Props) => {
  return (
    <div className="logos__content">
      <Image className="logos__img" src={image} alt="" />
    </div>
  );
};

export default Logo;
