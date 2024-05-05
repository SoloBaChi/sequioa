import React from 'react';
import TradingAccountIcon from "../components/icons/TradingAccountIcon";

function TradingAccount(props) {
    return (
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
    );
}

export default TradingAccount;