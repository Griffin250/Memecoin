import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <NavLink
          to="/"
         className={"navbar-logo"}>
          <span>BOOP</span>
        </NavLink>
        
      </div>
      <div className="navbar-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/contract-address"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Contract Address
        </NavLink>
        <NavLink
          to="/how-to-buy"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          How to Buy
        </NavLink>
      </div>
      <NavLink
        to="/how-to-buy"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        <button className="navbar-btn">Buy Now</button>
      </NavLink>
    </nav>
  );
};

export default Navbar;
