import "./FooterStyles.css";

import React from "react";

import { FaHome, FaPhone, FaMailBulk, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Victoria, British Columbia</p>
              <p>Canada</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              204-806-6263
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              larsyaeger@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About</h4>
          <p>
            ladsfasfsadf adsfg kadfsjg kldfjs gkl jaersig j9aerigju 89aw4fg
            89ahjf jkasj fklas kfjhas jkfajksf
          </p>
          <div className="social">
            <FaLinkedin
              size={40}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
