import React from "react";
import { NavLink as Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="NavBar">
      <Link to="/" className="Logo">
        CareFinder
      </Link>
      <div className="NavLinks">
        <span className="Links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/find-hospital">Find Hospital</Link>
        </span>
        <div className="Auth">
          <Link to="/login">
            <div className="Login">
              Login
            </div>
          </Link>
          <Link to="/signup">
            <div className="SignUp">
              Sign Up
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
