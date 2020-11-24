import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import Progress from "components/Progress/Progress";
import stores from "stores";
import Header from "components/header/Header";

const ProgressContainer = ({}) => {
  const {
    modal,
    showMoreProgress,
    tryMyProgress,
    tryProgress,
    tryInfoProgress,
    modalLoading,
    progress,
    myProgress,
  } = stores.ProgressStore;

  const [idx, setIdx] = useState();
  const [moreInfo, setMoreInfo] = useState();

  const [progressLoading, setProgressLoading] = useState(true);

  const handleMyProgress = useCallback(async () => {
    await tryMyProgress()
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
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

  const handleInfoProgress = useCallback(async () => {
    await tryInfoProgress(idx)
      .then((response) => {
        setMoreInfo(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [progress]);

  useEffect(() => {
    handleAllProgress();
  }, []);

  return (
    <>
      {!progressLoading ? (
        <>
          <Header></Header>

          <Progress
            modal={modal}
            showMoreProgress={showMoreProgress}
            myProgress={myProgress}
            progress={progress}
            setIdx={setIdx}
          />
        </>
      ) : (
        <span>...loading</span>
      )}
    </>
  );
};

export default observer(ProgressContainer);
