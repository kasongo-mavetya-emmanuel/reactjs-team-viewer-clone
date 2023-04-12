import React from "react";
import classes from "./OtherProductItem.module.css";
import H3Title from "../UI/H3Title";
import { FaArrowRight } from "react-icons/fa";

const OtherProductItem = (props) => {
  return (
    <div className={classes["product-item"]}>
      <div className={classes["header-grid"]}>
        <div>
          <svg
            version="1.1"
            viewBox="0 0 111.3 111.3"
            width="40px"
            height="40px"
            x="0px"
            y="0px"
            // width="110px"
            // height="110px"
          >
            <style type="text/css">{`.st0{fill:#050A52;}`}</style>
            <path
              class="st0"
              d="M94.9,0H16.5C7.4,0,0,7.4,0,16.5v78.4c0,9.1,7.4,16.5,16.5,16.5h78.4c9.1,0,16.5-7.4,16.5-16.5V16.5
                    C111.3,7.4,104,0,94.9,0z M55.7,100.4c-24.7,0-44.8-20-44.8-44.8s20-44.8,44.8-44.8c24.7,0,44.8,20,44.8,44.8S80.4,100.4,55.7,100.4
                    z"
            />
            <polygon
              class="st0"
              points="93.6,55.7 64.7,39.9 67.9,49.8 43.5,49.8 46.6,39.9 17.8,55.7 46.6,71.5 43.5,61.5 67.9,61.5 
                    64.7,71.5 "
            />
          </svg>
        </div>

        <div className={classes["headline3"]}>
          <H3Title title={props.title} color={"#000"} />
        </div>
      </div>

      <div className={classes["body-item"]}>
        <p>{props.description}</p>
        <div className={classes["product-action"]}>
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default OtherProductItem;
