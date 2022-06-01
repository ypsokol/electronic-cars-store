import {
  RiFacebookFill,
  RiInstagramLine,
  RiSteeringLine,
  RiTwitterLine,
} from "react-icons/ri";
import Content from "./Content";

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="shape shape__big" />
      <div className="shape shape__small" />

      <div className="footer__container container grid">
        <div className="footer__content">
          <a href="components/Layout/Footer/Footer#" className="footer__logo">
            <RiSteeringLine className="footer__logo-icon" /> Elecar
          </a>
          <p className="footer__description">
            We offer the best electric cars of <br />
            the most recognized brands in <br />
            the world.
          </p>
        </div>

        <Content title="Company" links={["About", "Cars", "History", "Shop"]} />
        <Content
          title="Information"
          links={["Request a quote", "Find a dealer", "Contact us", "Services"]}
        />
        <Content title="Follow us">
          <ul className="footer__social">
            <a
              href="components/Layout/Footer/Footer"
              rel="noreferrer"
              target="_blank"
              className="footer__social-link"
            >
              <RiFacebookFill className="footer__socials-icon" />
            </a>
            <a
              href="components/Layout/Footer/Footer"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link"
            >
              <RiInstagramLine className="footer__socials-icon" />
            </a>
            <a
              href="components/Layout/Footer/Footer"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link"
            >
              <RiTwitterLine className="footer__socials-icon" />
            </a>
          </ul>
        </Content>
      </div>

      <span className="footer__copy">&#169; YPSOKOL. All rights reserved</span>
    </footer>
  );
};

export default Footer;
