import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/"> Vidly</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              className="nav-item nav-link" to="/movies"> Movies
            </NavLink>
            <NavLink className="nav-item nav-link" to="/customers"> Customers</NavLink>
            <NavLink className="nav-item nav-link" to="/rentals"> Rental</NavLink>
            <NavLink className="nav-item nav-link" to="/login"> Login</NavLink>
            
          </div>
        </div>
    </nav>
  );
};

export default NavBar;
