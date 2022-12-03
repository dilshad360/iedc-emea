import React from "react";
import HeroImage from "../../assets/hero.png";

function Hero() {
  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-5 text-start">
            <h1 class="max-w-2xl mb-4 text-4xl text-gray-800 font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">
              INNOVATION AND ENTREPRENEURSHIP DEVELOPMENT CENTRE
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-2xl dark:text-gray-400">
              INNOVATE | INSPIRE | INCUBATE
            </p>
          </div>
          <div class="lg:mt-0 lg:col-span-7 lg:flex">
            <img src={HeroImage} alt="mockup" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
