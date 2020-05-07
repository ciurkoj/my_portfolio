import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div id="header-wrap" class="stuck">
      <label for="nav-trigger" class="nav-trigger hamburger">
        <span class="open-btn">
          <span class="mobile"></span>
          <span class="mobile"></span>
          <span class="mobile"></span>
        </span>
      </label>
      <div id="logo">
        <span class="wsite-logo">
          <a href="/">
            <span id="wsite-title">CIURKO JAKUB</span>
          </a>
        </span>
      </div>
      <div id="nav" class="">
        <div class="container">
          <ul class="wsite-menu-default">
            <li id="active" class="wsite-menu-item-wrap   wsite-nav-1">
              <a href="/" class="wsite-menu-item">
                Home
              </a>
            </li>
            <li
              id="pg706666462202140662"
              class="wsite-menu-item-wrap   wsite-nav-2"
            >
              <a href="/blog.html" class="wsite-menu-item">
                Blog
              </a>
            </li>
            <li
              id="pg383559022164693219"
              class="wsite-menu-item-wrap   wsite-nav-3"
            >
              <a href="/portfolio.html" class="wsite-menu-item">
                Portfolio
              </a>
            </li>
            <li
              id="pg240834667266101901"
              class="wsite-menu-item-wrap   wsite-nav-4"
            >
              <a href="/contact.html" class="wsite-menu-item">
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
