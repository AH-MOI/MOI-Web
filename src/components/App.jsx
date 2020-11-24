import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFoundPage from "../pages/NotFoundPage";
import MainPage from "../pages/MainPage";
import ProgressPage from "pages/ProgressPage";
import DevFindPage from "pages/DevFindPage";
import WritePage from "pages/WritePage";
import HeaderContainer from "containers/Header/HeaderContainer";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <HeaderContainer />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/progress" component={ProgressPage} />
        <Route exact path="/devFind" component={DevFindPage} />
        <Route path="/write" component={WritePage} />
        <Route component={NotFoundPage} />
        <Redirect to="/notfound" />
      </Switch>
    </div>
  );
};

export default App;
