import React from "react";
import PropTypes from "prop-types";
import "./Modal.scss";

const Modal = ({ children, showMoreProgress }) => {
  return (
    <div>
      <div
        className="background"
        onClick={() => {
          showMoreProgress();
        }}
      ></div>
      {children}
    </div>
  );
};

Modal.propTypes = {};

export default Modal;
