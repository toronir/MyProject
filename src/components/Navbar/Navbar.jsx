import React from "react";
import navbar from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={navbar.nav}>
      <div className={navbar.item}>
        <NavLink to="/profile" activeClassName={navbar.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={navbar.item}>
        <NavLink to="/dialogs" activeClassName={navbar.activeLink}>
          Dialogs
        </NavLink>
      </div>
      <div className={navbar.item}>
        <NavLink to="/vk.com" activeClassName={navbar.activeLink}>
          nah
        </NavLink>
      </div>
      <div className={navbar.item}>
        <NavLink to="/users" activeClassName={navbar.activeLink}>
          Users
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
