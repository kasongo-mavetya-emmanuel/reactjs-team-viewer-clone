import React from "react";
import classes from "./SocialMedia.module.css";
import SocialMediaItem from "./SocialMediaItem";
import facebookLogo from "../../assets/footer/logo-facebook-white.svg";
import linkedInLogo from "../../assets/footer/logo-linkedin-white.svg";
import twitterLogo from "../../assets/footer/logo-twitter-white.svg";
import youtubeLogo from "../../assets/footer/logo-youtube-white.svg";

const SocialMedia = () => {
  return (
    <div className={classes["social-media-grid"]}>
      <SocialMediaItem source={facebookLogo} />
      <SocialMediaItem source={linkedInLogo} />
      <SocialMediaItem source={twitterLogo} />
      <SocialMediaItem source={youtubeLogo} />
    </div>
  );
};

export default SocialMedia;
