import React from "react";
import About from "../../components/About/About";
import Cards from "../../components/Cards/Cards";
import Hero from "../../components/Hero/Hero";

function Home() {
  return (
    <div>
      <Hero />
      <Cards />
      <About />
    </div>
  );
}

export default Home;
