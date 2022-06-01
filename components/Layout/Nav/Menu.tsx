import { RiCloseLine } from "react-icons/ri";
import Item from "./Item";
import { Sections } from "../../../constants/routes";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Menu = ({ isOpen, onClose }: Props) => {
  return (
    <div className={`nav__menu ${isOpen && "nav__show-menu"}`}>
      <ul className="nav__menu-list">
        <Item href={`#${Sections.home}`} title="Home" onClick={onClose} />
        <Item href={`#${Sections.about}`} title="About" onClick={onClose} />
        <Item href={`#${Sections.popular}`} title="Popular" onClick={onClose} />
        <Item
          href={`#${Sections.featured}`}
          title="Featured"
          onClick={onClose}
        />
      </ul>
      <div className="nav__close" onClick={onClose}>
        <RiCloseLine />
      </div>
    </div>
  );
};

export default Menu;
