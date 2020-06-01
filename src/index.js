import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import NavBar from "./components/NavBar";
import * as serviceWorker from "./serviceWorker";
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";
import { BrowserRouter } from "react-router-dom";

var coll = document.getElementsByClassName("collapsible");
console.log(coll);
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

ReactDOM.render(
  <BrowserRouter>
    <div>
      <NavBar />
    </div>
  </BrowserRouter>,

  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
