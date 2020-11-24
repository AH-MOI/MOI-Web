import React, { useState } from "react";
import { inject, observer } from "mobx-react";
import Main from "components/Main/Main";

const MainContainer = () => {
  const [search, setSearch] = useState("");

  const [show, setShow] = useState(false);
  const [showLang, setShowLang] = useState(false);
  const [showSchool, setShowSchool] = useState(false);

  const [selectedMenu, setSelectedMenu] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState([]);
  const [selectedSchool, setSelectedSchool] = useState("");

  const removeSelectedMenu = (menu) => {
    let array = [...selectedMenu];
    const index = array.indexOf(menu);
    array.splice(index, 1);
    setSelectedMenu(array);
  };

  const removeSelectedLanguage = (language) => {
    let array = [...selectedLanguage];
    const index = array.indexOf(language);
    array.splice(index, 1);
    setSelectedLanguage(array);
  };

  const initSelectedList = () => {
    setSelectedMenu([]);
    setSelectedLanguage([]);
    setSelectedSchool("");
  };

  return (
    <>
      <Main
        setSearch={setSearch}
        show={show}
        setShow={setShow}
        showLang={showLang}
        setShowLang={setShowLang}
        showSchool={showSchool}
        setShowSchool={setShowSchool}
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        selectedSchool={selectedSchool}
        setSelectedSchool={setSelectedSchool}
        removeSelectedMenu={removeSelectedMenu}
        removeSelectedLanguage={removeSelectedLanguage}
        initSelectedList={initSelectedList}
      />
    </>
  );
};

export default inject("store")(observer(MainContainer));
