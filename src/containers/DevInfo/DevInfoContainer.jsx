import React, { useEffect, useState, useCallback } from "react";
import { observer } from "mobx-react";
import DevInfo from "../../components/DevInfo";
import Modal from "../../components/common/Modal/Modal";
import stores from "stores";

const DevInfoContainer = ({}) => {
  const { show, handleShow } = stores.ModalStore;
  const { devInfo, handleGetDevInfo } = stores.MyProjectStore;

  const handleGetDevInfoCallback = useCallback(async () => {
    const accessToken = localStorage.getItem("accessToken");
    await handleGetDevInfo(accessToken)
      .then((res) => {})
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    handleGetDevInfoCallback();
  }, [handleGetDevInfoCallback]);

  return (
    <>
      {show && (
        <Modal showMoreProgress={handleShow}>
          {devInfo && devInfo.map((item) => <DevInfo devInfo={item} />)}
        </Modal>
      )}
    </>
  );
};

export default observer(DevInfoContainer);
