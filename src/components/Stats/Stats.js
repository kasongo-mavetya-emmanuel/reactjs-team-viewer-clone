import React from "react";
import StatsItem from "./StatItem";
import H2Title from "../UI/H2Title";
import classes from "./Stats.module.css";
import { useInView } from "react-intersection-observer";
import Container from "../UI/Container";

const Stats = () => {
  return (
    <section className={classes["stats-section-container"]}>
      <Container>
        <H2Title
          color={"#fff"}
          title={"Trusted by hundreds of millions of users"}
        />
        <div className={classes["stats-grid"]}>
          <StatsItem title={"Active devices"} value={"320 million"} />

          <StatsItem title={"Number of downloads"} value={"2.5 billion"} />

          <StatsItem title={"Average uptime"} value={"99.99%"} />
        </div>
      </Container>
    </section>
  );
};

export default Stats;
