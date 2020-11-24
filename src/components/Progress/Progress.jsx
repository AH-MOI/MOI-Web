import React from "react";
import "./Progress.scss";
import ProgressProjectItem from "./ProgressProjectItem";

const Progress = ({
  modal,
  showMoreProgress,
  myProgress,
  progress,
  setIdx,
  getProgress,
  loading,
}) => {
  return (
    <div className="center">
      <div className="Progress">
        <div className="Progress-top container">
          <span className="Progress-top-title">내가 만든 프로젝트</span>
          <div className="Progress-top-box project">
            {myProgress.map((_myProgress) => (
              <ProgressProjectItem
                modal={modal}
                showMoreProgress={showMoreProgress}
                myProgress={_myProgress}
                setIdx={setIdx}
                getProgress={getProgress}
                loading={loading}
              />
            ))}
          </div>
        </div>
        <div className="Progress-bottom container">
          <span className="Progress-bottom-title">참여하고 있는 프로젝트</span>
          <div className="Progress-bottom-box project">
            {progress ? (
              progress.map((progress) => (
                <ProgressProjectItem
                  modal={modal}
                  myProgress={progress}
                  showMoreProgress={showMoreProgress}
                  setIdx={setIdx}
                  getProgress={getProgress}
                  loading={loading}
                />
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Progress.propTypes = {};

export default Progress;
