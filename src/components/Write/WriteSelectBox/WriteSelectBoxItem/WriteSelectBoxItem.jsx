import React, { useState } from "react";
import "./WriteSelectBoxItem.scss";

const WriteSelectBoxItem = ({
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
        className="Write-Select-Box-Item"
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
          className="Write-Select-Box-Item-CheckBox"
          readOnly
        />
        <label className="Write-Select-Box-Item-Label" />
        <span className="Write-Select-Box-Item-Name">{item}</span>
      </div>
    </>
  );
};

export default WriteSelectBoxItem;
