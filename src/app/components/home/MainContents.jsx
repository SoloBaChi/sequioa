import React from "react";
import Link from "next/link";
import PlayIcon from "../icons/PlayIcon";

function MainContents(props) {
  return (
    <div className="main-section">
      <section className="container-banner-section relative top-[-80px]">
        <div className="flex-container-2">
          <div className="flex-item">
            <div className="img-container relative">
              <img src={`/assets/meet-traders.svg`} alt="traders meet" />
              <span className="icon-container absolute top-[50%] left-[50%] cursor-pointer transalate-x-[-50%] translate-y-[-50%]">
                <PlayIcon />
              </span>
            </div>
          </div>
          <div className="flex-item">
            <h2 className="text-[2rem] xl:text-[2.5rem]">
              Where Professional <br />
              <span className="text-[_#E9873b]">Traders</span> meet{" "}
              <span className="text-[_#E9873b]">investors</span>{" "}
            </h2>
            <p className="text-[1rem] xl:text-[1.8rem] leading-[1.8rem]">
              Lorem ipsum dolor sit amet consectetur. Sit ultrices faucibus eget
              sagittis dictumst purus fames ultrices. Ultrices mauris venenatis
              leo leo montes mollis risus feugiat pretium.
              <br />
              Tellus euismod amet t integer scelerisque.at integer scelerisque.t
              integer scelerisque.
            </p>
            <div className="cta-btn-container">
              <Link className="cta-btn" href="/register">
                get started
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="countup-animation">
        <section>
          <div className="grid-container-3">
            <div class="grid-item">
              <h3>
                <span class="counter-timer">870</span>
                k+
              </h3>
              <p>investors</p>
            </div>
            <div class="grid-item">
              <h3>
                <span class="counter-timer">3.7</span>m +
              </h3>
              <p>invested</p>
            </div>
            <div class="grid-item">
              <h3>
                <span class="counter-timer">870</span>
                k+
              </h3>
              <p>invested</p>
            </div>
          </div>
        </section>
      </div>
      <div className="become-investor-container relative">
        <div className="flex-container-2">
          <div className="flex-item">
            <div className="img-container">
              <img src={`/assets/become-an-investor.svg`} alt="investor" />
            </div>
          </div>
          <div className="flex-item howto-section">
            <div className="inner-wrapper">
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
      <section className="support-container flex">
        <div className="flex-wrapper m-auto text-center flex items-start justify-end">
          <div className="flex-item">
            <div className="img-container">
              <img src={`/assets/our-core-values.svg`} alt="core vlaues" />
            </div>
          </div>
          <div className="flex-item relative left-[_-10%] top-[_-15px]">
            <div className="img-container ">
              <img
                src={`/assets/people-holding-hands.svg`}
                alt="people holding hands"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainContents;
