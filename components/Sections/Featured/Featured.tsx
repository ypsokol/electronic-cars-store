import Image from "next/image";
import { useState } from "react";

import Card from "./Card";
import SortIcon from "./SortIcon";

import featured1 from "../../../public/assets/images/featured1.webp";
import featured2 from "../../../public/assets/images/featured2.webp";
import featured3 from "../../../public/assets/images/featured3.webp";
import featured4 from "../../../public/assets/images/featured4.webp";
import featured5 from "../../../public/assets/images/featured5.webp";

import logo2 from "../../../public/assets/images/logo2.webp";
import logo3 from "../../../public/assets/images/logo3.webp";
import logo1 from "../../../public/assets/images/logo1.webp";
import { Sections } from "../../../constants/routes";

const mockState = [
  {
    title: "Tesla",
    subtitle: "Model X",
    image: featured1,
    price: "$98,900",
    sort: "tesla",
    manufacturer: "tesla",
  },
  {
    title: "Tesla",
    subtitle: "Model 3",
    image: featured2,
    price: "$45,900",
    manufacturer: "tesla",
  },
  {
    title: "Audi",
    subtitle: "E-tron",
    image: featured3,
    price: "$175,900",
    manufacturer: "audi",
  },
  {
    title: "Porsche",
    subtitle: "Boxster 987",
    image: featured4,
    price: "$126,900",
    manufacturer: "porsche",
  },
  {
    title: "Porsche",
    subtitle: "Panamera",
    image: featured5,
    price: "$126,900",
    manufacturer: "porsche",
  },
];

type Sort = "all" | "tesla" | "porsche" | "audi";

const Featured = () => {
  const [sort, setSort] = useState<Sort>("all");

  const sorted = () => {
    switch (sort) {
      case "all":
        return mockState;
      default:
        return mockState.filter((item) => item.manufacturer === sort);
    }
  };

  const handleOnSort = (type: Sort) => () => {
    setSort(type);
  };

  return (
    <section className="featured section" id={Sections.featured}>
      <h2 className="section__title">Featured Luxury Cars</h2>

      <div className="featured__container container">
        <ul className="featured__filters">
          <SortIcon onClick={handleOnSort("all")}>All</SortIcon>
          <SortIcon onClick={handleOnSort("tesla")}>
            <Image src={logo3} alt="" />
          </SortIcon>
          <SortIcon onClick={handleOnSort("audi")}>
            <Image src={logo2} alt="" />
          </SortIcon>
          <SortIcon onClick={handleOnSort("porsche")}>
            <Image src={logo1} alt="" />
          </SortIcon>
        </ul>

        <div className="featured__content grid">
          {sorted().map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
