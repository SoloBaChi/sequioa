import React from "react";
import Link from "next/link";

function WhyUs(props) {
  return (
    <section className="whyus-section">
      <div className="flex-container-2">
        <div className="flex-item">
          <div className="img-container">
            <img src={`/assets/money-asset.svg`} alt="assets" />
          </div>
        </div>
        <div className="flex-item">
          <div className="text-caption">
            <h3>
              let Your Credit <br /> Alert be Your <br />
              Alarm Clock
            </h3>
            <div className="cta-btn-container">
              <Link href="/" className="cta-btn">
                get started
              </Link>
            </div>
          </div>
          {/* <div className="icon-container">
            <img src={"/assets/3d-bell.svg"} alt="3d bell" />
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
