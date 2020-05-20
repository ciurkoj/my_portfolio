import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "./resume.css";

class Resume extends Component {
  render() {
    return (
      <Grid>
        <Cell
          col={9}
          align={"middle"}
          className="banner-text"
          style={{ display: "flex" }}
        >
          <Cell col={3}>
            <img
              src="https://rusdorznak.ru/Uploads/Reviews/man_512x512.png"
              alt="avatar"
              id="resume_avatar"
              style={{ height: "200px" }}
            />
          </Cell>
          <Cell col={9} textAlign={"left"} style={{}}>
            <div col={12} style={{ display: "flex" }}>
              <Cell col={9}>
                <h2 style={{ color: "white" }}>Jakub Ciurko</h2>
              </Cell>
              <Cell style={{ color: "grey" }}>
                Town:<p>Coventry, UK</p>
              </Cell>

              <Cell style={{ color: "grey" }}>
                Tel:<p>07554602380</p>
              </Cell>

              <Cell style={{ color: "grey" }}>
                Email:<p>ciurkoj@outlook.com</p>
              </Cell>
            </div>
            <Cell>
              <h4
                style={{
                  color: "grey",
                  paddingBottom: "5em",
                  borderBottom: "3px solid #833fb2",
                }}
              >
                Junior Frontend Developer{" "}
              </h4>
            </Cell>
            <Grid>
              <Cell col={4}>
                <p>2018 - present</p>
              </Cell>
              <Cell col={8}>
                <h4 style={{ color: "grey" }}>Coventry University</h4>
                <p>
                  "Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s"
                </p>
              </Cell>
            </Grid>
          </Cell>
        </Cell>
      </Grid>
    );
  }
}

export default Resume;
