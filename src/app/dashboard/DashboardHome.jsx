"use client";
import React, { useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import SideMenu from "./SideMenu";
// import MainMenu from "./MainMenu";
import TradingLeaderBoard from "./TradingLeaderBoard";
import ProfileCard from "./ProfileCard";
import Referral from "./Referral";
import Search from "./Search";
// import Overview from "./Overview";
import Account from "./Account";
import TotalBalance from "./TotalBalance";
import TradingAccount from "./TradingAccount";
import TradingPortfolio from "./TradingPortfolio";
import TradeSummary from "./TradeSummary";
import DashboardHeader from "./header/DashboardHeader";

function DashboardHome(props) {
  const [showSidebar, setShowSidebar] = useState(false);
  const handleShowSidebar = () => {
    setShowSidebar((prev) => !prev);
  };
  return (
    <div className="dashboard-container">
      <div className="header-item">
        <DashboardHeader handleShowSidebar={handleShowSidebar} />
      </div>
      <div className="main-view">
        <div className="grid-2">
          <div className={showSidebar ? "side-menu active" : "side-menu"}>
            <SideMenu handleShowSidebar={handleShowSidebar} />
          </div>
          <div className="main-side">
            <div className="inner-grid-2">
              <div className="grid-item">
                <div className="search-menu">
                  <Search />
                </div>
                <div className="overview">
                  <h4>overview</h4>
                  <div className="flex-5-container">
                    <div className="flex-5">
                      <div className="flex-item">
                        <Account />
                      </div>
                      <div className="flex-item">
                        <TotalBalance />
                      </div>
                      <div className="flex-item">
                        <TradingAccount />
                      </div>
                      <div className="flex-item">
                        <TradingPortfolio />
                      </div>
                      <div className="flex-item">
                        <TradeSummary />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="leaderboard-container">
                  <TradingLeaderBoard />
                </div>
              </div>
              <div className="grid-item">
                <div className="section-one profile-card-container">
                  <ProfileCard goback="/dashboard" />
                </div>
                <div className="section-two">
                  <Referral />
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

export default DashboardHome;
