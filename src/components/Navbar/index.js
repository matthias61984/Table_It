import React from "react";
import { Link } from "react-router-dom";
import image from "./tableItIcon.png";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="Nav">
      <div className="row">
        <img src={image} alt="knife and fork icon" className="col-md-2 tableiticon" />
        <Link className="navbar-brand col-md-2 animated fadeIn" to="/">
          TableIt
        </Link>
      <div className="col-md-8">
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
      </div>
    </nav>
  );
}

export default Navbar;
