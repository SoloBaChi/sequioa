import React from "react";
import TradingAccountIcon from "../components/icons/TradingAccountIcon";
import TradingLeaderBoard from "./TradingLeaderBoard";
import StarIcon from "../components/icons/StarIcon";
import WalletIcon from "../components/icons/WalletIcon";
import AccountBalanceIcon from "../components/icons/AccountBalanceIcon";
import DepositIcon from "../components/icons/DepositIcon";
import InvestIcon from "../components/icons/InvestIcon";
import RiskIcon from "../components/icons/RiskIcon";

import ProfileCard from "./ProfileCard";
import Referral from "./Referral";
import Search from "./Search";
import DownArrowIcon from "../components/icons/DownArrowIcon";
import ProgressBar from "./ProgressBar";

function MainMenu(props) {
  return (
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
                <figure className="fig-card account">
                  <div className="top-section flex">
                    <div className="flex-item icon-container">
                      <StarIcon />
                    </div>
                    <div className="flex-item">
                      <h5>account</h5>
                    </div>
                  </div>
                  <div className="bottom-section">
                    <h6>42</h6>
                    <p>Reward Points</p>
                  </div>
                </figure>
              </div>
              <div className="flex-item">
                <figure className="fig-card total-balance">
                  <div className="top-section flex">
                    <div className="flex-item icon-container">
                      <AccountBalanceIcon />
                    </div>
                    <div className="flex-item">
                      <h5>Total Balance</h5>
                    </div>
                  </div>
                  <div className="middle-section">
                    <div className="amount-container flex justify-center items-baseline">
                      <div>
                        <p className="font-[700] text-[1.85rem] xl:text-[2rem] text-[#225775]">
                          $20,540.<span className="kobo text-[1.5rem]">56</span>
                        </p>
                      </div>
                      <div className="relative top-[-10px]">
                        <p className="text-[#5fc074]">
                          <span>+30%</span>
                          <br />
                          <span> +$3,226</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-section">
                    <div className="cta-btn-container">
                      <button className="primary-btn">
                        <div>
                          <DepositIcon />
                        </div>
                        <span> deposit</span>
                      </button>
                      <button className="primary-btn">
                        <div>
                          <InvestIcon />
                        </div>
                        <span>invest</span>
                      </button>
                      <button className="primary-btn">
                        <div>
                          <WalletIcon />
                        </div>
                        <span> Wallet</span>
                      </button>
                    </div>
                  </div>
                </figure>
              </div>
              <div className="flex-item">
                <figure className="fig-card trading-account">
                  <div className="top-section flex">
                    <div className="flex-item icon-container">
                      <TradingAccountIcon />
                    </div>
                    <div className="flex-item">
                      <h5>Create Trading account</h5>
                    </div>
                  </div>
                  <div className="bottom-section">
                    <div className="cta-btn-container">
                      <button className="primary-btn">demo account</button>
                      <button className="secondary-btn">live account</button>
                    </div>
                  </div>
                </figure>
              </div>
              <div className="flex-item">
                <figure className="fig-card trading-details copy-trading">
                  <div className="top-section flex justify-between">
                    <div className="flex-item">
                      <h4>copy trading portfolio</h4>
                    </div>
                    <div className="flex-item flex">
                      <h5>25%</h5>
                      <span className="arrow-down">
                        <DownArrowIcon />
                      </span>
                    </div>
                  </div>
                  <div className="bottom-section">
                    <div className="flex flex-3 flex-row items-center justify-center gap-[4%]">
                      <div className="flex-item basis-[22%]">
                        <h6>udezueFx</h6>
                        <h6>chetaFunds</h6>
                        <h6>johnFunded</h6>
                        <h6>chibuezeFx</h6>
                        <h6>development</h6>
                      </div>
                      <div className="flex-item basis-[48%] ">
                        <p>
                          <ProgressBar val="40" max="100" />
                        </p>
                        <p>
                          <ProgressBar val="60" max="100" />
                        </p>
                        <p>
                          <ProgressBar val="30" max="100" />
                        </p>
                        <p>
                          <ProgressBar val="40" max="100" />
                        </p>
                        <p>
                          <ProgressBar val="90" max="100" />
                        </p>
                      </div>
                      <div className="flex-item basis-[22%] ml-auto">
                        <p className="perce">40%</p>
                        <p className="perce">20%</p>
                        <p className="perce">60%</p>
                        <p className="perce">90%</p>
                        <p className="perce">15%</p>
                      </div>
                    </div>
                  </div>
                </figure>
              </div>
              <div className="flex-item">
                <figure className="fig-card trading-details trade-summary">
                  <div className="top-section flex">
                    <div className="flex-item">
                      <h4>trade summary</h4>
                    </div>
                  </div>
                  <div className="bottom-section">
                    <div className="flex flex-row gap-4 justify-end items-end">
                      <div className="flex-item flex gap-1 items-baseline">
                        <p>Loss</p>
                        <span className="inline-block bg-[#ffbdbd] w-[24px] h-[6px]"></span>
                      </div>
                      <div className="flex-item flex gap-1 items-baseline">
                        <p>No Trade</p>
                        <span className="inline-block bg-[#dfdfdf] w-[24px] h-[6px]"></span>
                      </div>
                      <div className="flex-item flex gap-1 items-baseline">
                        <p>Profit</p>
                        <span className="inline-block bg-[#a8f5b9] w-[24px] h-[6px]"></span>
                      </div>
                    </div>
                    <div className="trade-summary-chart">
                      <div className="flex flex-2">
                        <div className="flex-item">
                          <h6>udezueFx</h6>
                          <h6>chetaFunds</h6>
                          <h6>johnFunded</h6>
                        </div>
                        <div className="flex-item">
                          <div className="grid grid-cols-7 gap-1">
                            <figure className="box bg-[#ffbdbd]"></figure>
                            <figure className="box bg-[#a8f5b9]"></figure>
                            <figure className="box bg-[#a8f5b9]"></figure>
                            <figure className="box bg-[#a8f5b9]"></figure>
                            <figure className="box bg-[#a8f5b9]"></figure>
                            <figure className="box bg-[#dfdfdf]"></figure>
                            <figure className="box bg-[#ffbdbd]"></figure>
                            <figure className="box bg-[#ffbdbd]"></figure>
                            <figure className="box bg-[#ffbdbd]"></figure>
                            <figure className="box bg-[#dfdfdf]"></figure>
                            <figure className="box bg-[#a8f5b9]"></figure>
                            <figure className="box bg-[#a8f5b9]"></figure>
                            <figure className="box bg-[#a8f5b9]"></figure>
                            <figure className="box bg-[#a8f5b9]"></figure>
                            <figure className="box bg-[#ffbdbd]"></figure>
                            <figure className="box bg-[#dfdfdf]"></figure>
                            <figure className="box bg-[#ffbdbd]"></figure>
                            <figure className="box bg-[#a8f5b9]"></figure>
                            <figure className="box bg-[#a8f5b9]"></figure>
                            <figure className="box bg-[#a8f5b9]"></figure>
                            <figure className="box bg-[#a8f5b9]"></figure>
                            <p className="current-day">M</p>
                            <p className="current-day">T</p>
                            <p className="current-day">W</p>
                            <p className="current-day">T</p>
                            <p className="current-day">F</p>
                            <p className="current-day">S</p>
                            <p className="current-day">S</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div className="leaderboard-container">
          <TradingLeaderBoard />
        </div>
      </div>
      <div className="grid-item">
        <div className="section-one">
          <ProfileCard />
        </div>
        <div className="section-two">
          <Referral />
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
