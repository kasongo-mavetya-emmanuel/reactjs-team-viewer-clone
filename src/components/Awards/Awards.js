import React from "react";
import AwardItem from "./AwardItem.js";
import logoEurope from "../../assets/awards/logo-award-european-customer-centricity-2021.png";
import logoG2 from "../../assets/awards/logo-award-g2-leader-winter-2023.png";
import logoTrustradius from "../../assets/awards/logo-award-trustradius-top-rated-2022.png";
import classes from "./Awards.module.css";
import Container from "../UI/Container.js";

const Awards = () => {
  return (
    <section className={classes["awards-section-container"]}>
      <Container>
        <div className={classes["awards-grid-container"]}>
          <AwardItem
            source={logoEurope}
            description={
              <>
                Best User Experience and Employee Experience at{" "}
                <strong>European Customer Centricity Award 2021</strong>
              </>
            }
          />
          <AwardItem
            source={logoG2}
            description={
              <>
                Leader in Remote Desktop at <strong>G2</strong> Winter 2023
              </>
            }
          />

          <AwardItem
            source={logoTrustradius}
            description={
              <>
                {" "}
                Top rated Remote Desktop Software 2022 at{" "}
                <strong>TrustRadius</strong>
              </>
            }
          />
        </div>
      </Container>
    </section>
  );
};

export default Awards;
