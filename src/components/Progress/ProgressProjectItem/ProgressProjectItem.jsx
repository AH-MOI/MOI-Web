import React from "react";
import PropTypes from "prop-types";
import "./ProgressProjectItem.scss";
import MainProjectItem from "components/common/MainProjectItem/MainProjectItem";
import stores from "stores";
import ProgressModal from "../ProgressModal/ProgressModal";

const ProgressProjectItem = ({
  modal,
  showMoreProgress,
  id,
  name,
  content,
  hashtag,
  lastDay,
  writer,
  setIdx,
}) => {
  return (
    <>
      {modal ? (
        <div className="Item">
          <MainProjectItem
            id={id}
            name={name}
            content={content}
            hashtag={hashtag}
            lastDay={lastDay}
            writer={writer}
            setIdx={setIdx}
          />
          <ProgressModal showMoreProgress={showMoreProgress} />
        </div>
      ) : (
        <div className="Item" onClick={() => showMoreProgress()}>
          <MainProjectItem
            id={id}
            name={name}
            content={content}
            hashtag={hashtag}
            lastDay={lastDay}
            writer={writer}
            setIdx={setIdx}
          />
        </div>
      )}
    </>
  );
};

ProgressProjectItem.propTypes = {};

export default ProgressProjectItem;
