import React, { useEffect, useRef, useState } from "react";
import StatsItem from "./StatItem";
import H2Title from "../UI/H2Title";
import classes from "./Stats.module.css";
import Container from "../UI/Container";

const Stats = () => {
  // const { ref, inView, entry } = useInView({
  //   threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
  //   trackVisibility: true,
  //   delay: 100,
  // });

  const myRef = useRef();

  const [intersectionRatio, setIntersectionRatio] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const interRadio = Math.round(entries[0].intersectionRatio * 10) / 10;
        setIntersectionRatio(interRadio);
      },
      {
        threshold: [0.5, 0.6, 0.7, 0.8, 1],
        root: null,
      }
    );
    observer.observe(myRef.current);
  }, [myRef.current]);

  return (
    <section className={classes["stats-section-container"]} ref={myRef}>
      <Container>
        <H2Title
          color={"#fff"}
          title={"Trusted by hundreds of millions of users"}
        />
        <div
          style={{
            transform: `translateX(${`${250 - intersectionRatio * 250}%`})`,
            transition: "transform 0.7s ease-in-out",
          }}
        >
          <div className={classes["stats-grid"]}>
            <StatsItem title={"Active devices"} value={"320 million"} />

            <StatsItem title={"Number of downloads"} value={"2.5 billion"} />

            <StatsItem title={"Average uptime"} value={"99.99%"} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Stats;
