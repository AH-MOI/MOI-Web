import React from "react";
import "./Write.scss";
import Modal from "components/common/Modal/Modal";
import WritePersonAdd from "./WritePersonAdd/WritePersonAdd";

const Write = ({
  modal,
  showWriteModal,
  preview,
  date,
  setDate,
  content,
  setContent,
}) => {
  return (
    <div className="Write">
      {modal ? (
        <>
          <Modal showMoreProgress={showWriteModal}>
            <div className="WriteModal">
              <input className="WriteModal-title" placeholder="제목" />
              <div className="WriteModal-middle">
                <div className="WriteModal-middle-img"></div>
                <textarea
                  className="WriteModal-middle-content"
                  placeholder="내용을 입력해 주세요"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
              <div className="WriteModal-bottom">
                <span className="WriteModal-bottom-lastDay">마감날짜</span>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="WriteModal-bottom-calendar"
                />
                <div className="WritePersonAdd">
                  <span className="WritePersonAdd-title">인원</span>
                  <div className="overflow">
                    <WritePersonAdd />
                  </div>
                </div>
                <div className="WriteModal-bottom-button">
                  <div className="WriteModal-bottom-button-personAdd">
                    <span>+</span>
                  </div>
                  <div className="WriteModal-bottom-button-create">
                    <span onClick={() => {}}>만들기</span>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </>
      ) : (
        <></>
      )}
      <div className="WriteButton" onClick={() => showWriteModal()}>
        <span>작성하기</span>
      </div>
    </div>
  );
};

Write.propTypes = {};

export default Write;
