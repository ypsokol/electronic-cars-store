import Logo from "./Logo";

import logo1 from "/public/assets/images/logo1.webp";
import logo2 from "/public/assets/images/logo2.webp";
import logo3 from "/public/assets/images/logo3.webp";
import logo5 from "/public/assets/images/logo5.webp";
import logo4 from "/public/assets/images/logo4.webp";
import logo6 from "/public/assets/images/logo6.webp";

const mockLogos = [logo1, logo2, logo3, logo4, logo5, logo6];

const Logos = () => {
  return (
    <section className="logos section">
      <div className="logos__container container grid">
        {mockLogos.map((image, i) => (
          <Logo key={i} image={image} />
        ))}
      </div>
    </section>
  );
};

export default Logos;
