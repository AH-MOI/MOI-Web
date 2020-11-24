import React from "react";
import { observer } from "mobx-react";
import DevFind from "../../components/DevFind";
import stores from "stores";

const DevFindContainer = ({}) => {
  const { handleShow } = stores.ModalStore;
  return (
    <>
      <DevFind handleShow={handleShow}/>
    </>
  );
};

export default observer(DevFindContainer);
