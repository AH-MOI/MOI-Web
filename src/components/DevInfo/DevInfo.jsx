import React from "react";
import PropTypes from "prop-types";
import "./DevInfo.scss";

const DevInfo = ({}) => {
  return (
    <>
      <div>
      <div className="DevInfoContainer">
            <div className="ProfileInfo">
                <div className="ProfileImg"/>
                <div className="PlaceName">문재민</div>
                <div className="PlaceSchool">광주 소프트웨어 마이스터고</div>
                <div style={{fontSize: '12px', marginTop: '20px', marginLeft: '5px'}}>기술 스택</div>
                <div className="PlaceSkills">파이썬, 리액트</div>
            </div>
            <div className="IntroContainer">
                <div style={{}}>Introduce</div>
                <div className="OneLineContent">저는 빠르게 적응하고 유연하게 배우는 사람입니다. 무슨 일이든 빠르게 시도해보고 배우는
                     성격입니다. 또 새로운 것에 호기심이 많아서 가르쳐주는 것을 스폰지처럼 체득합니다.
                      저는 이런 장점으로 ㅇㅇㅇㅇ 회사에서 디지털 마케팅 직무를 수행하고 싶습니다.</div>
                <div>GITHUB LINK</div>
                <a  style={{textDecoration: 'none'}} href="https://github.com/answoals11/ReactProject.git" target="blank">https://github.com/answoals11/ReactProject.git</a>
                <div style={{paddingTop: '20px'}}>개인 연락처</div>
                <div>010-1234-5678</div>
            </div>
        </div>
      </div>
    </>
  );
};

DevInfo.propTypes = {

};

export default DevInfo;
