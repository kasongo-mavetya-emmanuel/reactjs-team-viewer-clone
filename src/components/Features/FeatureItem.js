import React from "react";
import H4Title from "../UI/H4Title";
import classes from "./FeatureItem.module.css";

const FeatureItem = React.forwardRef((props, ref) => {
  return (
    <li ref={ref} className={classes["list-item"]}>
      <div>
        <div
          style={{
            opacity: `${props.isVisible ? "1" : "0"}`,
            transition: "opacity 0.9s ease-in",
          }}
        >
          {props.icon}
        </div>
        <H4Title title={props.title} />
        <p>{props.description}</p>
      </div>
    </li>
  );
});
export default FeatureItem;
