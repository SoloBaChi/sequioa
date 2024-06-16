"use client";
import React from "react";
import DashboardHome from "./DashboardHome";
import Footer from "../components/footer/Footer";
import useFetch from "../hooks/useFetch";
import Link from "next/link";

// Get the token from the local storage
const authToken = localStorage.getItem("auth-token");

function Dashboard(props) {

  const [{ isLoading, apiData, serverError }] = useFetch(`${authToken}`);

  const userData = apiData?.data;
  console.log(userData);
  if (isLoading)
    return (
      <div className="flex justify-center h-screen items-center text-xl">
        <p className="m-auto">Loading sequoia dashboard...</p>
      </div>
    );
  if (serverError)
    return (
      <div className="flex flex-col justify-center h-screen items-center text-xl">
        <h1 className="text-xl text-red-500">{serverError.message}</h1>
        <p>
          Please{" "}
          <Link
            className="inline-block text-xl font-bold text-[#3a8d97]"
            href="/login"
          >
            login
          </Link>{" "}
          to contnue
        </p>
      </div>
    );

  return (
    <>
      <DashboardHome userData={userData} />
      <Footer />
    </>
  );
}

export default Dashboard;
