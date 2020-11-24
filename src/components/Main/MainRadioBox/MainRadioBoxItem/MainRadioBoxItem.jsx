import React from "react";
import "./MainRadioBoxItem.scss";

const MainRadioBoxItem = ({ item, selectedItem, setSelectedItem }) => {
  return (
    <>
      <div
        className="Main-Radio-Box-Item"
        onClick={() => setSelectedItem(item)}
      >
        <input
          type="radio"
          checked={selectedItem === item}
          name="school"
          value={item}
          readOnly
          className="Main-Radio-Box-Item-Radio"
        />
        <label className="Main-Radio-Box-Item-Label" />
        <span className="Main-Radio-Box-Item-Name">{item}</span>
      </div>
    </>
  );
};

export default MainRadioBoxItem;
