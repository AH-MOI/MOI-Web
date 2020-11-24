import React, { useState } from "react";
import PropTypes from "prop-types";
import "./WritePersonAdd.scss";

const WritePersonAdd = ({ setChangeIdx }) => {
  const [person, setPerson] = useState(1);
  const personIncrease = () => {
    setPerson(person + 1);
  };
  const personDecrease = () => {
    if (person > 1) {
      setPerson(person - 1);
    }
  };
  return (
    <div className="WritePersonAdd-input">
      <div className="button" onClick={() => personDecrease()}>
        <span>-</span>
      </div>
      <select onChange={(e) => setChangeIdx(e.target.value)}>
        <option value="안드로이드">Android</option>
        <option value="웹">Web</option>
        <option value="윈도우">Window</option>
        <option value="게임">Game</option>
        <option value="서버">Server</option>
        <option value="디자인">Design</option>
        <option value="인공지능">AI</option>
      </select>
      <div className="button" onClick={() => personIncrease()}>
        <span>+</span>
      </div>
      <span>{person}명</span>
    </div>
  );
};

WritePersonAdd.propTypes = {};

export default WritePersonAdd;
