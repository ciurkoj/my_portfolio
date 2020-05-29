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
import Modal from "./modal";

class ProjectCard extends Component {
  state = {
    creating: false,
  };
  startCreateEventHandler = () => {
    this.setState({ creating: true });
  };

  modalConfirmHandler = () => {
    this.setState({ creating: false });
  };

  modalCancelHandler = () => {
    this.setState({ creating: false });
  };
  render() {
    return (
      <React.Fragment>
        {this.state.creating && (
          <Modal
            canCancel
            canConfirm
            onCancel={this.modalCancelHandler}
            onConfirm={this.modalConfirmHandler}
          >
            <h1>{this.props.projectName}</h1>
            <p>
              <h5>{this.props.projectSubtitle} </h5>
              <span>{this.props.projectDescription}</span>
            </p>
            <Button colored onClick={this.modalCancelHandler}>
              Close Modal
            </Button>
          </Modal>
        )}
        <div id="card">
          <Card
            shadow={5}
            style={{
              position: "inherit",
              backgroundColor: "#171b22 ",
              borderRadius: "10px",
              minWidth: "450px",
              margin: "3em",
              padding: "2em",
            }}
          >
            <CardTitle
              onClick={this.startCreateEventHandler}
              style={{
                cursor: "pointer",
                color: "white",
                height: "15em",
                background: `url(${this.props.url}) center / contain `,

                borderRadius: "10px",
                justifyContent: "center",
              }}
            >
              {this.props.projectName}
            </CardTitle>
            <CardText
              onClick={this.startCreateEventHandler}
              style={{ color: "white", cursor: "pointer" }}
            >
              {this.props.projectSubtitle}
            </CardText>
            <CardActions>
              <Button
                shadow={5}
                colored
                style={{ fontSize: "16pt", fontWeight: "bold" }}
              >
                <a href={this.props.githubLink}>GitHub</a>
              </Button>
              <Button colored>
                <a href={this.props.liveDemo}>Live Demo</a>
              </Button>
              <Button colored onClick={this.startCreateEventHandler}>
                CodePen
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>{" "}
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default ProjectCard;
