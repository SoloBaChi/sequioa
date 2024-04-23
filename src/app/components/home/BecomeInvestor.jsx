import React from "react";

function BecomeInvestor(props) {
  return (
    <section className="become-investor-section">
      <div className="become-investor-container relative">
        <div className="flex-wrapper">
          <div className="flex-container-2">
            <div className="flex-item relative">
              <div className="img-container">
                <img src={`/assets/become-an-investor.svg`} alt="investor" />
              </div>
            </div>
            <div className="flex-item howto-section">
              <h4 className="text-[1.675rem] xl:text-[2rem]">
                How to Become an investor
              </h4>
              <p className="text-center">
                How to earn from trading while you just sit and become wealthier
              </p>
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BecomeInvestor;
