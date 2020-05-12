import React, { Component } from "react";
import logo from "./../logo.svg";
import "./Animation.css";

class Animation extends Component {
  render() {
    return (
      <div className="Animation">
        <header className="Animation-header">
          <img src={logo} className="Animation-logo" alt="logo" />
          <p>Welcome to my prortfolio</p>
        </header>
      </div>
    );
  }
}
export default Animation;
