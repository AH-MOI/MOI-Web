import React from "react";
import "./Main.scss";
import { ReactComponent as Option } from "../../assets/images/option.svg";
import { ReactComponent as Search } from "../../assets/images/search.svg";
import MainProjectItem from "./MainProjectItem/MainProjectItem";
import MainSelectBox from "./MainSelectBox";
import { GrFormClose } from "react-icons/gr";

const Main = ({
  setSearch,
  show,
  setShow,
  selectedMenu,
  setSelectedMenu,
  removeSelectedMenu,
  initSelectedMenu,
}) => {
  const selectMenu = [
    "프론트엔드",
    "백엔드",
    "디자인",
    "AI",
    "웹 퍼블리싱",
    "임베디드",
  ];

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
                  setShow((prevState) => !prevState);
                }}
              >
                <span>분야</span>
                <Option />
              </div>
              {show && (
                <MainSelectBox
                  selectMenu={selectMenu}
                  setShow={setShow}
                  selectedMenu={selectedMenu}
                  setSelectedMenu={setSelectedMenu}
                  removeSelectedMenu={removeSelectedMenu}
                />
              )}
              <div className="Main-Container-Search-Select-Language">
                <span>개발 언어</span>
                <Option />
              </div>
              <div className="Main-Container-Search-Select-School">
                <span>학교</span>
                <Option />
              </div>
            </div>
          </div>
          <div className="Main-Container-HashTags">
            {selectedMenu.map((menu, idx) => (
              <div key={idx} className="Main-Container-HashTags-Item">
                <span>{menu}</span>
                <GrFormClose onClick={() => removeSelectedMenu(menu)} />
              </div>
            ))}
            {selectedMenu.length ? (
              <div
                className="Main-Container-HashTags-Init"
                onClick={() => initSelectedMenu()}
              >
                모든 태그 초기화
              </div>
            ) : null}
          </div>
          <span className="Main-Container-Count">100개의 프로젝트</span>
          <div className="Main-Container-Projects">
            <MainProjectItem />
            <MainProjectItem />
            <MainProjectItem />
            <MainProjectItem />
            <MainProjectItem />
            <MainProjectItem />
            <MainProjectItem />
            <MainProjectItem />
            <MainProjectItem />
            <MainProjectItem />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
