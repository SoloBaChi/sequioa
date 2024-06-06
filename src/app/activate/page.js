"use client";
import React from "react";
import Footer from "../components/footer/Footer";
import SuccessRegister from "./SuccessRegister";
import { usePathname, useSearchParams } from "next/navigation";

function Activate(props) {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const token = searchParams.get("token");
  return (
    <>
      <SuccessRegister token={token} email={email} />
      <Footer />
    </>
  );
}

export default Activate;
