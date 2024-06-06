import React, { Suspense } from "react";
import Footer from "../components/footer/Footer";
import SuccessRegister from "./SuccessRegister";

function Activate(props) {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <SuccessRegister />
      </Suspense>
      <Footer />
    </>
  );
}

export default Activate;
