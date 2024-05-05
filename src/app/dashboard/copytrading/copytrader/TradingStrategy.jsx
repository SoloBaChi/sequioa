import React from "react";
import DoughnutChart from "./DougnutChart";
// Here sec-1 and sec-2 refers to section-1 and section-2

function TradingStrategy(props) {
  return (
    <div className="trading-strategy">
      <h4>trading strategy</h4>
      <div className="sec-1 flex-wrapper">
        <div className="flex-container-2">
          <div className="flex-item doughnut-chart-container">
            <DoughnutChart />
          </div>
          <div className="flex-item">
            <div className="trade-info">
              <h3>total trades</h3>
              <p className="text-[#263238A3]">6700</p>
            </div>
            <div className="trade-info">
              <h3>profitable trades</h3>
              <p className="text-[#1dc0c2]">4200</p>
            </div>
            <div className="trade-info">
              <h3>lost trades</h3>
              <p className="text-[#ffa1a1]">1500</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-2 mt-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="grid-items box">
            <h5>Max.Drawdown</h5>
          </div>
          <div className="grid-items box">
            <h5>Max.Profit</h5>
          </div>
          <div className="grid-items box">
            <h5>Max.Drawdown Date</h5>
          </div>
          <div className="grid-items box">
            <h5>Max.Profit Date</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TradingStrategy;
