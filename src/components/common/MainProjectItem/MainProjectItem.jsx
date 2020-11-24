import React from "react";
import "./MainProjectItem.scss";
import moment from "moment";

const MainProjectItem = ({
  id,
  name,
  content,
  hashtag,
  lastDay,
  writer,
  setIdx,
}) => {
  const MAX_SHOW_COUNT = 4;
  const techModel = ["Node", "Spring", "React", "ReactNative", "JS", "TS"];
  return (
    <>
      <div className="Main-Project-Item" onClick={() => setIdx(id)}>
        <div className="Main-Project-Item-Thumbnail">
          <div className="Main-Project-Item-Thumbnail-Image"></div>
        </div>
        <div className="Main-Project-Item-Info">
          <div className="Main-Project-Item-Info-Content">
            <p className="Main-Project-Item-Info-Content-Title">{name}</p>
            <p className="Main-Project-Item-Info-Content-Description">
              {content}
            </p>
            <div className="Main-Project-Item-Info-Content-Tech">
              {techModel.map((tech, idx) => (
                <>
                  {idx < MAX_SHOW_COUNT && (
                    <div className="Main-Project-Item-Info-Content-Tech-Tag">
                      {tech}
                    </div>
                  )}
                </>
              ))}
              {techModel.length > MAX_SHOW_COUNT && (
                <div className="Main-Project-Item-Info-Content-Tech-Tag">
                  외 {techModel.length - MAX_SHOW_COUNT}개
                </div>
              )}
            </div>
          </div>
          <div className="Main-Project-Item-Info-Bottom">
            <p className="Main-Project-Item-Info-Bottom-Writer">
              By <span>{writer}</span>
            </p>
            <p className="Main-Project-Item-Info-Bottom-Date">
              {lastDay}
              {/* {moment(new Date()).format("YYYY년 MM월 DD일")} */}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainProjectItem;
