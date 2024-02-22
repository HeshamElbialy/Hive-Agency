import React, { useState } from "react";
import SectionHead from "../SectionHead";
import "react-image-lightbox/style.css";
import { allWorks } from "../../data/allWorks";
import { webDesign } from "../../data/webDesign";
import { webDevelopment } from "../../data/webDevelopment";
import { Branding } from "../../data/branding";
import { mobileApp } from "../../data/mobileApp";
import Modal from "../modal/Modal";
import DesignModal from "../designModal/DesignModal";
import WebDevelopment from "../webDevelopmentModel/WebDevelopmentModel";
import BrandingModel from "../brandingModel/BrandingModel";
import MobileAppsModal from "../mobileAppsModal/MobileAppsModal";

import "./works.css";

const Works = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  return (
    <section className="works" id="works">
      <SectionHead
        title="Our Works"
        text="A showcase of our works"
        className="works__head"
      />
      <div className="tabs-container container">
        <ul className="nav nav-pills mb-5" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              all
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              web design
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-webDesign-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-webDesign"
              type="button"
              role="tab"
              aria-controls="pills-webDesign"
              aria-selected="false"
            >
              web development
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              branding
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-disabled-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-disabled"
              type="button"
              role="tab"
              aria-controls="pills-disabled"
              aria-selected="false"
            >
              mobile apps
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
            tabIndex="0"
          >
            <div className="row g-4">
              {allWorks.map((image, index) => (
                <div className="col-lg-3 col-md-6" key={index}>
                  <div className="image-box">
                    <img
                      src={image.url}
                      alt={image.alt}
                      onClick={() => {
                        setShowModal(true);
                        setCurrentImage(index);
                      }}
                    />
                    {showModal && currentImage === index && (
                      <Modal
                        closeModal={setShowModal}
                        imageIndex={currentImage}
                        allWorks={allWorks}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
            tabIndex="0"
          >
            <div className="row g-4">
              {webDesign.map((image, index) => (
                <div className="col-lg-3 col-md-6" key={index}>
                  <div className="image-box">
                    <img
                      src={image.url}
                      alt={image.alt}
                      onClick={() => {
                        setShowModal(true);
                        setCurrentImage(index);
                      }}
                    />
                    {showModal && currentImage === index && (
                      <DesignModal
                        closeModal={setShowModal}
                        imageIndex={currentImage}
                        webDesign={webDesign}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-webDesign"
            role="tabpanel"
            aria-labelledby="pills-webDesign-tab"
            tabIndex="0"
          >
            <div className="row g-4">
              {webDevelopment.map((image, index) => (
                <div className="col-lg-3 col-md-6" key={index}>
                  <div className="image-box">
                    <img
                      src={image.url}
                      alt={image.alt}
                      onClick={() => {
                        setShowModal(true);
                        setCurrentImage(index);
                      }}
                    />
                    {showModal && currentImage === index && (
                      <WebDevelopment
                        closeModal={setShowModal}
                        imageIndex={currentImage}
                        webDevelopment={webDevelopment}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
            tabIndex="0"
          >
            <div className="row g-4">
              {Branding.map((image, index) => (
                <div className="col-lg-3 col-md-6" key={index}>
                  <div className="image-box">
                    <img
                      src={image.url}
                      alt={image.alt}
                      onClick={() => {
                        setShowModal(true);
                        setCurrentImage(index);
                      }}
                    />
                    {showModal && currentImage === index && (
                      <BrandingModel
                        closeModal={setShowModal}
                        imageIndex={currentImage}
                        Branding={Branding}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-disabled"
            role="tabpanel"
            aria-labelledby="pills-disabled-tab"
            tabIndex="0"
          >
            <div className="row g-4">
              {mobileApp.map((image, index) => (
                <div className="col-lg-3 col-md-6" key={index}>
                  <div className="image-box">
                    <img
                      src={image.url}
                      alt={image.alt}
                      onClick={() => {
                        setShowModal(true);
                        setCurrentImage(index);
                      }}
                    />
                    {showModal && currentImage === index && (
                      <MobileAppsModal
                        closeModal={setShowModal}
                        imageIndex={currentImage}
                        mobileApp={mobileApp}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
