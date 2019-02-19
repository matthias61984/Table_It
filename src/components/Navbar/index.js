import React from "react";
import { Link } from "react-router-dom";
import image from "./tableItIcon.png";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-md navbar-dark bg-primary justify-content-between">
        <img src={image} alt="knife and fork icon" className="tableiticon" />
        <h1 className="navbar-brand navbar-text" id="navTitle">TableIt</h1>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  window.location.pathname === "/" || window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
                }>
                Logout
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/discover"
                className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}>
                Discover
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/favorites"
                className={window.location.pathname === "/favorites" ? "nav-link active" : "nav-link"}>
                Favorites
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
