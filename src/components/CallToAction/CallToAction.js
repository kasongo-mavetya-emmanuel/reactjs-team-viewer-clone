import React from "react";
import classes from "./CallToAction.module.css";
import H2Title from "../UI/H2Title";
import Button from "../UI/Button";
import Container from "../UI/Container";
import LinkButton from "../UI/LinkButton";

const CallToAction = () => {
  return (
    <section className={classes["cto-section-container"]}>
      <Container>
        <H2Title title={"Get started in seconds"} />
        <p>
          Forget complex configurations and lengthy installations – download now
          and be up and running instantly.
        </p>
        <div className={classes["cto-button"]}>
          <Button text={"Free Download"}>Free Download</Button>
        </div>

        <LinkButton
          text={
            <>
              Privacy Policy <span>&rarr;</span>
            </>
          }
        />
      </Container>
    </section>
  );
};

export default CallToAction;
