import React from "react";
import "./MainProjectItem.scss";
import moment from "moment";

const MainProjectItem = ({ project, setIdx }) => {
  const MAX_SHOW_COUNT = 4;

  const tags = project.hashtag.split("#");
  tags.splice(0, 1);

  console.log(project);

  return (
    <>
      <div className="Main-Project-Item" onClick={() => setIdx(project.id)}>
        <div className="Main-Project-Item-Thumbnail">
          <div className="Main-Project-Item-Thumbnail-Image"></div>
        </div>
        <div className="Main-Project-Item-Info">
          <div className="Main-Project-Item-Info-Content">
            <p className="Main-Project-Item-Info-Content-Title">
              {project.title}
            </p>
            <p className="Main-Project-Item-Info-Content-Description">
              {project.content}
            </p>
            <div className="Main-Project-Item-Info-Content-Tech">
              {tags.map((tech, idx) => (
                <>
                  {idx < MAX_SHOW_COUNT && (
                    <div className="Main-Project-Item-Info-Content-Tech-Tag" key={idx}>
                      {tech}
                    </div>
                  )}
                </>
              ))}
              {tags.length > MAX_SHOW_COUNT && (
                <div className="Main-Project-Item-Info-Content-Tech-Tag">
                  외 {tags.length - MAX_SHOW_COUNT}개
                </div>
              )}
            </div>
          </div>
          <div className="Main-Project-Item-Info-Bottom">
            <p className="Main-Project-Item-Info-Bottom-Writer">
              By <span>{project.writer}</span>
            </p>
            <p className="Main-Project-Item-Info-Bottom-Date">
              {moment(project.closing_date).format("YYYY년 MM월 DD일")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainProjectItem;
