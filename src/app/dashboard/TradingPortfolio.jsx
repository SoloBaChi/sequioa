import React from "react";
import DownArrowIcon from "../components/icons/DownArrowIcon";
import ProgressBar from "./ProgressBar";

function TradingPortfolio(props) {
  return (
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
  );
}

export default TradingPortfolio;
