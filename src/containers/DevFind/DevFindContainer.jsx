import React, {useState, useCallback, useEffect} from "react";
import { observer } from "mobx-react";
import DevFind from "../../components/DevFind";
import stores from "stores";

const DevFindContainer = ({}) => {
  const {devInfo, handleGetDevInfo} = stores.MyProjectStore;

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

  const handleGetDevInfoCallback = useCallback(async () => {
    setLoading(true);
    await handleGetDevInfo()
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
    handleGetDevInfoCallback();
  }, [handleGetProjectsCallback, handleGetDevInfoCallback]);

  const { handleShow } = stores.ModalStore;
  return (
    <>
      {devInfo && <DevFind
       handleShow={handleShow}
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
        devFindList={devInfo}
       />}
    </>
  );
};

export default observer(DevFindContainer);
