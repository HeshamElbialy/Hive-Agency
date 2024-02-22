import React from "react";
import { MdClose } from "react-icons/md";

const WebDevelopment = ({ closeModal, imageIndex, webDevelopment }) => {
  return (
    <div className="modalBackground">
      <div className="layout"></div>
      <div className="modal-container">
        <button onClick={() => closeModal(false)}>
          <MdClose />
        </button>
        <img
          src={webDevelopment[imageIndex].url}
          alt={webDevelopment[imageIndex].alt}
        />
      </div>
    </div>
  );
};

export default WebDevelopment;
