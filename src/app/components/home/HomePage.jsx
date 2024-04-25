import React from "react";
import WhyUs from "./WhyUs";
import CopyTrading from "./CopyTrading";
import HowToEarn from "./HowToEarn";
import HeroSection from "./HeroSection";
import MainContents from "./MainContents";
import WhyChooseUs from "./WhyChooseUs";

function HomePage(props) {
  return (
    <>
      <HeroSection />
      <MainContents />
      <HowToEarn />
      <WhyChooseUs />
      <CopyTrading />
      <WhyUs />
    </>
  );
}

export default HomePage;
