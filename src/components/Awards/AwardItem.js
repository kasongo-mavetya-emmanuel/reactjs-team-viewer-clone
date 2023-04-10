import React from "react";
import classes from "./AwardItem.module.css";

const AwardItem = (props) => {
  return (
    <div className={classes["award-item"]}>
      <img src={props.source} />
      <p>{props.description}</p>
    </div>
  );
};

export default AwardItem;
