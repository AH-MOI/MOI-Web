import React from "react";
import "./MainProjectItem.scss";
import moment from "moment";

const MainProjectItem = ({}) => {
  const MAX_SHOW_COUNT = 4;
  const techModel = ["Node", "Spring", "React", "ReactNative", "JS", "TS"];
  return (
    <>
      <div className="Main-Project-Item">
        <div className="Main-Project-Item-Thumbnail">
          <div className="Main-Project-Item-Thumbnail-Image"></div>
        </div>
        <div className="Main-Project-Item-Info">
          <div className="Main-Project-Item-Info-Content">
            <p className="Main-Project-Item-Info-Content-Title">
              프로젝트 하실분 찾아요찾아요찾아요찾아요찾아요
            </p>
            <p className="Main-Project-Item-Info-Content-Description">
              동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세
              무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세 남산 위에
              저 소나무 철갑을 두른 듯 바람서리 불변함은
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
              By <span>홍길동</span>
            </p>
            <p className="Main-Project-Item-Info-Bottom-Date">
              {moment(new Date()).format("YYYY년 MM월 DD일")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainProjectItem;
