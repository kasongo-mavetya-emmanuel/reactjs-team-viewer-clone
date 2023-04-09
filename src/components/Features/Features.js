import React, { useRef } from "react";
import FeatureItem from "./FeatureItem";
import { AiFillCheckCircle } from "react-icons/ai";
import classes from "./Features.module.css";
import Container from "../UI/Container";
import H2Title from "../UI/H2Title";
import { useInView } from "react-intersection-observer";

const Features = () => {
  const { ref: leftRef, inView: leftInView } = useInView();
  const { ref: feat1Ref, inView: feat1InView } = useInView({ delay: 1000 });
  const { ref: feat2Ref, inView: feat2InView } = useInView({ delay: 900 });
  const { ref: feat3Ref, inView: feat3InView } = useInView({ delay: 900 });

  return (
    <section className={classes["features-section-container"]}>
      <Container>
        <div className={classes["features-grid-container"]}>
          <div
            ref={leftRef}
            className={`${classes["left-side-grid"]} ${leftInView &&
              classes["fixed-position"]}`}
          >
            <H2Title title={"What sets TeamViewer apart?"} />
          </div>
          <div className={classes["right-side-grid"]}>
            <ul>
              <FeatureItem
                ref={feat1Ref}
                icon={feat1InView && <AiFillCheckCircle />}
                title={"The widest device and platform coverage"}
                description={
                  "TeamViewer covers almost 130 mobile device manufacturers, operating systems, and IoT devices – more than double the nearest competitor."
                }
              />

              <FeatureItem
                ref={feat2Ref}
                icon={feat2InView && <AiFillCheckCircle />}
                title={"Best-in-class usability and performance"}
                description={
                  "Runs out of the box with no need for installations or complicated configurations. Ranked No.1 by Qualitest in a comprehensive technical performance test that assessed usability, image quality, and file transfer speeds."
                }
              />

              <FeatureItem
                ref={feat3Ref}
                icon={feat3InView && <AiFillCheckCircle />}
                title={"A relentless focus on security"}
                description={
                  "TeamViewer is protected by end-to-end 256-bit AES encryption, two-factor authentication, granular access management, device authorization and other industry-grade security features. We comply fully with GDPR and are certified according to SOC2, HIPAA/HITECH, and ISO 9001:2015. All TeamViewer data center partners have been ISO/IEC 27001 certified."
                }
              />
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;
