import React from "react";
import Link from "next/link";
import PlayIcon from "../icons/PlayIcon";

function MainContents(props) {
  return (
    <section className="main-section relative top-[-90px]">
      <div className="container-banner-section">
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
      </div>
      <div className="container-countup-animation">
        <div className="grid-container">
          <grid className="item"></grid>
          <grid className="item"></grid>
          <grid className="item"></grid>
        </div>
      </div>
      <div className="become-investor-container relative">
        <div className="flex-wrapper">
          <div className="flex-container-2">
            <div className="flex-item relative top-[25px] z-[1]">
              <div className="img-container">
                <img src={`/assets/become-an-investor.svg`} alt="investor" />
              </div>
            </div>
            <div className="flex-item h-[_100%] w-[_80%] absolute top-0 right-0 z-[-1]"></div>
          </div>
        </div>
      </div>
      <div className="support-container flex">
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
      </div>
    </section>
  );
}

export default MainContents;
