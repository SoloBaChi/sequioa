"use client";
import React, { useState } from "react";
import TradingLeaderBoard from "../TradingLeaderBoard";
import Search from "../Search";
import SideMenu from "../SideMenu";
import MainMenu from "../MainMenu";
import DashboardHeader from "../header/DashboardHeader";

function LeaderBoard(props) {
  const [showSidebar, setShowSidebar] = useState(false);
  const handleShowSidebar = () => {
    setShowSidebar((prev) => !prev);
  };
  return (
    <div className="dashboard-container leaderboard">
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
            <TradingLeaderBoard />
          </div>
        </div>
      </div>
      {/* <div className="container-item footer">Yes</div> */}
    </div>
  );
}

export default LeaderBoard;
