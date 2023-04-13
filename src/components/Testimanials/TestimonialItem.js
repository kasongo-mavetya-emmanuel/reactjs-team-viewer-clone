import React from "react";
import classes from "./TestimonialItem.module.css";

const TestimonialItem = (props) => {
  return (
    <div className={classes["testimonial-item"]}>
      <div
        style={{
          backgroundImage: `url( ${props.source})`,
          backgroundSize: "cover",
        }}
        className={classes["img-container"]}
      >
        <div className={classes["icon-container"]}>
          <img src={props.icon} />
        </div>
        <a>&rarr;</a>
      </div>
      <p>{props.description}</p>
    </div>
  );
};

export default TestimonialItem;
