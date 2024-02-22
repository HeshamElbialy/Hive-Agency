import React, { useEffect } from "react";
import Aos from "aos";
import SectionHead from "../SectionHead";
import { services } from "../../data";
import "./services.css";

const Services = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="services" id="services">
      <SectionHead
        title="OUR AGENCY"
        text="Who we are & what we do"
        className="services__head"
      />
      <div className="services-container container">
        <div className="row">
          {services.map(({ id, image, title, description }) => {
            return (
              <div className="col-lg-4 col-md-6 g-4" key={id}>
                <div
                  className="card"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="700"
                >
                  <div className="image-box">
                    <img src={image} alt={title} />
                  </div>
                  <div className="text-box">
                    <h4>{title}</h4>
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
