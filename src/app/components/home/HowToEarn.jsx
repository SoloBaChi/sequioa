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
          <div className="list-container">
            <ul className="list-items">
              <li className="flex-container-2">
                <span className="list">1</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Pharetra amet ante
                  arcu placerat.
                </p>
              </li>
              <li className="flex-container-2">
                <span className="list">2</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Pharetra amet ante
                  arcu placerat.
                </p>
              </li>
              <li className="flex-container-2">
                <span className="list">3</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Pharetra amet ante
                  arcu placerat.
                </p>
              </li>
              <li className="flex-container-2">
                <span className="list">4</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Pharetra amet ante
                  arcu placerat.
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
