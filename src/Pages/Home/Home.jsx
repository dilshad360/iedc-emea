import React from "react";
import About from "../../components/About/About";
import Cards from "../../components/Cards/Cards";
import Hero from "../../components/Hero/Hero";
import Support from "../../components/Support/Support";

function Home() {
  return (
    <div>
      <Hero />
      <Cards />
      <About />
      <Support/>
    </div>
  );
}

export default Home;
