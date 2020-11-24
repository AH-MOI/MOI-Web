import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import MainPage from "../pages/MainPage";
import ProgressPage from "pages/ProgressPage";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/progress" component={ProgressPage} />
        <Route component={NotFoundPage} />
        <Redirect to="/notfound" />
      </Switch>
    </div>
  );
};

export default App;
