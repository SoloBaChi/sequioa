import React from "react";

function HeroSection(props) {
  return (
    <section className="hero-section">
      <div className="flex-container-2">
        <div className="flex-item">
          <h2>
            Where Professional <br />
            Traders Meet <br /> Investors
          </h2>
          <div className="cta-btns">
            <div className="cta-btn-container">
              <button>login</button>
              <button className="cta-btn-primary">get started</button>
            </div>
          </div>
        </div>
        {/* <div className="flex-item">
          <div className="img-container">
            <img src={`/assets/hero-trading-label.svg`} alt="" />
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default HeroSection;
