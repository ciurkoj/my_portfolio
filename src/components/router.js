import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landingPage";
import Resume from "./resume";

const Router = () => (
  <Switch>
    <Route exact path="/my_portfolio" component={LandingPage} />
    <Route path="/resume" component={Resume} />
  </Switch>
);

export default Router;
