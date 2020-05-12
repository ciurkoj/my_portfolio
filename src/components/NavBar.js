import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";
import Router from "./router";

class NavBar extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            style={{
              height: "300px",
              position: "absolute",
              background:
                "url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover",
            }}
            title={
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Jakub Ciurko
              </Link>
            }
            scroll
          >
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
          <Content>
            <div className="page-content" />
            <Router />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default NavBar;
