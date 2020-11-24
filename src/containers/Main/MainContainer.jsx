import React, { useState, useCallback } from "react";
import { inject, observer } from "mobx-react";
import Main from "components/Main/Main";
import stores from "stores";
import { useEffect } from "react";

const MainContainer = () => {
  const [show, setShow] = useState(false);
  const [showLang, setShowLang] = useState(false);
  const [showSchool, setShowSchool] = useState(false);

  const [selectedMenu, setSelectedMenu] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState([]);
  const [selectedSchool, setSelectedSchool] = useState("");

  const [search, setSearch] = useState("");

  const { projects, handleGetProjects } = stores.ProjectStore;
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const handleGetProjectsCallback = useCallback(async () => {
    setLoading(true);
    await handleGetProjects()
      .then((res) => {
        if (!res.length) {
          setNotFound(true);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    handleGetProjectsCallback();
  }, [handleGetProjectsCallback]);

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
        projects={projects}
        loading={loading}
        notFound={notFound}
      />
    </>
  );
};

export default inject("store")(observer(MainContainer));
