import React from "react";
import PropTypes from "prop-types";
import "./Progress.scss";
import MainProjectItem from "components/common/MainProjectItem/MainProjectItem";

const Progress = ({}) => {
  return (
    <div className="center">
      <div className="Progress">
        <div className="Progress-top container">
          <span className="Progress-top-title">내가 만든 프로젝트</span>
          <div className="Progress-top-box project">
            <div className="project-box">
              <MainProjectItem />
            </div>
            <div className="project-box">
              <MainProjectItem />
            </div>
            <div className="project-box">
              <MainProjectItem />
            </div>
            <div className="project-box">
              <MainProjectItem />
            </div>
            <div className="project-box">
              <MainProjectItem />
            </div>
            <div className="project-box">
              <MainProjectItem />
            </div>
            <div className="project-box">
              <MainProjectItem />
            </div>
            <div className="project-box">
              <MainProjectItem />
            </div>
            <div className="project-box">
              <MainProjectItem />
            </div>
            <div className="project-box">
              <MainProjectItem />
            </div>
            <div className="project-box">
              <MainProjectItem />
            </div>
            <div className="project-box">
              <MainProjectItem />
            </div>
          </div>
        </div>
        <div className="Progress-bottom container">
          <span className="Progress-bottom-title">참여하고 있는 프로젝트</span>
          <div className="Progress-bottom-box project">
            <div>
              <MainProjectItem />
            </div>
            <div>
              <MainProjectItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Progress.propTypes = {};

export default Progress;
