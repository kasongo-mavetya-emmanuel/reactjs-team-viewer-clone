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
import OtherProducts from "../OtherProducts/OtherProducts";
import Testimonials from "../Testimanials/Testimonials";
import Patners from "../Patners/Patners";

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
      <OtherProducts />
      <Testimonials />
      {/* <Patners /> */}
    </div>
  );
};

export default Home;
