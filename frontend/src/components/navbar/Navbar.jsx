import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header className="navbar">
        <div className="navbar-container">
          <div className="navbar-logoContainer">logo</div>

          <ul className="navbar-navlinks">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/create"}>Create</Link>
            </li>
            <li>
              <Link to={"/cart"}>Cart</Link>
            </li>
          </ul>
          
        </div>
      </header>
    </>
  );
}
