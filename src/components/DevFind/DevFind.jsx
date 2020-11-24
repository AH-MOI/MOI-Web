import React from "react";
import "./DevFind.scss";
import { ReactComponent as Option } from "../../assets/images/option.svg";
import DevFindItem from "../common/DevFindItem";
import { ReactComponent as Search } from "../../assets/images/search.svg";
import DevSelectBox from "./DevSelectBox";
import { GrFormClose } from "react-icons/gr";
import DevInfoContainer from "../../containers/DevInfo/DevInfoContainer";

const Dev = ({
  // setSearch,
  // show,
  // setShow,
  // selectedMenu,
  // setSelectedMenu,
  // removeSelectedMenu,
  // initSelectedMenu
  handleShow
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
    <DevInfoContainer />
      <div className="Dev">
        <div className="Dev-Container">
          <div className="Dev-Container-Search">
            <div className="Dev-Container-Search-Bar">
              <input
                type="text"
                placeholder="무언가로 검색"
                className="Dev-Container-Search-Bar-Input"
                onChange={(e) => setSearch(e.target.value)}
              />
              <Search />
            </div>
            <div className="Dev-Container-Search-Select">
              <div
                className="Dev-Container-Search-Select-Career"
                onClick={() => {
                  // setShow((prevState) => !prevState);
                }}
              >
                <span>분야</span>
                <Option />
              </div>
              {/* {show && (
                <DevSelectBox
                  selectMenu={selectMenu}
                  setShow={setShow}
                  selectedMenu={selectedMenu}
                  setSelectedMenu={setSelectedMenu}
                  removeSelectedMenu={removeSelectedMenu}
                />
              )} */}
              <div className="Dev-Container-Search-Select-Language">
                <span>개발 언어</span>
                <Option />
              </div>
              <div className="Dev-Container-Search-Select-School">
                <span>학교</span>
                <Option />
              </div>
            </div>
          </div>
          <div className="Dev-Container-HashTags">
            {/* {selectedMenu.map((menu, idx) => (
              <div key={idx} className="Dev-Container-HashTags-Item">
                <span>{menu}</span>
                <GrFormClose onClick={() => removeSelectedMenu(menu)} />
              </div>
            ))}
            {selectedMenu.length ? (
              <div
                className="Dev-Container-HashTags-Init"
                onClick={() => initSelectedMenu()}
              >
                모든 태그 초기화
              </div>
            ) : null} */}
          </div>
          <span className="Dev-Container-Count">100개의 프로젝트</span>
          <div className="Dev-Container-Projects">
            <DevFindItem handleShow={handleShow}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dev;
