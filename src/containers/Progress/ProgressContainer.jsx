import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import Progress from "components/Progress/Progress";
import stores from "stores";

const ProgressContainer = ({}) => {
  const {
    modal,
    showMoreProgress,
    tryMyProgress,
    tryProgress,
    myProgressLoading,
    progressLoading,
    tryInfoProgress,
    modalLoading,
  } = stores.ProgressStore;

  const [myProgress, setMyProgress] = useState();
  const [progress, setProgress] = useState();
  const [idx, setIdx] = useState();
  const [moreInfo, setMoreInfo] = useState();

  const handleMyProgress = async () => {
    await tryMyProgress()
      .then((response) => {
        setMyProgress(response.data.projects);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInfoProgress = async () => {
    await tryInfoProgress(idx)
      .then((response) => {
        setMoreInfo(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleProgress = async () => {
    await tryProgress()
      .then((response) => {
        setProgress(response.data.projects);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(progress);
  console.log(myProgress);

  useEffect(() => {
    handleProgress();
    handleMyProgress();
  }, []);

  return (
    <>
      {myProgressLoading && progressLoading ? (
        <Progress
          modal={modal}
          showMoreProgress={showMoreProgress}
          myProgress={myProgress}
          progress={progress}
          setIdx={setIdx}
        />
      ) : (
        <span>...loading</span>
      )}
    </>
  );
};

export default observer(ProgressContainer);
