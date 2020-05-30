import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "./workExperience.css";
class WorkExperience extends Component {
  render() {
    return (
      <Grid>
        <Cell
          col={4}
          style={{
            display: "table",
            height: "auto",
            margin: "auto",
            textAlign: "center",
            paddingLeft: "30px",
          }}
        >
          <p style={{ display: "table-cell", verticalAlign: "middle" }}>
            {this.props.startYear} - {this.props.endYear}
          </p>
        </Cell>
        <Cell
          col={8}
          type="button"
          className="collapsible"
          style={{ height: "auto", overflow: "hidden", cursor: "pointer" }}
        >
          <h4
            style={{
              marginTop: "0px",
              marginBottom: "0",
              fontWeight: "bold",
              display: "inline",
              width: "100%",
            }}
          >
            {this.props.jobName},{" "}
            <div
              style={{
                display: "inline",
                marginTop: "0px",
                marginBottom: "0px",
                fontSize: "14pt",
                padding: "0px",
                width: "auto",
              }}
            >
              {this.props.employer}
            </div>{" "}
            <i
              align={"right"}
              style={{ position: "relative", right: "0px" }}
              className="fa fa-caret-down"
            ></i>
          </h4>

          <p style={{ padding: "0px", marginBottom: "0" }}>
            <b>Location: {this.props.location}</b>
          </p>
          <p style={{ padding: "0px" }}>
            Description: {this.props.jobDescription}
          </p>
        </Cell>
      </Grid>
    );
  }
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    console.log(this.classList);
  });
}

export default WorkExperience;
