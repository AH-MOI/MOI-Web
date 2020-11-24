import React, { useState } from "react";
import "./MainSelectBoxItem.scss";

const MainSelectBoxItem = ({
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
        className="Main-Select-Box-Item"
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
          className="Main-Select-Box-Item-CheckBox"
          readOnly
        />
        <label className="Main-Select-Box-Item-Label" />
        <span className="Main-Select-Box-Item-Name">{menu}</span>
      </div>
    </>
  );
};

export default MainSelectBoxItem;
