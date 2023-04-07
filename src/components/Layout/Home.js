import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import Hero from "../Hero/Hero";
import Reviews from "../Reviews/Reviews";
import Benefits from "../Benefits/Benefits";

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <Hero />
      <Reviews />
      <Benefits />
    </div>
  );
};

export default Home;
