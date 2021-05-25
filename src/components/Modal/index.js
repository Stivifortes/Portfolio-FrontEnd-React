import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Form from "../Form";
import "./modal.css";

export default function Modal({ handleCloseModal }) {
  return (
    <div className="modal" onClick={handleCloseModal}>
      <div
        className="modal-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="modal-header">
          <h4>Add Project</h4>
        </div>
        <div className="modal-body">
          <Form />
        </div>
        <div className="modal-footer">
          <button onClick={handleCloseModal}>
            <FaTimes />
          </button>
        </div>
      </div>
    </div>
  );
}
