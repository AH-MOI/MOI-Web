import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import Write from "components/Write/Write";
import stores from "stores";

const WriteContainer = ({}) => {
  const { modal, showWriteModal, tryCreateProject } = stores.WriteStore;
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [hashTag, setHashTag] = useState([]);
  const [date, setDate] = useState(new Date());
  const [selectedItem, setSelectedItem] = useState([]);
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const [arrayCount, setArrayCount] = useState([]);
  const [personnel, setPersonnel] = useState("");
  const [agoArrayCount, setAgoArrayCount] = useState([]);
  const [all, setAll] = useState([]);
  const [changeCount, setChangeCount] = useState();

  const keyPressListener = (e) => {
    if ((e.key === "Enter" || e.key === "NumpadEnter") && tag !== "") {
      const tags = tag.split("#");
      tags.splice(0, 1);
      tags.map((item) => setHashTag((hashTag) => [...hashTag, item]));
      setTag("");
    }
  };

  const removeHashTag = (value) => {
    let array = [...hashTag];
    const index = array.indexOf(value);
    array.splice(index, 1);
    setHashTag(array);
    const handleCreateProject = async () => {
      tryCreateProject(title, content, date, hashTag)
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        });
    };
  };
  const removeSelectedItem = (item) => {
    let array = [...selectedItem];
    const index = array.indexOf(item);
    array.splice(index, 1);
    setSelectedItem(array);
  };

  const stringPersonnel = () => {
    for (let index = 0; index < arrayCount.length; index++) {
      console.log(arrayCount[index]);
      setPersonnel(
        personnel + selectedItem[index] + "/" + arrayCount[index] + "|"
      );
    }
  };
  console.log(personnel);

  const handleCreateTeam = () => {
    tryCreateProject(title, content, date, personnel, tag)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changeString = () => {
    for (let index = 0; index < all.length; index++) {
      if (all[index].idx === count) {
        setPersonnel(
          personnel + all[index].menu + "/" + all[index].number + "|"
        );
      }
    }
  };

  useEffect(() => {
    changeString();
  }, [count, changeCount]);

  return (
    <>
      <Write
        tag={tag}
        setTag={setTag}
        keyPressListener={keyPressListener}
        hashTag={hashTag}
        removeHashTag={removeHashTag}
        setTitle={setTitle}
        setContent={setContent}
        date={date}
        setDate={setDate}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        removeSelectedItem={removeSelectedItem}
        show={show}
        setShow={setShow}
        count={count}
        setCount={setCount}
        all={all}
        setAll={setAll}
        setChangeCount={setChangeCount}
        handleCreateTeam={handleCreateTeam}
      />
    </>
  );
};

export default observer(WriteContainer);
