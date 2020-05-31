import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";
//import Router from "./router";
import "./NavBar.css";
//import LandingPage from "./landingPage";
import Router from "./router";
import ReactGA from "react-ga";
function initializeReactGA() {
  ReactGA.initialize("UA-168054630-1");
  ReactGA.pageview("/my_portfolio");
}
class NavBar extends Component {
  render() {
    initializeReactGA();
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            scroll
            transparent
            className="header-color custom"
            title={
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/my_portfolio"
              >
                Jakub Ciurko
              </Link>
            }
          >
            <div className="blurry"></div>
            <Navigation>
              <Link to="/my_portfolio/resume">Resume</Link>
              <Link to="/my_portfolio/projects">Projects</Link>
              <Link to="/my_portfolio/about">About Me</Link>
              <Link to="/my_portfolio/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer
            style={{ backgroundColor: "red" }}
            title={
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/my_portfolio"
              ></Link>
            }
          >
            <Navigation>
              <Link to="/my_portfolio/resume">Resume</Link>
              <Link to="/my_portfolio/projects">Projects</Link>
              <Link to="/my_portfolio/about">About Me</Link>
              <Link to="/my_portfolio/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content">
              <Router />
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default NavBar;
