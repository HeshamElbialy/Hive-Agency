import React from "react";
import { MdClose } from "react-icons/md";
import "./modal.css";

const Modal = ({ closeModal, imageIndex, allWorks }) => {
  return (
    <div className="modalBackground">
      <div className="layout"></div>
      <div className="modal-container">
        <button onClick={() => closeModal(false)}>
          <MdClose />
        </button>
        <img src={allWorks[imageIndex].url} alt={allWorks[imageIndex].alt} />
      </div>
    </div>
  );
};

export default Modal;
