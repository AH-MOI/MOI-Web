import React from "react";
import PropTypes from "prop-types";
import "./DevInfo.scss";

const DevInfo = ({devInfo}) => {
  console.log(devInfo.name);
  return (
    
    <>
      <div>
      <div className="DevInfoContainer">
            <div className="ProfileInfo">
                <div className="ProfileImg"/>
                <div className="PlaceName">{devInfo.name}</div>
                <div className="PlaceSchool">{devInfo.school}</div>
                <div style={{fontSize: '12px', marginTop: '20px', marginLeft: '5px'}}>기술 스택</div>
                <div className="PlaceSkills">{devInfo.hashtag}</div>
            </div>
            <div className="IntroContainer">
                <div style={{}}>Introduce</div>
                <div className="OneLineContent">{devInfo.introduce}</div>
                <div>GITHUB LINK</div>
                <a  style={{textDecoration: 'none'}} href={devInfo.github} target="blank">{devInfo.github}</a>
                <div style={{paddingTop: '20px'}}>개인 연락처</div>
                <div>{devInfo.phoneNumber}</div>
            </div>
        </div>
      </div>
    </>
  );
};

DevInfo.propTypes = {

};

export default DevInfo;
