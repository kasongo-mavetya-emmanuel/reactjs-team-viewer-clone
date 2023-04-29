import React from "react";
import classes from "./AwardItem.module.css";

const AwardItem = (props) => {
  return (
    <div className={classes["award-item"]}>
      <img src={props.source} alt="reward images" />
      <p>{props.description}</p>
    </div>
  );
};

export default AwardItem;
