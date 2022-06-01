import { PropsWithChildren } from "react";

type Props = {
  title: string;
  description: string;
  icon?: any;
};

const Item = ({
  title,
  description,
  icon,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <div className="home__car-data">
      <div className="home__car-icon">{children || icon}</div>
      <h2 className="home__car-number">{title}</h2>
      <h3 className="home__car-name">{description}</h3>
    </div>
  );
};

export default Item;
