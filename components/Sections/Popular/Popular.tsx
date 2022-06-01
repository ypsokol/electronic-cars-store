import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import Card from "./Card";

import popular1 from "/public/assets/images/popular1.webp";
import popular2 from "/public/assets/images/popular2.webp";
import popular3 from "/public/assets/images/popular3.webp";
import popular4 from "/public/assets/images/popular4.webp";
import popular5 from "/public/assets/images/popular5.webp";
import { Sections } from "../../../constants/routes";

const mockPopular = [
  {
    title: "Porsche",
    subtitle: "Turbo S",
    image: popular1,
    price: "175,900",
  },
  {
    title: "Porsche",
    subtitle: "Taycan",
    image: popular2,
    price: "114,900",
  },
  {
    title: "Porsche",
    subtitle: "Turbo S Cross",
    image: popular3,
    price: "150,900",
  },
  {
    title: "Porsche",
    subtitle: "Boxster 718",
    image: popular4,
    price: "125,900",
  },
  {
    title: "Porsche",
    subtitle: "Cayman",
    image: popular5,
    price: "128,900",
  },
];

const Popular = () => {
  return (
    <section className="popular section" id={Sections.popular}>
      <h2 className="section__title">
        Choose Your Electric Car <br /> Of The Porsche Brand
      </h2>

      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        slidesPerView={1.5}
        spaceBetween={15}
        breakpoints={{
          400: {
            slidesPerView: 1.5,
          },
          450: {
            slidesPerView: 1.7,
          },
          520: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 2.6,
          },
          768: {
            slidesPerView: 3,
          },
          900: {
            slidesPerView: 3.3,
          },
          1024: {
            slidesPerView: 3.8,
          },
          1200: {
            slidesPerView: 4,
          },
          1400: {
            slidesPerView: 4.3,
          },
        }}
        grabCursor={true}
        modules={[Pagination]}
        className="popular__swiper"
      >
        {mockPopular.map((item, i) => (
          <SwiperSlide key={i}>
            <Card {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Popular;
