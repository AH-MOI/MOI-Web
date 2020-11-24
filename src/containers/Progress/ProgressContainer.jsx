import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import Progress from "components/Progress/Progress";
import stores from "stores";
import Header from "components/header/Header";
import ReactLoading from "react-loading";
import { ToastContainer, toast } from "react-toastify";

const ProgressContainer = ({}) => {
  const {
    modal,
    showMoreProgress,
    tryMyProgress,
    tryProgress,
    tryInfoProgress,
    getOutModal,
    progress,
    myProgress,
    getProgress,
  } = stores.ProgressStore;

  const [idx, setIdx] = useState();
  const [loading, setLoading] = useState(false);
  const [progressLoading, setProgressLoading] = useState(true);

  const handleMyProgress = useCallback(async () => {
    await tryMyProgress()
      .then((response) => {
        const notify = () => toast("Wow so easy !");
      })
      .catch((err) => {
        const notify = () => toast("오류입니다");
      });
  }, []);

  const handleAllProgress = async () => {
    setProgressLoading(true);
    await handleMyProgress();
    await handleProgress();
    setProgressLoading(false);
  };

  const handleProgress = async () => {
    await tryProgress()
      .then((response) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInfoProgress = useCallback(
    async (id) => {
      await tryInfoProgress(id)
        .then((response) => {
          setLoading(true);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [progress, idx]
  );

  useEffect(() => {
    handleAllProgress();
  }, []);

  useEffect(() => {
    if (idx) {
      handleInfoProgress(idx);
    }
  }, [handleInfoProgress]);

  useEffect(() => {
    getOutModal();
    setLoading(false);
  }, [modal]);

  return (
    <>
      {!progressLoading ? (
        <>
          <Progress
            modal={modal}
            showMoreProgress={showMoreProgress}
            myProgress={myProgress}
            progress={progress}
            setIdx={setIdx}
            getProgress={getProgress}
            loading={loading}
          />
        </>
      ) : (
        <div className="center">
          <ReactLoading
            type={"cubes"}
            color={"#000000"}
            height={"6%"}
            width={"6%"}
          />
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default observer(ProgressContainer);
