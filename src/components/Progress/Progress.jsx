import React from "react";
import "./Progress.scss";
import ProgressProjectItem from "./ProgressProjectItem/ProgressProjectItem";

const Progress = ({ modal, showMoreProgress }) => {
  return (
    <div className="center">
      <div className="Progress">
        <div className="Progress-top container">
          <span className="Progress-top-title">내가 만든 프로젝트</span>
          <div className="Progress-top-box project">
            <ProgressProjectItem
              modal={modal}
              showMoreProgress={showMoreProgress}
            />
          </div>
        </div>
        <div className="Progress-bottom container">
          <span className="Progress-bottom-title">참여하고 있는 프로젝트</span>
          <div className="Progress-bottom-box project">
            <ProgressProjectItem
              modal={modal}
              showMoreProgress={showMoreProgress}
            />
            <ProgressProjectItem
              modal={modal}
              showMoreProgress={showMoreProgress}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Progress.propTypes = {};

export default Progress;
