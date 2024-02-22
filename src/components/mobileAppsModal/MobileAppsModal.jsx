import React from "react";
import { MdClose } from "react-icons/md";

const MobileAppsModal = ({ closeModal, imageIndex, mobileApp }) => {
  return (
    <div className="modalBackground">
      <div className="layout"></div>
      <div className="modal-container">
        <button onClick={() => closeModal(false)}>
          <MdClose />
        </button>
        <img src={mobileApp[imageIndex].url} alt={mobileApp[imageIndex].alt} />
      </div>
    </div>
  );
};

export default MobileAppsModal;
