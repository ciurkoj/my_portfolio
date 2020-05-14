import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";
//import Router from "./router";
import "./NavBar.css";
import LandingPage from "./landingPage";

class NavBar extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/my_portfolio"
              >
                Jakub Ciurko
              </Link>
            }
            scroll
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
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                My Portfolio
              </Link>
            }
          >
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content style={{ zIndex: "3" }}>
            <div className="page-content" />
            <LandingPage />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default NavBar;
