import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
class Education extends Component {
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
            {this.props.schoolName}
          </h4>
          <h5
            style={{ marginTop: "0px", paddingBottom: "1em", fontSize: "12pt" }}
          >
            {this.props.schoolDegree}
          </h5>
          <p
            style={{
              padding: "0px",
              paddingLeft: "1em",
              fontSize: "12pt",
            }}
          >
            <b>Modules:</b> <br />
            &bull; {this.props.module0}
            <br />
            &bull; {this.props.module1}
            <br />
            &bull; {this.props.module2}
            <br />
          </p>
        </Cell>
      </Grid>
    );
  }
}

export default Education;
