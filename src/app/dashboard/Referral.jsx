import React from "react";
import CopyIcon from "../components/icons/CopyIcon";
function Referral(props) {
  return (
    <div className="flex-wrapper">
      <div className="img-container">
        <img src={`/dashboard/images/refer-earn.svg`} alt="refer and earn" />
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
  );
}

export default Referral;
