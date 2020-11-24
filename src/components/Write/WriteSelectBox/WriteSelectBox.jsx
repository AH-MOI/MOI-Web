import React, { useEffect } from "react";
import "./WriteSelectBox.scss";
import WriteSelectBoxItem from "./WriteSelectBoxItem/WriteSelectBoxItem";

const WriteSelectBox = ({
  item,
  setShow,
  selectedItem,
  setSelectedItem,
  removeSelectedItem,
}) => {
  const close = (e) => {
    if (
      e.target &&
      !(
        e.target.classList.contains("Write-Select-Box-Item-Name") ||
        e.target.classList.contains("Write-Select-Box-Item-CheckBox") ||
        e.target.classList.contains("Write-Select-Box-Item-Label") ||
        e.target.classList.contains("Write-Select-Box-Item") ||
        e.target.classList.contains("Write-Select-Box")
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
      <div className="Write-Select-Box">
        {item.map((item, idx) => (
          <WriteSelectBoxItem
            key={idx}
            item={item}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            removeSelectedItem={removeSelectedItem}
          />
        ))}
      </div>
    </>
  );
};

export default WriteSelectBox;
