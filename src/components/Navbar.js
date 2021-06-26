import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
      <Link to="/" className="navbar-brand">
        GitHub App
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link">
            Головна
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="about" className="nav-link">
            Інфо
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
