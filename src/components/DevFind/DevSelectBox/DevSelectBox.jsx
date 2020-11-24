import React, { useEffect } from "react";
import "./DevSelectBox.scss";
import DevSelectBoxItem from "./DevSelectBoxItem/DevSelectBoxItem";

const DevSelectBox = ({
  selectMenu,
  setShow,
  selectedMenu,
  setSelectedMenu,
  removeSelectedMenu,
}) => {
  const close = (e) => {
    if (
      e.target &&
      !(
        e.target.classList.contains("Dev-Select-Box-Item-Name") ||
        e.target.classList.contains("Dev-Select-Box-Item-CheckBox") ||
        e.target.classList.contains("Dev-Select-Box-Item-Label") ||
        e.target.classList.contains("Dev-Select-Box-Item") ||
        e.target.classList.contains("Dev-Select-Box")
      )
    ) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  return (
    <>
      <div className="Dev-Select-Box">
        {selectMenu.map((menu, idx) => (
          <DevSelectBoxItem
            key={idx}
            menu={menu}
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
            removeSelectedMenu={removeSelectedMenu}
          />
        ))}
      </div>
    </>
  );
};

export default DevSelectBox;
