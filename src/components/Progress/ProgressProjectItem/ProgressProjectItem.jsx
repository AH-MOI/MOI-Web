import React from "react";
import "./ProgressProjectItem.scss";
import ProgressModal from "../ProgressModal/ProgressModal";
import moment from "moment";

const ProgressProjectItem = ({
  modal,
  showMoreProgress,
  myProgress,
  setIdx,
  getProgress,
  loading,
}) => {
  const MAX_SHOW_COUNT = 4;

  return (
    <>
      {modal ? (
        <div>
          <div>
            <div
              className="Main-Project-Item"
              onClick={() => {
                console.log("qwer");
                setIdx(myProgress.id);
              }}
            >
              <div className="Main-Project-Item-Thumbnail">
                <div className="Main-Project-Item-Thumbnail-Image"></div>
              </div>
              <div className="Main-Project-Item-Info">
                <div className="Main-Project-Item-Info-Content">
                  <p className="Main-Project-Item-Info-Content-Title">
                    {myProgress.title}
                  </p>
                  <p className="Main-Project-Item-Info-Content-Description">
                    {myProgress.content}
                  </p>
                  <div className="Main-Project-Item-Info-Content-Tech">
                    {myProgress.hashtag.map((tech, idx) => (
                      <>
                        {idx < MAX_SHOW_COUNT && (
                          <div className="Main-Project-Item-Info-Content-Tech-Tag">
                            {tech}
                          </div>
                        )}
                      </>
                    ))}
                    {myProgress.hashtag.length > MAX_SHOW_COUNT && (
                      <div className="Main-Project-Item-Info-Content-Tech-Tag">
                        외 {myProgress.hashtag.length - MAX_SHOW_COUNT}개
                      </div>
                    )}
                  </div>
                </div>
                <div className="Main-Project-Item-Info-Bottom">
                  <p className="Main-Project-Item-Info-Bottom-Writer">
                    By <span>{myProgress.writer}</span>
                  </p>
                  <p className="Main-Project-Item-Info-Bottom-Date">
                    {moment(myProgress.closing_date).format("YYYY년 MM월 DD일")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {modal ? (
            <ProgressModal
              modal={modal}
              showMoreProgress={showMoreProgress}
              getProgress={getProgress}
              loading={loading}
            />
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div className="Item" onClick={() => showMoreProgress()}>
          <div
            className="Main-Project-Item"
            onClick={() => setIdx(myProgress.id)}
          >
            <div className="Main-Project-Item-Thumbnail">
              <div className="Main-Project-Item-Thumbnail-Image"></div>
            </div>
            <div className="Main-Project-Item-Info">
              <div className="Main-Project-Item-Info-Content">
                <p className="Main-Project-Item-Info-Content-Title">
                  {myProgress.title}
                </p>
                <p className="Main-Project-Item-Info-Content-Description">
                  {myProgress.content}
                </p>
                <div className="Main-Project-Item-Info-Content-Tech">
                  {myProgress.hashtag.map((tech, idx) => (
                    <>
                      {idx < MAX_SHOW_COUNT && (
                        <div className="Main-Project-Item-Info-Content-Tech-Tag">
                          {tech}
                        </div>
                      )}
                    </>
                  ))}
                  {myProgress.hashtag.length > MAX_SHOW_COUNT && (
                    <div className="Main-Project-Item-Info-Content-Tech-Tag">
                      외 {myProgress.hashtag.length - MAX_SHOW_COUNT}개
                    </div>
                  )}
                </div>
              </div>
              <div className="Main-Project-Item-Info-Bottom">
                <p className="Main-Project-Item-Info-Bottom-Writer">
                  By <span>{myProgress.writer}</span>
                </p>
                <p className="Main-Project-Item-Info-Bottom-Date">
                  {moment(myProgress.closing_date).format("YYYY년 MM월 DD일")}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

ProgressProjectItem.propTypes = {};

export default ProgressProjectItem;
