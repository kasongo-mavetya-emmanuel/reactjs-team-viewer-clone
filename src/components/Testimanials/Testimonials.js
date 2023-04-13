import React from "react";
import TestimonialItem from "./TestimonialItem";
import cnesLogo from "../../assets/testimonials/icons/logo-cnes-landscape-1.svg";
import phillipsLogo from "../../assets/testimonials/icons/logo-philips-landscape-2.svg";
import siemensLogo from "../../assets/testimonials/icons/logo-siemens-landscape.svg";
import dorosLogo from "../../assets/testimonials/icons/logo-doro-landscape.svg";
import leitnerLogo from "../../assets/testimonials/icons/logo-leitner-ropeways-landscape.svg";
import trimbleLogo from "../../assets/testimonials/icons/logo-trimble-landscape-1.svg";
//
import cnes from "../../assets/testimonials/customer-success-cnes-feature.jpg";
import phillips from "../../assets/testimonials/customer-success-philips-digital-signage.jpg";
import siemens from "../../assets/testimonials/customer-success-siemens-xpick.jpg";
import doros from "../../assets/testimonials/customer-success-doro-alt-feature.jpg";
import leitner from "../../assets/testimonials/customer-success-leitner-ropeways-feature.jpg";
import trimble from "../../assets/testimonials/customer-success-trimble-feature.jpg";
import classes from "./Testimonials.module.css";
import Container from "../UI/Container";
import H2Title from "../UI/H2Title";

const Testimonials = () => {
  return (
    <section className={classes["testimonials-section"]}>
      <Container>
        <div className={classes["testimonial-title"]}>
          <H2Title title={"Customer Success Spotlight"} />
        </div>
        <div className={classes["testimonials-grid"]}>
          <TestimonialItem
            icon={phillipsLogo}
            description={
              "Energy sector digitalizes picking processes with the vision picking solution, xPick."
            }
            source={phillips}
          />
          <TestimonialItem
            icon={siemensLogo}
            description={
              "B2B division uses TeamViewer for remote maintenance of digital displays and information systems."
            }
            source={siemens}
          />
          <TestimonialItem
            icon={dorosLogo}
            description={
              "With TeamViewer, Doro closes the digital gap for seniors so they can live an active and independent life."
            }
            source={doros}
          />
          <TestimonialItem
            icon={leitnerLogo}
            description={
              "Leitner Ropeways relies on AR-based support to optimize the operating time of ropeways."
            }
            source={leitner}
          />
          <TestimonialItem
            icon={trimbleLogo}
            description={
              "TeamViewer increased efficiency gains of precision agriculture for Trimble users."
            }
            source={trimble}
          />

          <TestimonialItem
            icon={cnesLogo}
            description={
              "TeamViewer in SPACE: Tele-operation of medical equipment and improved image quality overall."
            }
            source={cnes}
          />
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
