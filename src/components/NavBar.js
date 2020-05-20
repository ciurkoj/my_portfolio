import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";
//import Router from "./router";
import "./NavBar.css";
//import LandingPage from "./landingPage";
import Router from "./router";

class NavBar extends Component {
  render() {
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
            <div class="blurry"></div>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/my_portfolio"
              ></Link>
            }
          >
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/contact">Contact</Link>
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
