import React, { useState } from "react";
import { inject, observer } from "mobx-react";
import Main from "components/Main/Main";

const MainContainer = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <Main setSearch={setSearch} />
    </>
  );
};

export default inject("store")(observer(MainContainer));
