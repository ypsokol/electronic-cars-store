import { PropsWithChildren } from "react";

type Props = {
  onClick?: () => void | undefined;
};

const SortIcon = ({ children, onClick }: PropsWithChildren<Props>) => {
  return (
    <li>
      <button className="featured__item" onClick={onClick}>
        <div className="featured__item-img">{children}</div>
      </button>
    </li>
  );
};

export default SortIcon;
