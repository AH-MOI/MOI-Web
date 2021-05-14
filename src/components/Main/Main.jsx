import React from "react";
import "./Main.scss";
import { ReactComponent as Option } from "../../assets/images/option.svg";
import MainProjectItem from "../common/MainProjectItem";
import { ReactComponent as Search } from "../../assets/images/search.svg";
import MainSelectBox from "./MainSelectBox";
import { GrFormClose } from "react-icons/gr";
import MainRadioBox from "./MainRadioBox/MainRadioBox";
import { techs } from "../../models/techs";
import { schools } from "../../models/schools";
import { languages } from "../../models/languages";

const Main = ({
  setSearch,
  show,
  setShow,
  showLang,
  setShowLang,
  showSchool,
  setShowSchool,
  selectedMenu,
  setSelectedMenu,
  selectedLanguage,
  setSelectedLanguage,
  selectedSchool,
  setSelectedSchool,
  removeSelectedMenu,
  removeSelectedLanguage,
  initSelectedList,
  projects,
}) => {
  return (
    <>
      <div className="Main">
        <div className="Main-Container">
          <div className="Main-Container-Search">
            <div className="Main-Container-Search-Bar">
              <input
                type="text"
                placeholder="무언가로 검색"
                className="Main-Container-Search-Bar-Input"
                onChange={(e) => setSearch(e.target.value)}
              />
              <Search />
            </div>
            <div className="Main-Container-Search-Select">
              <div
                className="Main-Container-Search-Select-Career"
                onClick={() => {
                  setShow(true);
                }}
              >
                <span>분야</span>
                <Option />
                {show && (
                  <MainSelectBox
                    menu={techs}
                    setShow={setShow}
                    selectedMenu={selectedMenu}
                    setSelectedMenu={setSelectedMenu}
                    removeSelectedMenu={removeSelectedMenu}
                  />
                )}
              </div>
              <div
                className="Main-Container-Search-Select-Language"
                onClick={() => {
                  setShowLang(true);
                }}
              >
                <span>개발 언어</span>
                <Option />
                {showLang && (
                  <MainSelectBox
                    menu={languages}
                    setShow={setShowLang}
                    selectedMenu={selectedLanguage}
                    setSelectedMenu={setSelectedLanguage}
                    removeSelectedMenu={removeSelectedLanguage}
                  />
                )}
              </div>
              <div
                className="Main-Container-Search-Select-School"
                onClick={() => {
                  setShowSchool(true);
                }}
              >
                <span>학교</span>
                <Option />
                {showSchool && (
                  <MainRadioBox
                    menu={schools}
                    setShow={setShowSchool}
                    selectedSchool={selectedSchool}
                    setSelectedSchool={setSelectedSchool}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="Main-Container-HashTags">
            {selectedMenu.map((menu, idx) => (
              <div key={idx} className="Main-Container-HashTags-Tech">
                <span>{menu}</span>
                <GrFormClose onClick={() => removeSelectedMenu(menu)} />
              </div>
            ))}
            {selectedLanguage.map((language, idx) => (
              <div key={idx} className="Main-Container-HashTags-Language">
                <span>{language}</span>
                <GrFormClose onClick={() => removeSelectedLanguage(language)} />
              </div>
            ))}
            {selectedSchool && (
              <div className="Main-Container-HashTags-School">
                <span>{selectedSchool}</span>
                <GrFormClose onClick={() => setSelectedSchool("")} />
              </div>
            )}
            {selectedMenu.length ||
            selectedLanguage.length ||
            selectedSchool ? (
              <div
                className="Main-Container-HashTags-Init"
                onClick={() => initSelectedList()}
              >
                모든 태그 초기화
              </div>
            ) : null}
          </div>
          <span className="Main-Container-Count">100개의 프로젝트</span>
          <div className="Main-Container-Projects">
            {projects.map((project, idx) => (
              <MainProjectItem key={idx} project={project} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
