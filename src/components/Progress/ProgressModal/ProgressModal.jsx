import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./ProgressModal.scss";
import Modal from "components/common/Modal/Modal";

const ProgressModal = ({ modal, showMoreProgress }) => {
  const person = ["정성훈", "임규민", "서진", "유시온", "이진혁", "문재민"];
  const skill = ["node.js", "react.js", "javascript", "express"];
  useEffect(() => {
    modal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modal]);
  return (
    <>
      <Modal showMoreProgress={showMoreProgress}>
        <div className="ProgressModal">
          <div className="ProgressModal-top">SW마이스터고 연합 해커톤</div>
          <div className="ProgressModal-bottom">
            <div className="ProgressModal-bottom-left">
              가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
              가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사
              아자차카타파하가나다라마
              바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타
              파하가나다라마바사아자차카타
              파하가나다라마바사아자차카타파하가나다라마바
              사아자차카타파하가나다라마바사아자차카타파하가나다
              라마바사아자차카타파하가나다라마바사아자차카타파하가나다
              라마바사아자차카타파하가나다라마바사아자차카타파하가
              나다라마바사아자차카타파하가나다라마바사아자차카타파하가
              나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마
              바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
              바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
              바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
              바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
              바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
              바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
              바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
              바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
            </div>
            <div className="ProgressModal-bottom-right">
              <div className="ProgressModal-bottom-right-person">
                <span className="ProgressModal-bottom-right-person-title title">
                  지원자
                </span>
                {person.map((person) => (
                  <span>{person}</span>
                ))}
              </div>
              <div className="ProgressModal-bottom-right-tech">
                <span className="title">프론트 - 웹</span>
                <span>3/5</span>
                <span className="title">백엔드 - 웹</span>
                <span>2/4</span>
              </div>
              <div className="ProgressModal-bottom-right-hash">
                <span className="title">스택</span>

                <div className="ProgressModal-bottom-right-hash-container">
                  {skill.map((skill) => (
                    <div className="ProgressModal-bottom-right-hash-container-item">
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              <span className="name">정성훈</span>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

ProgressModal.propTypes = {};

export default ProgressModal;
