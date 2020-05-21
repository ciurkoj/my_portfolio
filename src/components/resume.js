import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "./resume.css";

class Resume extends Component {
  render() {
    return (
      <Grid>
        <Grid col={9} className="banner-text" style={{ display: "flex" }}>
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
            <Grid col={12} style={{ color: "white" }}>
              <h3
                align={"left"}
                style={{
                  display: "block",
                  fontSize: "20pt",
                  width: "50%",
                  color: "grey",

                  borderBottom: "3px solid #833fb2",
                }}
              >
                Skills
              </h3>
              <Grid style={{ display: "flex", flow: "wrap" }}>
                <Cell col={6}>
                  &bull; Programming languages: Python, C++, JavaScript, HTML,
                  CSS, SQL
                </Cell>
                <Cell col={6}>&bull; Version Control: GIT &amp; GitHub</Cell>
                <Cell col={6}>&bull; Linux-Ubuntu</Cell>
                <Cell col={6}>
                  &bull; Project Management - Agile, Scrum, Kanban
                </Cell>
                <Cell col={6}>&bull; MS Word, Excel</Cell>
                <Cell col={6}>
                  &bull; Languages: English(Proficient), Polish (Native), German
                  (Upper-intermediate)
                </Cell>
              </Grid>
            </Grid>
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
        </Grid>
      </Grid>
    );
  }
}

export default Resume;
