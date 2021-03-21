import React from "react";
import header from "./Header.module.css";
import { NavLink } from "react-router-dom";
import {Redirect} from "react-router-dom"

const Header = (props) => {
  return (
    <header className={header.header}>
      <img src="https://www.sdsd.com/wp-content/uploads/2020/01/fi.png" />
      <div className={header.loginBlock}>
        {props.isAuth
            ? <div>{props.login} - <button onClick={props.logout} to={'/login'}>Log out</button></div>
            : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
