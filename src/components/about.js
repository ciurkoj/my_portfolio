import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import { Link } from "react-router-dom";

import "./about.css";
class About extends Component {
  render() {
    return (
      <div>
        <Grid className="about-grid" align={"center"}>
          <Cell col={12}>
            <h1 style={{ fontSize: "60pt" }}>Hi, I am Jakub </h1>
            <h2> and this is my website.</h2>
            <p>
              It is not finished at all. It will take a lot time finish it as I
              imagine it, but{" "}
              <h4>
                {" "}
                <i>"done is better than perfect"</i>{" "}
              </h4>{" "}
              and this is why I've decided to publish it. I'm aware of its
              scalabilty issues- I'm working on it. Please be patient
            </p>
            <p>
              At the moment I'm 2nd year Computer Science Student looking for a
              placemnt in Web Development. There are a few of my projects that I
              would like to show you. I'm still trying to figure out where I
              would fit the most and this is why there is so many different
              projects. Most of them I made as my university task, but there are
              some I made on my own. Click
              <Link to="/my_portfolio/projects">HERE</Link> find out more.
            </p>

            <div className="contact-list"></div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
