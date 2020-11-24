import React, { useState } from "react";
import "./MainSelectBoxItem.scss";

const MainSelectBoxItem = ({
  item,
  selectedItem,
  setSelectedItem,
  removeSelectedItem,
}) => {
  const findSelectedMenu = () => {
    if (selectedItem.find((_item) => _item === item)) {
      return true;
    }
    return false;
  };

  const [check, setCheck] = useState(findSelectedMenu);

  return (
    <>
      <div
        className="Main-Select-Box-Item"
        onClick={() => {
          check
            ? removeSelectedItem(item)
            : setSelectedItem([...selectedItem, item]);
          setCheck(!check);
        }}
      >
        <input
          type="checkbox"
          checked={check}
          className="Main-Select-Box-Item-CheckBox"
          readOnly
        />
        <label className="Main-Select-Box-Item-Label" />
        <span className="Main-Select-Box-Item-Name">{item}</span>
      </div>
    </>
  );
};

export default MainSelectBoxItem;
