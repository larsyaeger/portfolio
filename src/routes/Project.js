import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import WorkCard from "../components/WorkCard";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="This is heading for PROJECTS" text="this is text" />
      <WorkCard />
      <Footer />
    </div>
  );
};

export default Project;
