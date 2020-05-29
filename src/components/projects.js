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
            projectSubtitle="The main goal is to have a website where I can show all my work I've done. 
            I'd like start a blog, so maybe some day it'll change its nature."
            projectDescription="This website may not be well designed and but I'm just a junior developer 
            with only some experience in coding mixed with loads of will and persistence to become a full time software developer. 
            To build this website I've tools such as: React with React Material Design Lite and basic pack of frontend languages: JavaScript, HTML5, CSS3"
            url={arrowUp}
            githubLink="https://github.com/jciurko/my_portfolio"
            liveDemo="https://jciurko.github.io/my_portfolio/"
          />
          <ProjectCard
            projectName="ExchangeBay"
            projectSubtitle="The website was a project where I've contributed as a team member.
             The final product allows users to upload images, tracks transactions, 
              restores passwords through links sent to users on request. 
              In conclusion it's a very small and basic ebay"
            projectDescription="As team of 2nd year students we had to deliver a fully functional website.
            We had to keep the highest standard of project development, providing project documentation, unit and acceptance testing. 
            In the project we have used Node.js, Handlebars with Koa.js framework (newer Express.js) keeping the standard of ES6. 
            The project taught me a lot about working in a team, especially how to assing tasks, how to deal with delays 
            and how help others if they face a problem. For example we have used GitHub Project Issues to manage tasks previously discussed on MS Teams or What'sApp."
            url="https://www.pngmart.com/files/7/Exchange-PNG-Transparent-Picture.png"
            githubLink="https://github.coventry.ac.uk/5001CEM-1920SEPJAN/grantb3"
          />
          <ProjectCard
            projectName="Tic Tac Toe"
            projectSubtitle="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's"
            url={tictactoe}
          />
          <ProjectCard
            projectName="React Project #4"
            projectSubtitle="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's"
          />
          <ProjectCard
            projectName="React Project #5"
            projectSubtitle="Lorem Ipsum is simply dummy text of the printing and typesetting
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
