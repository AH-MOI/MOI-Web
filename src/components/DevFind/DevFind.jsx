import React, { useState } from "react";
import "./DevFind.scss";
import { ReactComponent as Option } from "../../assets/images/option.svg";
import DevFindItem from "../common/DevFindItem";
import { ReactComponent as Search } from "../../assets/images/search.svg";
import DevSelectBox from "../Main/MainSelectBox/MainSelectBox";
import { GrFormClose } from "react-icons/gr";
import DevInfoContainer from "../../containers/DevInfo/DevInfoContainer";
import DevRadioBox from "../../components/Main/MainRadioBox/MainRadioBox";

const DevFind = ({
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
    loading,
    notFound,
    handleShow,
    devFindList
  }) => {
    const techs = [
      "프론트엔드",
      "백엔드",
      "디자인",
      "AI",
      "웹 퍼블리싱",
      "임베디드",
      "정성훈",
      "정성훈 ㅄ",
      "멍청한 성훈이",
      "집가고싶다",
      "프론트하기싫당",
      "살려조",
      "주글거같앵",
    ];
  
    const languages = [
      "C",
      "C#",
      "C++",
      "JAVA",
      "Python",
      "Kotlin",
      "Javascript",
      "Typescript",
    ];
    const schools = ["대덕소프트웨어고", "대구소프트웨어고", "광주소프트웨어고"];

    return (
      <>
      <DevInfoContainer/>
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
                    <DevSelectBox
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
                    <DevSelectBox
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
                    <DevRadioBox
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
            <span className="Main-Container-Count">100명의 개발자</span>
            <div className="Main-Container-Projects">
            {projects.map((project, idx) => (
              <DevProjectItem key={idx} project={project} />
            ))}
            
            {devFindList && devFindList.map((item, idx) => <DevFindItem handleShow={handleShow} devInfo={item} key={idx} onClick={console.log(`${this}`)} />)}
          </div>
        </div>
      </div>
    </>
  );
};


export default DevFind;
