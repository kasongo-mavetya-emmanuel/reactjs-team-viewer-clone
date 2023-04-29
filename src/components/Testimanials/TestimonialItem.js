import React from "react";
import classes from "./TestimonialItem.module.css";
import { FaArrowRight } from "react-icons/fa";

const TestimonialItem = (props) => {
  return (
    <div className={classes["testimonial-item"]}>
      <div
        style={{
          backgroundImage: `url( ${props.source})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className={classes["img-container"]}
      >
        <div className={classes["icon-container"]}>
          <img src={props.icon} alt="enterprise icon" />
        </div>
        <div className={classes["testimonial-action"]}>
          <div className={classes["arrow-button"]}>
            <FaArrowRight size={"1.8rem"} style={{ verticalAlign: "middle" }} />
          </div>
        </div>
      </div>
      <p>{props.description}</p>
    </div>
  );
};

export default TestimonialItem;
