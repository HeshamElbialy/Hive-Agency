import React from "react";
import { MdClose } from "react-icons/md";

const BrandingModel = ({ closeModal, imageIndex, Branding }) => {
  return (
    <div className="modalBackground">
      <div className="layout"></div>
      <div className="modal-container">
        <button onClick={() => closeModal(false)}>
          <MdClose />
        </button>
        <img src={Branding[imageIndex].url} alt={Branding[imageIndex].alt} />
      </div>
    </div>
  );
};

export default BrandingModel;
