import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landingPage";
import Resume from "./resume";
import Projects from "./projects";
import Contact from "./contact";
import About from "./about";

const Router = () => (
  <Switch>
    <Route exact path="/my_portfolio" component={LandingPage} />
    <Route path="/my_portfolio/resume" component={Resume} />
    <Route path="/my_portfolio/projects" component={Projects} />
    <Route path="/my_portfolio/contact" component={Contact} />
    <Route path="/my_portfolio/about" component={About} />
  </Switch>
);

export default Router;
