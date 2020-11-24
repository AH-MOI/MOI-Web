import React from "react";
import { observer } from "mobx-react";
import Progress from "components/Progress/Progress";
import stores from "stores";

const ProgressContainer = ({}) => {
  const { modal, showMoreProgress } = stores.ProgressStore;

  return <Progress modal={modal} showMoreProgress={showMoreProgress} />;
};

export default observer(ProgressContainer);
