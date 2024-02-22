import React from "react";

const SectionHead = ({ text, title, className }) => {
  return (
    <div className={`section__head ${className}`}>
      <h2
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="500"
      >
        {title}
      </h2>
      <span
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        {text}
      </span>
    </div>
  );
};

export default SectionHead;
