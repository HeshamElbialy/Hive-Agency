import React from "react";
import { MdClose } from "react-icons/md";

const DesignModal = ({ closeModal, imageIndex, webDesign }) => {
  return (
    <div className="modalBackground">
      <div className="layout"></div>
      <div className="modal-container">
        <button onClick={() => closeModal(false)}>
          <MdClose />
        </button>
        <img src={webDesign[imageIndex].url} alt={webDesign[imageIndex].alt} />
      </div>
    </div>
  );
};

export default DesignModal;
