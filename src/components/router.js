import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landingPage";
import Resume from "./resume";
import Projects from "./projects";

const Router = () => (
  <Switch>
    <Route exact path="/my_portfolio" component={LandingPage} />
    <Route path="/resume" component={Resume} />
    <Route path="/projects" component={Projects} />
  </Switch>
);

export default Router;
