import React from "react";
import Link from "next/link";

function CopyTrading(props) {
  return (
    <section className="copy-trading-section">
      <div className="flex-container">
        <h2>
          <strong>COPY TRADING</strong>
          <br />
          <strong>at its</strong>
          <br />
          <strong>FINEST</strong>
        </h2>
        <h3>
          <strong>Humans Robots Algorithms </strong> <br />
          from around the world are here, <br />{" "}
          <strong>Why aren’t You?</strong>
        </h3>
        <div className="cta-btn-container">
          <Link className="cta-btn" href="/signup">
            get started
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CopyTrading;
