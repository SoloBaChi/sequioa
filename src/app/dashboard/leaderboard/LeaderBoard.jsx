import React from "react";
import TradingLeaderBoard from "../TradingLeaderBoard";
import Search from "../Search";
import SideMenu from "../SideMenu";
import MainMenu from "../MainMenu";

function LeaderBoard(props) {
  return (
    <div className="dashboard-container leaderboard">
      <div className="container-item">{/* <Header /> */}</div>
      <div className="container-item main-view">
        <div className="grid-2">
          <div className="side-menu">
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
