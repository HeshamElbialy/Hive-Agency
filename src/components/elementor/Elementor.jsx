import React from "react";
import strategyImage from "../../assets/strategy.jpg";
import DesignImage from "../../assets/design.jpg";
import DevelopImage from "../../assets/develop.jpg";
import SupportImage from "../../assets/img_2-800x800.jpg";
import "./elementor.css";

const Elementor = () => {
  return (
    <section className="elementor" id="about">
      <div className="elementor-container container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 columnBox columnBox1">
            <div className="row align-items-center ">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="title-box d-flex align-items-center">
                  <h1>01</h1>
                  <h2 className="title">Strategy</h2>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="image-box">
                  <img src={strategyImage} alt="strategyImage" />
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <p>
                  We define your competition and target audience. Discover what
                  is working in your online industry, then design your website
                  accordingly.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 columnBox columnBox2">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <p>
                  Color scheme, layout, sitemap, and style. We will bring your
                  brand to life with a one of a kind masterpiece, built just for
                  you..
                </p>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="image-box">
                  <img src={DesignImage} alt="strategyImage" />
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="title-box d-flex align-items-center">
                  <h2 className="title">Desgin</h2>
                  <h1>02</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 columnBox columnBox3">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="title-box d-flex align-items-center">
                  <h1>03</h1>
                  <h2 className="title">Develop</h2>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="image-box">
                  <img src={DevelopImage} alt="DevelopImage" />
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <p>
                  We turn your ideas into a reality. &our website is placed on a
                  “development server” where you get to watch the whole process,
                  live.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 columnBox columnBox4">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <p>
                  This is where you go live, to the world. Design, marketing,
                  and maintenance; we’ll be at your side for the life of your
                  site.
                </p>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="image-box">
                  <img src={SupportImage} alt="SupportImage" />
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="title-box d-flex align-items-center">
                  <h2 className="title">Support</h2>
                  <h1>04</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Elementor;
