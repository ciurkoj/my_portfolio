import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "./workExperience.css";
class WorkExperience extends Component {
  render() {
    window.onload = function () {
      var coll = document.getElementsByClassName("collapsible");
      for (var i = 0; i < coll.length; i++)
        coll[i].addEventListener("click", function () {
          this.classList.toggle("active");
          var content = this.lastElementChild;
          if (content.style.height === "auto") {
            content.style.height = "10px";
          } else {
            content.style.height = "auto";
          }
        });
    };
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
        <Cell col={8} className="collapsible" style={{ overflow: "hidden" }}>
          <h4
            type="button"
            style={{
              cursor: "pointer",
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
          <p style={{ padding: "0px", height: "10px" }}>
            Description: {this.props.jobDescription}
          </p>
        </Cell>
      </Grid>
    );
  }
}

export default WorkExperience;
