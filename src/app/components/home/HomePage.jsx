import React from "react";
import WhyUs from "./WhyUs";
import CopyTrading from "./CopyTrading";
import HowToEarn from "./HowToEarn";

function HomePage(props) {
  return (
    <>
      <HowToEarn />
      <CopyTrading />
      <WhyUs />
    </>
  );
}

export default HomePage;
