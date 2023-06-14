import "./HeroImgStyles.css";
import React from "react";
import IntroImg from "../assets/intro-bg.jpeg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img
          className="intro-img"
          src={IntroImg}
          alt="programming background"
        />
      </div>
      <div className="content">
        <p>HI IM A WEB DEVELOPER</p>
        <h1>Hello REACT DEVELOPER </h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
