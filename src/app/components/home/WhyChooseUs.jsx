import Link from "next/link";
import React from "react";

function WhyChooseUs(props) {
  return (
    <div className="why-chooseus-container">
      <h3 className="text-center font-extrabold text-[#225775] text-[2rem] xl:text-[3rem] mt-12">
        Why Chooose Us ?
      </h3>
      <figure className="inner-container inner-container-one">
        <div className="img-container">
          <img src={`/assets/why-choose-sequioa.svg`} alt="graph" />
        </div>
      </figure>
      <figure className="inner-container">
        <section>
          <div className="phone-wrapper top-[-80px] md:top-[-105px] lg:top-[-150px]">
            <div className="flex-item left-[50px] md:left-[150px[">
              <div className="img-container">
                <img src={`/assets/left-telephone.svg`} alt="left telephone" />
              </div>
            </div>
            <div className="flex-item right-[50px] md:right-[150px]">
              <div className="img-container">
                <img
                  src={`/assets/right-telephone.svg`}
                  alt="right telephone"
                />
              </div>
            </div>
          </div>
          <div className="text-[2rem] xl:text-[2.5rem] text-center text-[#fff] font-extrabold mt-[-50px] md:mt-[-140px]">
            Available on <br />
            IOS and Android
          </div>
          <div className="app-downloads">
            <div className="flex-wrapper">
              <Link className="cta-btn" href="#">
                <div className="inner-flex">
                  <span className="icon-container">
                    <img
                      src={`/assets/icons/apple-icon.svg`}
                      alt="apple icon"
                    />
                  </span>
                  <span>
                    Download <strong> SEQUIOAX App </strong>
                    in the App Store
                  </span>
                </div>
              </Link>
              <Link className="cta-btn" href="#">
                <div className="inner-flex">
                  <span className="icon-container">
                    <img
                      src={`/assets/icons/playstore-icon.svg`}
                      alt="play store icon"
                    />
                  </span>
                  <span>
                    Download <strong> SEQUIOAX App </strong>
                    in the Play Store
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </figure>
    </div>
  );
}

export default WhyChooseUs;
