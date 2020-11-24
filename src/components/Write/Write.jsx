import React from "react";
import "./Write.scss";
import Modal from "components/common/Modal/Modal";
import WritePersonAdd from "./WritePersonAdd/WritePersonAdd";
import { toast } from "react-toastify";

const Write = ({
  modal,
  showWriteModal,
  date,
  setDate,
  content,
  setContent,
  handleCreateProject,
  hashTag,
  setHashTag,
  title,
  setTitle,
  setChangeIdx,
}) => {
  return (
    <div className="Write">
      {modal ? (
        <>
          <Modal showMoreProgress={showWriteModal}>
            <div className="WriteModal">
              <input
                className="WriteModal-title"
                placeholder="제목"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <div className="WriteModal-middle">
                <div className="WriteModal-middle-img"></div>
                <textarea
                  className="WriteModal-middle-content"
                  placeholder="내용을 입력해 주세요"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
              <div className="WriteModal-hashtag">
                <input
                  placeholder="해쉬태그를 입력해주세요"
                  value={hashTag}
                  onChange={(e) => setHashTag(e.target.value)}
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
                    <WritePersonAdd setChangeIdx={setChangeIdx} />
                  </div>
                </div>
                <div className="WriteModal-bottom-button">
                  <div className="WriteModal-bottom-button-personAdd">
                    <span>+</span>
                  </div>
                  <div
                    className="WriteModal-bottom-button-create"
                    onClick={() => handleCreateProject()}
                  >
                    <span>만들기</span>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </>
      ) : (
        <></>
      )}
      <div
        className="WriteButton"
        onClick={() => {
          // showWriteModal();
          toast.success("아이씻팔");
        }}
      >
        <span>작성하기</span>
      </div>
    </div>
  );
};

Write.propTypes = {};

export default Write;
