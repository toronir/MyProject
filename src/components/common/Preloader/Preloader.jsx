import React from "react";
import preloader from "../../../assets/images/d1.gif";
import style from "./Preloader.module.css"

let Preloader = (props) => {
  return (
    <div className={style.preloaderStyle}>
      <img src={preloader} />
    </div>
  );
};

export default Preloader;
