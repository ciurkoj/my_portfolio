import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landingPage";

const Router = () => (
  <Switch>
    <Route exact path="/my_portfolio" component={LandingPage} />
  </Switch>
);

export default Router;
