import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell } from "react-mdl";
import arrowUp from "../pictures/arrowUp.png";
import tictactoe from "../pictures/tictactoe.png";
import automation from "../pictures/automation.png";

import ProjectCard from "./card.js";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div
          className="projects-grid"
          style={{
            display: "flex",
            flex: "wrap",
            flexFlow: "row wrap",
            justifyContent: "center",
          }}
        >
          {" "}
          <ProjectCard
            projectName="MyPortfolio project"
            projectDescription="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's"
            url={arrowUp}
          />
          <ProjectCard
            projectName="ExchangeBay"
            projectDescription="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's"
            url="https://www.pngmart.com/files/7/Exchange-PNG-Transparent-Picture.png"
          />
          <ProjectCard
            projectName="Tic Tac Toe"
            projectDescription="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's"
            url={tictactoe}
          />
          <ProjectCard
            projectName="React Project #4"
            projectDescription="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's"
          />
          <ProjectCard
            projectName="React Project #5"
            projectDescription="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's"
          />
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div
          className="projects-grid"
          style={{
            display: "flex",
            flex: "wrap",
            flexFlow: "row wrap",
            justifyContent: "center",
          }}
        >
          <ProjectCard
            projectName="Automation"
            projectDescription="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's"
            url={automation}
          />
          <ProjectCard
            projectName="Multithreading"
            projectDescription="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's"
            url="https://www.pngmart.com/files/7/Exchange-PNG-Transparent-Picture.png"
          />
          <ProjectCard
            projectName="Binary tree"
            projectDescription="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's"
            url={tictactoe}
          />
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div
          className="projects-grid"
          style={{
            display: "flex",
            flex: "wrap",
            flexFlow: "row wrap",
            justifyContent: "center",
          }}
        >
          <ProjectCard
            projectName="Buffer"
            projectDescription="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's"
            url="https://www.pngmart.com/files/7/Exchange-PNG-Transparent-Picture.png"
          />
          <ProjectCard
            projectName="Process Control"
            projectDescription="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's"
            url="https://www.pngmart.com/files/7/Exchange-PNG-Transparent-Picture.png"
          />
        </div>
      );
    }
  }

  render() {
    return (
      <div
        className="projects-grid"
        style={{
          display: "flex",
          flex: "wrap",
          flexFlow: "row wrap",
          justifyContent: "center",
        }}
      >
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab style={{ color: "white", fontSize: "16pt" }}>
            Web development
          </Tab>
          <Tab style={{ color: "white", fontSize: "16pt" }}>Python</Tab>
          <Tab style={{ color: "white", fontSize: "16pt" }}>C++</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
