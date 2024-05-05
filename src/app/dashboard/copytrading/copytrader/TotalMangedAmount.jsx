import React from "react";
import AccountBalanceIcon from "@/app/components/icons/AccountBalanceIcon";
import DepositIcon from "@/app/components/icons/DepositIcon";
import InvestIcon from "@/app/components/icons/InvestIcon";
import WalletIcon from "@/app/components/icons/WalletIcon";
import InvestIconWhite from "@/app/components/icons/InvestIconWhite";

function TotalMangedAmount(props) {
  return (
    <figure className="fig-card total-balance">
      <div className="top-section flex">
        <div className="flex-item icon-container">
          <AccountBalanceIcon />
        </div>
        <div className="flex-item">
          <h5>Total Amount Managed</h5>
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
        <div className="btn-container">
          <button className="primary-btn">
            <div>
              <InvestIconWhite />
            </div>
            <span>invest</span>
          </button>
        </div>
      </div>
    </figure>
  );
}

export default TotalMangedAmount;
