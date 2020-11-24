import React, { useState } from "react";
import PropTypes from "prop-types";
import "./WritePersonAdd.scss";

const WritePersonAdd = ({}) => {
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
      <select>
        <option>Android</option>
        <option>Web</option>
        <option>Window</option>
        <option>Game</option>
        <option>Server</option>
        <option>Design</option>
        <option>AI</option>
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
