import React from "react";

function TradeSummary(props) {
  return (
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
              <div className="grid grid-cols-7 gap-2">
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
  );
}

export default TradeSummary;
