import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Education extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>
            {this.props.startYear} - {this.props.endYear}
          </p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "0px", fontWeight: "bold" }}>
            {this.props.schoolName}
          </h4>
          <h5
            style={{ marginTop: "0px", paddingBottom: "1em", fontSize: "12pt" }}
          >
            {this.props.schoolDegree}
          </h5>
          <p style={{ padding: "0px", paddingLeft: "1em", fontSize: "12pt" }}>
            {this.props.schoolDescription}
          </p>
          <p style={{ padding: "0px", paddingLeft: "1em", fontSize: "12pt" }}>
            {this.props.modules}
          </p>
        </Cell>
      </Grid>
    );
  }
}

export default Education;
