import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import classes from "./ReviewItem.module.css";

const ReviewItem = (props) => {
  // const rating = props.rating;
  return (
    <div className={classes["review-container"]}>
      <div className={classes["icon-container"]}>{props.logo}</div>
      <div className={classes["rating-container"]}>
        {new Array(5).fill().map((_, index) => {
          return <AiTwotoneStar key={index} />;
        })}
      </div>
      <p className={classes["number-container"]}>{props.number} reviews</p>
    </div>
  );
};

export default ReviewItem;
