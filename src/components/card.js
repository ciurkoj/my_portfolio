import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

import "./card.css";
class ProjectCard extends Component {
  render() {
    return (
      <Card
        shadow={5}
        style={{
          backgroundColor: "#171b22 ",
          borderRadius: "10px",
          minWidth: "450px",
          margin: "3em",
          padding: "2em",
        }}
      >
        <CardTitle
          bold
          style={{
            color: "white",
            height: "15em",
            background: `url(${this.props.url}) center / contain `,

            borderRadius: "10px",
            justifyContent: "center",
          }}
        >
          {this.props.projectName}
        </CardTitle>
        <CardText style={{ color: "white" }}>
          {this.props.projectDescription}
        </CardText>
        <CardActions>
          <Button
            shadow={5}
            colored
            style={{ fontSize: "16pt", fontWeight: "bold" }}
          >
            GitHub
          </Button>
          <Button colored>CodePen</Button>
          <Button colored>Live Demo</Button>
        </CardActions>
        <CardMenu style={{ color: "#fff" }}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
    );
  }
}

export default ProjectCard;
