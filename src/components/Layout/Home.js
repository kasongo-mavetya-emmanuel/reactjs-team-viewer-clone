import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import Hero from "../Hero/Hero";
import Reviews from "../Reviews/Reviews";
import Benefits from "../Benefits/Benefits";
import Features from "../Features/Features";
import Stats from "../Stats/Stats";
import Awards from "../Awards/Awards";
import CallToAction from "../CallToAction/CallToAction";
import SponsorShips from "../SponsorShips/SponsorShips";

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <Hero />
      <Reviews />
      <Benefits />
      <Features />
      <Stats />
      <Awards />
      <CallToAction />
      <SponsorShips />
    </div>
  );
};

export default Home;
