import React from "react";
import classes from "./SocialMediaItem.module.css";

const SocialMediaItem = function(props) {
  return (
    <div className={classes["social-media-item"]}>
      <img src={props.source} />
    </div>
  );
};

export default SocialMediaItem;
