import React from "react";
import SideMenu from "../../SideMenu";
import TradingLeaderBoard from "../../TradingLeaderBoard";
import ProfileCard from "../../ProfileCard";
import Search from "../../Search";
import Account from "../../Account";
import TradingAccount from "../../TradingAccount";
import CopyTradingPortfolio from "./CopyTradingPortfolio";
import TradeSummary from "../../TradeSummary";
import TotalMangedAmount from "./TotalMangedAmount";
import TradingStrategy from "./TradingStrategy";

function CopyTrader(props) {
  return (
    <div
      className="dashboard-container copy-tader-dashboard"
      id="copy-trader-dashboard"
    >
      <div className="container-item">{/* <Header /> */}</div>
      <div className="main-view">
        <div className="grid-2">
          <div className="side-menu">
            <SideMenu />
          </div>
          <div className="main-side">
            <div className="inner-grid-2">
              <div className="grid-item">
                <div className="section-one profile-card-container">
                  <ProfileCard goback="/dashboard/copytrading" />
                </div>
                <div className="trading-strategy-container">
                  <TradingStrategy />
                </div>
              </div>
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
                        <TotalMangedAmount />
                      </div>
                      <div className="flex-item">
                        <TradingAccount />
                      </div>
                      <div className="flex-item">
                        {/* <TradingPortfolio /> */}
                      </div>
                      <div className="flex-item">
                        <TradeSummary />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="leaderboard-container">
                  {/* <TradingLeaderBoard /> */}
                </div>
              </div>
            </div>
            <div className="trading-portfolio-container">
              <CopyTradingPortfolio />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container-item footer">Yes</div> */}
    </div>
  );
}

export default CopyTrader;
