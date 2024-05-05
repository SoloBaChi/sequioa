import React from "react";
import RiskIcon from "../components/icons/RiskIcon";
import StarIcon from "../components/icons/StarIcon";
function Account(props) {
  return (
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
  );
}

export default Account;
