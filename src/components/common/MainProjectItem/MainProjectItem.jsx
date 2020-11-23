import React from "react";
import "./MainProjectItem.scss";

const MainProjectItem = ({}) => {
  return (
    <>
      <div className="Main-Project-Item">
        <div className="Main-Project-Item-Thumbnail">
          <div className="Main-Project-Item-Thumbnail-Image"></div>
        </div>
        <div className="Main-Project-Item-Info">
          <p className="Main-Project-Item-Info-Title">
            프로젝트 하실분 찾아요찾아요찾아요찾아요찾아요
          </p>
          <p className="Main-Project-Item-Info-Description">
            동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세
            무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세 남산 위에 저
            소나무 철갑을 두른 듯 바람서리 불변함은
          </p>
          <div className="Main-Project-Item-Info-Tech"></div>
        </div>
      </div>
    </>
  );
};

export default MainProjectItem;
