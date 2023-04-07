import React from "react";
import heroVid from "../../assets/videos/heroVid.webm";
import Container from "../UI/Container";
import classes from "./Hero.module.css";

function Hero() {
  return (
    <section className={classes["hero-section-container"]}>
      <Container>
        <div className={classes["hero-flex-container"]}>
          <div>
            <h1>
              The world’s most trusted remote access, control and support
              software
            </h1>
            <button className={classes["download-button"]}>
              &darr; Download for free
            </button>
            <a href="#">Privacy Policy</a>
            <p className={classes["trial"]}>
              Want to try TeamViewer for your business?
              <br />
              <a href="#">Get a free business trial</a>
            </p>
          </div>
          <div>
            <video className={classes.video} autoPlay muted loop>
              <source src={heroVid} type="video/webm"></source>
              Your Browser Not Supported
            </video>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
