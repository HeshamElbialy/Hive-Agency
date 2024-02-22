import React, { useEffect } from "react";
import SubLogo from "../../assets/Sub_Logo-removebg-preview.png";
import Aos from "aos";
import "./hero.css";

const Hero = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <header className="hero" id="home">
      <div className="overlay"></div>
      <div className="hero-container container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-box">
              <h6
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                welcome to
              </h6>
              <h2
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="700"
                data-aos-delay="100"
              >
                hive agency
              </h2>
              <p
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                <span>Web Design</span>, <span>Mobile Apps</span> &
                <span> Branding</span>
              </p>
              <a className="lg-btn" href="#contact">
                get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
