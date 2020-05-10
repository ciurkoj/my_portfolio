import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div id="header-wrap" className="stuck">
      <div id="logo">
        <span className="wsite-logo">
          <a href="/">
            <span id="wsite-title">CIURKO JAKUB</span>
          </a>
        </span>
      </div>
      <div id="nav" className="">
        <div className="container">
          <ul className="wsite-menu-default">
            <li id="active" className="wsite-menu-item-wrap   wsite-nav-1">
              <a href="/" className="wsite-menu-item">
                Home
              </a>
            </li>
            <li
              id="pg706666462202140662"
              className="wsite-menu-item-wrap   wsite-nav-2"
            >
              <a href="/blog.html" className="wsite-menu-item">
                Blog
              </a>
            </li>
            <li
              id="pg383559022164693219"
              className="wsite-menu-item-wrap   wsite-nav-3"
            >
              <a href="/portfolio.html" className="wsite-menu-item">
                Portfolio
              </a>
            </li>
            <li
              id="pg240834667266101901"
              className="wsite-menu-item-wrap   wsite-nav-4"
            >
              <a href="/contact.html" className="wsite-menu-item">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
