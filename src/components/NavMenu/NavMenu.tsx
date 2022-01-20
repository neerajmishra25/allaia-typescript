import React from "react";
import { NavLink } from "react-router-dom";
import "./NavMenu.scss";

const NavMenu = () => {
  return (
    <ul className="nav-links">
      <li className="nav-link top-menu">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="nav-link top-menu">
        <NavLink to="/about-us">About Us</NavLink>
      </li>
      <li className="nav-link top-menu">
        <NavLink to="/products">Products</NavLink>
      </li>
      <li className="nav-link top-menu">
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li className="nav-link top-menu">
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  );
};

export default NavMenu;
