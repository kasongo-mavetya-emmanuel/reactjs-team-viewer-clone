import React from "react";
import classes from "./FooterBottom.module.css";

const FooterBottom = () => {
  return (
    <div className={classes["footer-bottom"]}>
      <p>Privacy & Cookies</p>
      <p>Contact</p>
      <p>EULA / DPA</p>
      <p>Product Description</p>
      <p>Imprint</p>
      <p>Cookies Settings</p>
    </div>
  );
};

export default FooterBottom;
