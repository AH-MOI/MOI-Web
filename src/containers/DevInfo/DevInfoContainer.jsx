import React, {useEffect, useState, useCallback} from "react";
import { observer } from "mobx-react";
import DevInfo from "../../components/DevInfo";
import Modal from '../../components/common/Modal/Modal';
import stores from "stores";

const DevInfoContainer = ({}) => {
  const {show, handleShow} = stores.ModalStore;
  const {devInfo, handleGetDevInfo} = stores.MyProjectStore;

  const handleGetDevInfoCallback = useCallback(async() => {
    await handleGetDevInfo().then((res) => {
    }).catch((err) => {
      console.log(err.message);
    });    
  }, []);

  useEffect(() => {
    handleGetDevInfoCallback();
  }, [handleGetDevInfoCallback])

  return (
    <>
      {show && <Modal showMoreProgress={handleShow}>
        <DevInfo devInfo={devInfo}/>
      </Modal>}
    </>
  );
};

export default observer(DevInfoContainer);
