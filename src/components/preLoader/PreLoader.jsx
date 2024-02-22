import React from "react";
import PreLoaderImage from "../../assets/Artboard 1.jpg";
import "./preLoader.css"

const PreLoader = () => {
  return (
    <div className="preLoader">
      <div className="preLoader-container">
        <img src={PreLoaderImage} alt="PreLoaderImage" />
      </div>
    </div>
  );
};

export default PreLoader;
