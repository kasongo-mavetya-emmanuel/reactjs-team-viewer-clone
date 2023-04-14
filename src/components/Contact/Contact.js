import React from "react";
import Container from "../UI/Container";
import H2Title from "../UI/H2Title";
import Button from "../UI/Button";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={classes["contact-section"]}>
      <Container>
        <div className={classes["contact-header"]}>
          <H2Title title={"Let’s find the right solution for your business"} />
        </div>
        <p>
          Connect with one of our Customer Success Specialists and start
          defining your TeamViewer set-up.
        </p>
        <div className={classes["contact-button"]}>
          <Button text={"Get in touch"} />
        </div>
      </Container>
    </section>
  );
};

export default Contact;
