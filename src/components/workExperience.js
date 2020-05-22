import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
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
        <Cell col={8}>
          <h4 style={{ marginTop: "0px", fontWeight: "bold" }}>
            {this.props.jobName}
          </h4>
          <h5 style={{ marginTop: "0px", fontSize: "12pt" }}>
            {this.props.employer}
          </h5>
          <p style={{ padding: "0px" }}>
            <b>Location: {this.props.location}</b>
          </p>
          <p style={{ padding: "0px" }}>{this.props.jobDescription}</p>
        </Cell>
      </Grid>
    );
  }
}

export default WorkExperience;
