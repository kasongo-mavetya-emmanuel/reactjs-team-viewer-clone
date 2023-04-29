import React from "react";
import classes from "./SocialMediaItem.module.css";

const SocialMediaItem = function(props) {
  return (
    <div className={classes["social-media-item"]}>
      <img src={props.source} alt="social media icon" />
    </div>
  );
};

export default SocialMediaItem;
