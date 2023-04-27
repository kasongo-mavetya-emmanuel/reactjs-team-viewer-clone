import React, { useState } from "react";
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
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Home = () => {
  const [isMenu, toggleMenu] = useState(false);
  function toggle() {
    toggleMenu((prev) => !prev);
  }
  return (
    <div>
      <NavigationBar onToggle={toggle} />
      {isMenu ? (
        <div />
      ) : (
        <div>
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
          <Patners />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Home;
