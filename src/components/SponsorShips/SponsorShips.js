import React, { useEffect, useRef, useState } from "react";
import machester from "../../assets/sponsorships/manchester.png";
import mercedes from "../../assets/sponsorships/mercedes.png";
import classes from "./SponsorShips.module.css";
import H2Title from "../UI/H2Title";
import LinkButton from "../UI/LinkButton";

const SponsorShips = () => {
  const sponsorRef = useRef();
  const [intersectionRatio, setIntersectionRatio] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].boundingClientRect.top > 0) {
          if (entries[0].isIntersecting) {
            // entered viewport at the top edge, hence scroll direction is up
            const interRadio =
              Math.round(entries[0].intersectionRatio * 10) / 10;
            setIntersectionRatio(interRadio);
          } else {
            // left viewport at the top edge, hence scroll direction is down
          }
        }
        // const interRadio = Math.round(entries[0].intersectionRatio * 10) / 10;
        // setIntersectionRatio(interRadio);
      },
      {
        root: null,
        threshold: [0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: "50px",
      }
    );

    observer.observe(sponsorRef.current);
  }, [sponsorRef.current]);

  return (
    <section className={classes["sponsorships-section-container"]}>
      <figure
        style={{ width: `${100 * intersectionRatio}%` }}
        className={classes["sponsor-one"]}
      >
        <div ref={sponsorRef} className={classes["sponsor-header1"]}>
          <img src={machester}></img>
          <H2Title
            title={
              "Bringing you closer to Manchester United with Next-Gen Technology"
            }
            color={"#fff"}
          />
          <LinkButton
            color={"#fff"}
            text={
              <>
                Learn more <span>&rarr;</span>
              </>
            }
          />
        </div>
      </figure>

      <figure className={classes["sponsor-two"]}>
        <div className={classes["sponsor-header2"]}>
          <img src={mercedes}></img>
          <H2Title
            title={
              "Boosting Team Performance in the World's Fastest Laboratory"
            }
            color={"#fff"}
          />
          <LinkButton
            color={"#fff"}
            text={
              <>
                Learn more <span>&rarr;</span>
              </>
            }
          />
        </div>
      </figure>
    </section>
  );
};

export default SponsorShips;
