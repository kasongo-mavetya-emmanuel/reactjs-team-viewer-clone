import React, { useState, useRef } from "react";
import manImg from "../../assets/benefits/man-providing-remote-support.jpg";
import mobileImg from "../../assets/benefits/product-teamviewer-mobile-device-support.jpg";
import BenefitItem from "./BenefitItem";
import womImg from "../../assets/benefits/woman-working-on-laptop.jpg";
import classes from "./Benefits.module.css";
import Container from "../UI/Container";
import { useInView } from "react-intersection-observer";

const Benefits = () => {
  const { ref: leftRef, inView: leftInView } = useInView();
  const { ref: ben1, inView: ben1InView } = useInView({ delay: 700 });
  const { ref: ben2, inView: ben2InView } = useInView({ delay: 700 });
  const { ref: ben3, inView: ben3InView } = useInView({ delay: 700 });

  return (
    <section className={classes["benefits-section"]}>
      <Container>
        <div className={classes["benefits-grip"]}>
          <div
            ref={leftRef}
            className={`${classes["left-side-grid"]} ${
              leftInView ? classes["fixed-pos"] : ""
            }`}
          >
            <h2>One product. Any device. Endless uses.</h2>
            <a href="#">Explore more &rarr;</a>
            <div className={classes["imgs-section"]}>
              <img src={womImg} />
              {ben1InView && <img src={womImg} />}
              {ben2InView && <img src={manImg} />}
              {ben3InView && <img src={mobileImg} />}
            </div>
          </div>
          <div className={classes["right-side-grid"]}>
            <ul>
              <BenefitItem
                ref={ben1}
                title={"REMOTE ACCESS"}
                subTitle={"Work from anywhere with full access to any device"}
                description={
                  "Stay productive wherever you are with unrestricted access to all your files and applications, as well as your mobile devices and servers. No VPN required."
                }
              />

              <BenefitItem
                ref={ben2}
                title={"REMOTE SUPPORT"}
                subTitle={"Instant remote support for customers and employees"}
                description={
                  "Forget costly site visits and solve any IT problem remotely with the market’s most secure and powerful support platform. Compatible with almost any device – including headless ones such as servers."
                }
              />

              <BenefitItem
                ref={ben3}
                title={"REMOTE WORK"}
                subTitle={"Support any mobile device"}
                description={
                  "Keep remote workers on the go with the market’s widest device coverage. We cover all Android devices and also provide iOS screen sharing – an industry first."
                }
              />
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Benefits;