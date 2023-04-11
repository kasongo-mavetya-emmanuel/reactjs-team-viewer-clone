import React from "react";
import classes from "./LinkButton.module.css";

const LinkButton = (props) => {
  return (
    <a
      style={{ color: `${props.color}` }}
      className={classes["link-button"]}
      href="#"
    >
      {props.text}
    </a>
  );
};

export default LinkButton;
