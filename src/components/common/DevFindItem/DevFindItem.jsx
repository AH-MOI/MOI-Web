import React from "react";
import "./DevFindItem.scss";

const DevFindItem = ({ handleShow }) => {
  const MAX_SHOW_COUNT = 4;
  const techModel = ["Node", "Spring", "React", "ReactNative", "JS", "TS"];

  return (
    <>
      <div className="Dev-Find-Item" onClick={handleShow} key={idx}>
        <div className="Dev-Find-Item-Profile">
          <div className="Dev-Find-Item-Profile-Image"></div>
        </div>
        <div className="Dev-Find-Item-Info">
          <div className="Dev-Find-Item-Info-Content">
            <p className="Dev-Find-Item-Info-Content-Name">문재민</p>
            <p className="Dev-Find-Item-Info-Content-Produce">
              동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세
              무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세 남산 위에
              저 소나무 철갑을 두른 듯 바람서리 불변함은
              {devInfo.name}
            </p>
            <p className="Dev-Find-Item-Info-Content-Produce">
              {devInfo.introduce}
            </p>
            <div className="Dev-Find-Item-Info-Content-Tech">
              {techModel.map((tech, idx) => (
                <>
                  {idx < MAX_SHOW_COUNT && (
                    <div
                      className="Dev-Find-Item-Info-Content-Tech-Tag"
                      key={idx}
                    >
                      {tech}
                    </div>
                  )}
                </>
              ))}
              {techModel.length > MAX_SHOW_COUNT && (
                <div className="Dev-Find-Item-Info-Content-Tech-Tag" key={idx}>
                  외 {techModel.length - MAX_SHOW_COUNT}개
                </div>
              )}
            </div>
          </div>
          <div className="Dev-Find-Item-Info-Bottom">
            <p className="Dev-Find-Item-Info-Bottom-Rating">
              평점: <span>{devInfo.star}</span>/5.0
            </p>
            <p className="Dev-Find-Item-Info-Bottom-Belong">{devInfo.school}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DevFindItem;
