import React from "react";
import WhyUs from "./WhyUs";
import CopyTrading from "./CopyTrading";
import HowToEarn from "./HowToEarn";
import HeroSection from "./HeroSection";
import MainContents from "./MainContents";

function HomePage(props) {
  return (
    <>
      <HeroSection />
      <MainContents />
      <HowToEarn />
      <CopyTrading />
      <WhyUs />
    </>
  );
}

export default HomePage;
