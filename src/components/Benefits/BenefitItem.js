import React from "react";
import classes from "./BenefitItem.module.css";
const BenefitItem = React.forwardRef((props, ref) => {
  return (
    <li ref={ref} className={classes["benefit-item"]}>
      <div className={classes["benefit-container"]}>
        <h3>{props.title}</h3>
        <h4>{props.subTitle}</h4>
        <p>{props.description}</p>
      </div>
    </li>
  );
});

export default BenefitItem;
