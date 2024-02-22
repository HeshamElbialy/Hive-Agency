import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import LogoImage from "../../assets/Artboard 1 copy 3.jpg";
import { FaArrowUp } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo-box">
        <img src={LogoImage} alt="LogoImage" />
      </div>
      <div className="footer-container container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2>
              <span>Hive</span>Agency
            </h2>
            <div className="social-box">
              <a
                href="https://www.facebook.com/profile.php?id=100086811663752&mibextid=kFxxJD"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/codehouse__?igsh=MThoeGVoenUzenpvNA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a href="/#">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© COPYRIGHT 2024 ALL RIGHTS RESERVED | DESIGNED BY HIVE AGENCY</p>
        <a href="#home">
          <FaArrowUp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
