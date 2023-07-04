import "./WorkCardStyles.css";
import React from "react";
import spotifind from "../assets/Spotifind-screenshot.png";
import { NavLink } from "react-router-dom";

const WorkCard = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={spotifind} alt="Spotifind" />
          <h2 className="project-title">Spotifind</h2>
          <div className="pro-details">
            <p>This is a paragraph</p>
            <div className="pro-bnts">
              <NavLink
                to="https://github.com/larsyaeger/spotifind"
                className="btn"
                target="_blank"
              >
                Source
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
