import React from "react";
import SearchIcon from "../components/icons/SearchIcon";
import TradingAccountIcon from "../components/icons/TradingAccountIcon";

import TradingLeaderBoard from "./TradingLeaderBoard";
import StarIcon from "../components/icons/StarIcon";
import WalletIcon from "../components/icons/WalletIcon";
import AccountBalanceIcon from "../components/icons/AccountBalanceIcon";
import DepositIcon from "../components/icons/DepositIcon";
import InvestIcon from "../components/icons/InvestIcon";

function MainMenu(props) {
  return (
    <div className="inner-grid-2">
      <div className="grid-item">
        <div className="form-container">
          <form>
            <div className="form-field">
              <input type="search" placeholder="Search..." />
              <div className="btn-container">
                <button>
                  <SearchIcon />
                </button>
              </div>
            </div>
          </form>
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
                <figure className="fig-card trading-account">
                  <div className="top-section flex">
                    <div className="flex-item">
                      <h5>copy trading portfolio</h5>
                    </div>
                    <div className="flex-item"></div>
                  </div>
                  <div className="bottom-section"></div>
                </figure>
              </div>
              <div className="flex-item">
                <figure className="fig-card trading-account">
                  <div className="top-section flex">
                    <div className="flex-item">
                      <h5>trade summary</h5>
                    </div>
                  </div>
                  <div className="bottom-section"></div>
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div className="trading-leaderboard">
          <TradingLeaderBoard />
        </div>
      </div>
      <div className="grid-item">{/* contents goes here */}</div>
    </div>
  );
}

export default MainMenu;
