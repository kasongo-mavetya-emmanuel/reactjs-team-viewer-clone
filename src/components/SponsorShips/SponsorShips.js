import SponsorShipItem from "./SponsorShipItem";
import machester from "../../assets/sponsorships/manchester.png";
import mercedes from "../../assets/sponsorships/mercedes.png";

const SponsorShips = () => {
  return (
    <section>
      <SponsorShipItem
        logo={machester}
        title={
          "Bringing you closer to Manchester United with Next-Gen Technology"
        }
      />
      <SponsorShipItem
        logo={mercedes}
        title={"Boosting Team Performance in the World's Fastest Laboratory"}
      />
    </section>
  );
};

export default SponsorShips;
