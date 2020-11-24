import React, { useEffect } from "react";
import "./MainRadioBox.scss";
import MainRadioBoxItem from "./MainRadioBoxItem";

const MainRadioBox = ({ menu, setShow, selectedSchool, setSelectedSchool }) => {
  const close = (e) => {
    if (
      e.target &&
      !(
        e.target.classList.contains("Main-Radio-Box-Item-Name") ||
        e.target.classList.contains("Main-Radio-Box-Item-Radio") ||
        e.target.classList.contains("Main-Radio-Box-Item-Label") ||
        e.target.classList.contains("Main-Radio-Box-Item") ||
        e.target.classList.contains("Main-Radio-Box")
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
      <div className="Main-Radio-Box">
        {menu.map((item, idx) => (
          <MainRadioBoxItem
            key={idx}
            item={item}
            selectedItem={selectedSchool}
            setSelectedItem={setSelectedSchool}
          />
        ))}
      </div>
    </>
  );
};

export default MainRadioBox;
