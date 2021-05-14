import React, { useEffect } from "react";
import ReactLoading from "react-loading";
import "./ProgressModal.scss";
import Modal from "components/common/Modal/Modal";
import { BsCheckCircle } from "react-icons/bs";
const ProgressModal = ({
  modal,
  showMoreProgress,
  getProgress,
  loading,
  handleApplyStudent,
}) => {
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
      {loading ? (
        <Modal showMoreProgress={showMoreProgress}>
          {getProgress && (
            <div className="ProgressModal">
              <div className="ProgressModal-top">{getProgress.title}</div>
              <div className="ProgressModal-bottom">
                <div className="ProgressModal-bottom-left">
                  {getProgress.content}
                </div>
                <div className="ProgressModal-bottom-right">
                  <div className="ProgressModal-bottom-right-person">
                    <span className="ProgressModal-bottom-right-person-title title">
                      지원자
                    </span>
                    {person.map((person) => (
                      <div className="person">
                        <span>{person}</span>
                        <BsCheckCircle
                          className="successButton"
                          onClick={() => handleApplyStudent()}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="ProgressModal-bottom-right-tech">
                    {getProgress.areas.map((area, _idx) => (
                      <>
                        <span key={_idx} className="title">
                          {area}
                        </span>
                        {getProgress.personnel.map((personnel, idx) => (
                          <>
                            {idx === _idx ? (
                              <span key={idx}>{personnel}</span>
                            ) : (
                              <></>
                            )}
                          </>
                        ))}
                      </>
                    ))}
                  </div>
                  <div className="ProgressModal-bottom-right-hash">
                    <span className="title">스택</span>
                    <div className="ProgressModal-bottom-right-hash-container">
                      {getProgress.hashtag.map((skill, idx) => (
                        <div
                          key={idx}
                          className="ProgressModal-bottom-right-hash-container-item"
                        >
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <span className="name">{getProgress.writer}</span>
                </div>
              </div>
            </div>
          )}
        </Modal>
      ) : (
        <Modal showMoreProgress={showMoreProgress}>
          <div className="ProgressModal">
            <div className="center">
              <ReactLoading
                type={"cubes"}
                color={"#000000"}
                height={"10%"}
                width={"10%"}
              />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

ProgressModal.propTypes = {};

export default ProgressModal;
