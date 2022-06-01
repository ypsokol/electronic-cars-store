import { useState } from "react";
import { RiMenuLine, RiSteeringLine } from "react-icons/ri";
import Menu from "./Menu";

const Nav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOnClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a className="nav__logo">
          <RiSteeringLine className="nav__logo-icon" />
          Elecar
        </a>
        <Menu isOpen={isOpen} onClose={handleOnClose} />
        <div className="nav__toggle" onClick={handleOnClose}>
          <RiMenuLine />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
