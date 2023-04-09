import React from "react";
import H3Title from "../UI/H3Title";
import classes from "./StatItem.module.css";

const StatsItem = (props) => {
  return (
    <div className={classes["stat-item"]}>
      <H3Title title={props.title} color={"#fff"} />
      <p>{props.value}</p>
    </div>
  );
};

export default StatsItem;
