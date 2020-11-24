import React, { useState } from "react";
import { observer } from "mobx-react";
import Write from "components/Write/Write";
import stores from "stores";

const WriteContainer = ({}) => {
  const { modal, showWriteModal } = stores.WriteStore;
  const [preview, setPreview] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");

  const handleImageChange = (e) => {
    let reader = new FileReader();
    if (e.target.files && e.target.files.length) {
      let file = e.target.files[0];
      // setGetProfileImg(file);
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      console.log(reader.readAsDataURL(file));
    } else {
      setPreview("");
    }
  };

  return (
    <>
      <Write
        modal={modal}
        showWriteModal={showWriteModal}
        preview={preview}
        setPreview={setPreview}
        date={date}
        setDate={setDate}
        content={content}
        setContent={setContent}
      />
    </>
  );
};

export default observer(WriteContainer);
