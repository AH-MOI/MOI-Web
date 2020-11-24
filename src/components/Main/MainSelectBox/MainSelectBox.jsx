import React, { useEffect } from "react";
import "./MainSelectBox.scss";
import MainSelectBoxItem from "./MainSelectBoxItem/MainSelectBoxItem";

const MainSelectBox = ({
  menu,
  setShow,
  selectedMenu,
  setSelectedMenu,
  removeSelectedMenu,
}) => {
  const close = (e) => {
    if (
      e.target &&
      !(
        e.target.classList.contains("Main-Select-Box-Item-Name") ||
        e.target.classList.contains("Main-Select-Box-Item-CheckBox") ||
        e.target.classList.contains("Main-Select-Box-Item-Label") ||
        e.target.classList.contains("Main-Select-Box-Item") ||
        e.target.classList.contains("Main-Select-Box")
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
      <div className="Main-Select-Box">
        {menu.map((item, idx) => (
          <MainSelectBoxItem
            key={idx}
            item={item}
            selectedItem={selectedMenu}
            setSelectedItem={setSelectedMenu}
            removeSelectedItem={removeSelectedMenu}
          />
        ))}
      </div>
    </>
  );
};

export default MainSelectBox;
