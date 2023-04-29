import React from "react";
import H3Title from "../UI/H3Title";
import classes from "./PatnerItem.module.css";
import { FaArrowRight } from "react-icons/fa";

const PatnerItem = (props) => {
  return (
    <div className={classes["patner-item"]}>
      <div className={classes["patner-flex-container"]}>
        <div>
          <img src={props.icon} alt="team viewer" />
          <H3Title title={props.title} color={"rgba(0, 0, 0, 0.6)"} />
          <p>{props.description}</p>
        </div>
        <div className={classes["patner-action"]}>
          <div className={classes["arrow-button"]}>
            <FaArrowRight size={"1.8rem"} style={{ verticalAlign: "middle" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatnerItem;
