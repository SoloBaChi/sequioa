import React from "react";
import WalletIcon from "../components/icons/WalletIcon";
import AccountBalanceIcon from "../components/icons/AccountBalanceIcon";
import DepositIcon from "../components/icons/DepositIcon";
import InvestIcon from "../components/icons/InvestIcon";
function TotalBalance(props) {
  return (
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
              $20,540.
              <span className="kobo text-[1.5rem]">56</span>
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
  );
}

export default TotalBalance;
