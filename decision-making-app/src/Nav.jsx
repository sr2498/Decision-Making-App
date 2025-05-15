import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"; // Optional: external CSS for styling

function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">DecisionApp</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Login</Link></li>
        <li><Link to="/login">Home</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
