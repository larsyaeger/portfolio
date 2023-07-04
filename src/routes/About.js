import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="About" text="Im a developer" />
      <Footer />
    </div>
  );
};

export default About;
