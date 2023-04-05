import AwardItem from "./AwardItem,js";
import logoEurope from "../../assets/awards/logo-award-european-customer-centricity-2021.png";
import logoG2 from "../../assets/logo-award-g2-leader-winter-2023.png";
import logoTrustradius from "../../assets/logo-award-trustradius-top-rated-2022.png";

const Awards = () => {
  return (
    <section>
      <AwardItem
        source={logoEurope}
        desciption={
          "Best User Experience and Employee Experience at <strong>European Customer Centricity Award 2021<strong/>"
        }
      />
      <AwardItem
        source={logoG2}
        desciption={
          "Leader in Remote Desktop at <strong>G2<strong/> Winter 2023"
        }
      />
      <AwardItem
        source={logoTrustradius}
        desciption={
          "Top rated Remote Desktop Software 2022 at <strong>TrustRadius<strong/>"
        }
      />
    </section>
  );
};

export default Awards;
