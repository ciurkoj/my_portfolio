import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "./resume.css";

class Resume extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <div style={{ textAlign: "center" }}>
            <img
              src="https://rusdorznak.ru/Uploads/Reviews/man_512x512.png"
              alt="avatar"
              style={{ height: "200px" }}
            />
          </div>

          <h2 style={{ paddingTop: "2em" }}>Jakub Ciurko</h2>
          <h4 style={{ color: "grey" }}>Junior Frontend Developer </h4>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          <h5>Town</h5>
          <p>Coventry</p>
          <h5>Phone</h5>
          <p>07554602380</p>
          <h5>Email</h5>
          <p>ciurkoj@outlook.com</p>
          <h5>Web</h5>
          <p>mywebsite.com</p>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
        </Cell>{" "}
      </Grid>
    );
  }
}

export default Resume;
