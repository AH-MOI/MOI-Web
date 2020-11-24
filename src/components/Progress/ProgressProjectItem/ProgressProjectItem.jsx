import React from "react";
import PropTypes from "prop-types";
import "./ProgressProjectItem.scss";
import MainProjectItem from "components/common/MainProjectItem/MainProjectItem";
import stores from "stores";
import ProgressModal from "../ProgressModal/ProgressModal";

const ProgressProjectItem = ({ modal, showMoreProgress }) => {
  return (
    <>
      {modal ? (
        <div className="Item">
          <MainProjectItem />
          <ProgressModal showMoreProgress={showMoreProgress} />
        </div>
      ) : (
        <div className="Item" onClick={() => showMoreProgress()}>
          <MainProjectItem />
        </div>
      )}
    </>
  );
};

ProgressProjectItem.propTypes = {};

export default ProgressProjectItem;
