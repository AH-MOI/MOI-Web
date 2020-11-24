import React, {useState} from "react";
import { observer } from "mobx-react";
import DevInfo from "../../components/DevInfo";
import Modal from '../../components/common/Modal/Modal';
import stores from "stores";

const DevInfoContainer = ({}) => {
  const {show, handleShow} = stores.ModalStore;

  return (
    <>
      {show && <Modal showMoreProgress={handleShow}>
        <DevInfo />
      </Modal>}
    </>
  );
};

export default observer(DevInfoContainer);
