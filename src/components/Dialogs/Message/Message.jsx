import React from "react";
import dialogs from "./../Dialogs.module.css";
import { Route, BrowserRouter, NavLink } from "react-router-dom";

const Message = (props) => {
  return <div className={dialogs.dialog}>{props.message}</div>;
};

export default Message;
