import React from "react";
import heroVid from "../../assets/videos/heroVid.webm";

function Hero() {
  return (
    <section>
      <div>
        <h1>
          The world’s most trusted remote access, control and support software
        </h1>
        <button>&darr; Download for free</button>
        <a href="#">Download for free</a>
        <p>
          Want to try TeamViewer for your business?
          <br />
          <a href="#">Get a free business trial</a>
        </p>
      </div>
      <div>
        <video autoPlay muted loop>
          <source src={heroVid} type="video/webm"></source>
          Your Browser Not Supported
        </video>
      </div>
    </section>
  );
}

export default Hero;
