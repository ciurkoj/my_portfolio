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

function App() {
  const modalRef = React.useRef();

  const openModal = () => {
    modalRef.current.openModal();
  };

  return (
    <div className="App">
      <button onClick={openModal}>Open Modal</button>
      <Modal ref={modalRef}>
        <h1>Modal Header</h1>
        <p>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            eligendi esse facere illo in minima nulla quis reiciendis. Eligendi
            impedit nostrum quam quod reprehenderit, ullam veritatis. Fuga
            provident quos velit.
          </span>
          <span>
            Accusantium ad, alias animi et eum, excepturi explicabo fuga iusto
            magnam maxime minima molestias nam nemo nostrum pariatur
            perspiciatis porro quae quibusdam quidem quis repudiandae sed ullam
            vel, veniam vero.
          </span>
          <span>
            Eligendi nulla quasi quibusdam quod saepe suscipit tenetur voluptas
            voluptate! Accusamus amet, commodi culpa distinctio dolor eveniet
            expedita hic iure magnam magni mollitia nulla officia quas,
            reiciendis repellat sapiente, veniam!
          </span>
        </p>
        <button onClick={() => modalRef.current.close()}>Close Modal</button>
      </Modal>
    </div>
  );
}

class ProjectCard extends Component {
  render() {
    return (
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
              <a href={this.props.githubLink}>GitHub</a>
            </Button>
            <Button colored>CodePen</Button>
            <Button colored>
              <a href={this.props.liveDemo}>Live Demo</a>
            </Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>{" "}
          <App />
        </Card>
      </div>
    );
  }
}

export default ProjectCard;
