import React from "react";
import SearchIcon from "../components/icons/SearchIcon";
import TradingAccountIcon from "../components/icons/TradingAccountIcon";

import TradingLeaderBoard from "./TradingLeaderBoard";
import StarIcon from "../components/icons/StarIcon";
import WalletIcon from "../components/icons/WalletIcon";
import AccountBalanceIcon from "../components/icons/AccountBalanceIcon";
import DepositIcon from "../components/icons/DepositIcon";
import InvestIcon from "../components/icons/InvestIcon";
import CopyIcon from "../components/icons/CopyIcon";
import RiskIcon from "../components/icons/RiskIcon";
import AvatarIcon from "../components/icons/AvatarIcon";

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
        {/* <div className="trading-leaderboard">
          <TradingLeaderBoard />
        </div> */}
        <div className="just-checking">1</div>
      </div>
      <div className="grid-item">
        <div className="section-one">
          <figure>
            <div className="top-section">
              <div className="flex-2">
                <div className="flex-item">
                  <div className="img-container">
                    <img
                      src={`/dashboard/images/profile-img.svg`}
                      alt="user profile"
                    />
                  </div>
                </div>
                <div className="flex-item">
                  <div className="text-wrapper">
                    <div className="flex-container-2">
                      <div className="flex-item">
                        <div className="icon-container">
                          <AvatarIcon />
                        </div>
                      </div>
                      <div className="flex-item">
                        <h3>ChetaFx_001</h3>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Eu commodo lacus
                      sed enim cras eu eu vulputate. Semper massa ut ut amet.
                      Pharetra purus quis ac duis sed consectetur molestie ipsum
                      convallis. Scelerisque facilisis feugiat neque pulvinar.
                    </p>
                    <hr />
                  </div>
                </div>
              </div>
              <div className="other-resources border border-blue-800">
                <div className="">
                  <div className="flex-item">
                    <div className="icon-container"></div>
                    <h5>Human</h5>
                  </div>
                  <div className="flex-item">
                    <div className="icon-container"></div>
                    <h5>426 inestors</h5>
                  </div>
                  <div className="flex-item">
                    <div className="icon-container"></div>
                    <h5>Joined mar 2023</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="middle-section relative">
              <div className="flex-6">
                <div className="flex-item">
                  <button className="primary-btn">
                    <div className="text-wrapper">
                      <h5>Risk Score</h5>
                      <p className="text-[#E2413B]">8.0</p>
                    </div>
                    {/* <div className="icon-container">
                      <img src={`/dashboard/icons/risk-icon.svg`} alt="" />
                    </div> */}
                  </button>
                </div>
                <div className="flex-item">
                  <button className="primary-btn">
                    <div className="text-wrapper">
                      <h5>average rio</h5>
                      <p className="text-[#E9873B]">$400</p>
                    </div>
                    {/* <div className="icon-container">
                      <img src={`/dashboard/icons/average-rio.svg`} alt="" />
                    </div> */}
                  </button>
                </div>
                <div className="flex-item">
                  <button className="primary-btn">
                    <div className="text-wrapper">
                      <h5>fees</h5>
                      <p className="text-[#E9873B]">15.5%</p>
                    </div>
                    {/* <div className="icon-container">
                      <img src={`/dashboard/icons/fees-icon.svg`} alt="" />
                    </div> */}
                  </button>
                </div>
                <div className="flex-item">
                  <button className="primary-btn">
                    <div className="text-wrapper">
                      <h5>asset type</h5>
                      <p className="text-[#E9873B]">00</p>
                    </div>
                    {/* <div className="icon-container">
                      <img src={`/dashboard/icons/assets-type.svg`} alt="" />
                    </div> */}
                  </button>
                </div>
                <div className="flex-item">
                  <button className="primary-btn">
                    <div className="text-wrapper">
                      <h5>minimum deposit</h5>
                      <p className="text-[#E9873B]">$1,000</p>
                    </div>
                    {/* <div className="icon-container">
                      <img
                        src={`/dashboard/icons/min-deposit-icon.svg`}
                        alt="deposit"
                      />
                    </div> */}
                  </button>
                </div>
                <div className="flex-item">
                  <button className="primary-btn">
                    <div className="text-wrapper">
                      <h5>total assets managed</h5>
                      <p className="text-[#E9873B]">$198,00</p>
                    </div>
                    {/* <div className="icon-container">
                      <img src={`/dashboard/icons/average-rio.svg`} alt="" />
                    </div> */}
                  </button>
                </div>
              </div>
            </div>
            <div className="bottom-section"></div>
          </figure>
        </div>
        <div className="section-two">
          <div className="flex-wrapper">
            <div className="img-container">
              <img
                src={`/dashboard/images/refer-earn.svg`}
                alt="refer and earn"
              />
            </div>
            <div className="cta-btn-container">
              <button className="primary-btn">
                <div>
                  <CopyIcon />
                </div>
                <span>copy</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
