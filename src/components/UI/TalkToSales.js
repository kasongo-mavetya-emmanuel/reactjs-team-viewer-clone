import React from "react";
import classes from "./TalkToSales.module.css";

const TalkToSales = () => {
  return (
    <button className={classes["contact-sale-button"]}>
      <div className={classes["button-content"]}>
        <span className={classes.text}>Talk To Sales</span>{" "}
        <span className={classes.arrow}>&rarr;</span>
      </div>
    </button>
  );
};

export default TalkToSales;
