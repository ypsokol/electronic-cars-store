import type { NextPage } from "next";
import Head from "../components/Layout/Head";
import Nav from "../components/Layout/Nav";
import HomeSection from "../components/Sections/Home";

import About from "../components/Sections/About";
import Popular from "../components/Sections/Popular";
import Features from "../components/Sections/Features";
import Featured from "../components/Sections/Featured";
import Offer from "../components/Sections/Offer";
import Logos from "../components/Sections/Logos";
import Footer from "../components/Layout/Footer";
import Anchor from "../components/UI/Anchor";

const Home: NextPage = () => {
  return (
    <div>
      <Head />
      <Nav />

      <main className="main">
        <HomeSection />
        <About />
        <Popular />
        <Features />
        <Featured />
        <Offer />
        <Logos />
      </main>
      <Anchor />
      <Footer />
    </div>
  );
};

export default Home;
