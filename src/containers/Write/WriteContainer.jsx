import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import Write from "components/Write/Write";
import stores from "stores";

const WriteContainer = ({}) => {
  const { modal, showWriteModal, tryCreateProject } = stores.WriteStore;
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [hashTag, setHashTag] = useState("");
  const [title, setTitle] = useState("");
  const [changeIdx, setChangeIdx] = useState("안드로이드");
  const [skill, setSkill] = useState("");

  const setTech = () => {
    if (changeIdx === 1) {
    }
  };

  const handleCreateProject = async () => {
    tryCreateProject(title, content, date, hashTag)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log(changeIdx);
  }, [changeIdx]);

  return (
    <>
      <Write
        modal={modal}
        showWriteModal={showWriteModal}
        date={date}
        setDate={setDate}
        content={content}
        setContent={setContent}
        handleCreateProject={handleCreateProject}
        hashTag={hashTag}
        setHashTag={setHashTag}
        title={title}
        setTitle={setTitle}
        setChangeIdx={setChangeIdx}
      />
    </>
  );
};

export default observer(WriteContainer);
