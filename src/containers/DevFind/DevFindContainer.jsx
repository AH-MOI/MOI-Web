import React, { useState } from "react";
import { inject, observer } from "mobx-react";
import Main from "components/DevFind/DevFind";

const DevFindContainer = () => {
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState([]);

  const removeSelectedMenu = (menu) => {
    let array = [...selectedMenu];
    const index = array.indexOf(menu);
    array.splice(index, 1);
    setSelectedMenu(array);
  };

  const initSelectedMenu = () => setSelectedMenu([]);

  return (
    <>
      <Main
        setSearch={setSearch}
        show={show}
        setShow={setShow}
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
        removeSelectedMenu={removeSelectedMenu}
        initSelectedMenu={initSelectedMenu}
      />
    </>
  );
};

export default inject("store")(observer(DevFindContainer));
