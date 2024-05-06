"use client";
import Link from "next/link";
import React, { useState } from "react";
import SideMenu from "../SideMenu";
import Search from "../Search";
import ProfileCard from "../ProfileCard";
import DashboardHeader from "../header/DashboardHeader";

function CopyTrading(props) {
  const [showSidebar, setShowSidebar] = useState(false);
  const handleShowSidebar = () => {
    setShowSidebar((prev) => !prev);
  };
  return (
    <div className="dashboard-container copytrading">
      <div className="header-item">
        <DashboardHeader handleShowSidebar={handleShowSidebar} />
      </div>
      <div className="container-item main-view">
        <div className="grid-2">
          <div className={showSidebar ? "side-menu active" : "side-menu"}>
            <SideMenu />
          </div>
          <div className="main-side">
            <div className="search-menu">
              <Search />
            </div>
            <div className="trading-cards">
              <div className="grid-container">
                <div className="grid-item">
                  <Link
                    className="profile-card-container"
                    href="/dashboard/copytrading/copytrader"
                  >
                    <ProfileCard goback="/dashboard" />
                  </Link>
                </div>
                <div className="grid-item">
                  <Link
                    className="profile-card-container"
                    href="/dashboard/copytrading/copytrader"
                  >
                    <ProfileCard goback="/dashboard" />
                  </Link>
                </div>
                <div className="grid-item">
                  <Link
                    className="profile-card-container"
                    href="/dashboard/copytrading/copytrader"
                  >
                    <ProfileCard goback="/dashboard" />
                  </Link>
                </div>
                <div className="grid-item">
                  <Link
                    className="profile-card-container"
                    href="/dashboard/copytrading/copytrader"
                  >
                    <ProfileCard goback="/dashboard" />
                  </Link>
                </div>
                <div className="grid-item">
                  <Link
                    className="profile-card-container"
                    href="/dashboard/copytrading/copytrader"
                  >
                    <ProfileCard goback="/dashboard" />
                  </Link>
                </div>
                <div className="grid-item">
                  <Link
                    className="profile-card-container"
                    href="/dashboard/copytrading/copytrader"
                  >
                    <ProfileCard goback="/dashboard" />
                  </Link>
                </div>
                <div className="grid-item">
                  <Link
                    className="profile-card-container"
                    href="/dashboard/copytrading/copytrader"
                  >
                    <ProfileCard goback="/dashboard" />
                  </Link>
                </div>
                <div className="grid-item">
                  <Link
                    className="profile-card-container"
                    href="/dashboard/copytrading/copytrader"
                  >
                    <ProfileCard goback="/dashboard" />
                  </Link>
                </div>
                <div className="grid-item">
                  <Link
                    className="profile-card-container"
                    href="/dashboard/copytrading/copytrader"
                  >
                    <ProfileCard goback="/dashboard" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container-item footer">Yes</div> */}
    </div>
  );
}

export default CopyTrading;
