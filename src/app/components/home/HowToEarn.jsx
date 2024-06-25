import React from "react";

function HowToEarn(props) {
  return (
    <section className="howto-section">
      <div className="flex-container-2">
        <div className="flex-item">
          <div className="img-container">
            <img src={`/assets/digital-hands.svg`} alt="digital hands" />
          </div>
        </div>
        <div className="flex-item">
          <h4 className="text-[2rem] xl:text-[2.5rem]">
            How to Earn as a Trader
          </h4>
          <p className="text-[#fff]">
            As a trader you can earn via trading with our affliated brokerage
            and also earn from dividends of profit for those that copy your
            trade. You can do so in 4 easy steps:
          </p>
          <div className="list-container">
            <ul className="list-items">
              <li className="flex-container-2">
                <span className="list">1</span>
                <p>Create and verify your account.</p>
              </li>
              <li className="flex-container-2">
                <span className="list">2</span>
                <p>
                  Upload your trade strategy or create a trading account with
                  our broker to establish your strategy our time.
                </p>
              </li>
              <li className="flex-container-2">
                <span className="list">3</span>
                <p>
                  With our risk management algorithm, make profitable trades and
                  earn.
                </p>
              </li>
              <li className="flex-container-2">
                <span className="list">4</span>
                <p>
                  You can also earn dividends from those that copy your traders.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowToEarn;
