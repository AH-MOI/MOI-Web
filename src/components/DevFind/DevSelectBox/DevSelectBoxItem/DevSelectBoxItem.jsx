import React, { useState } from "react";
import "./DevSelectBoxItem.scss";

const DevSelectBoxItem = ({
  menu,
  selectedMenu,
  setSelectedMenu,
  removeSelectedMenu,
}) => {
  const findSelectedMenu = () => {
    if (selectedMenu.find((item) => item === menu)) {
      return true;
    }
    return false;
  };

  const [check, setCheck] = useState(findSelectedMenu);

  return (
    <>
      <div
        className="Dev-Select-Box-Item"
        onClick={() => {
          check
            ? removeSelectedMenu(menu)
            : setSelectedMenu([...selectedMenu, menu]);
          setCheck(!check);
        }}
      >
        <input
          type="checkbox"
          checked={check}
          className="Dev-Select-Box-Item-CheckBox"
          readOnly
        />
        <label className="Dev-Select-Box-Item-Label" />
        <span className="Dev-Select-Box-Item-Name">{menu}</span>
      </div>
    </>
  );
};

export default DevSelectBoxItem;
