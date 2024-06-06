import Link from "next/link";
import React from "react";

function SuccessRegister({ email, token }) {
  return (
    <section className="success-register">
      <div className="card-container">
        <figure className="success-reg-card">
          <div className="img-container">
            <img src={`/assets/check-icon.svg`} alt="" />
          </div>
          <div className="contents">
            <h3>Register Successfully</h3>
            <p>
              Your account {email.replace(/^"(.*)"$/, "($1)")} has been
              successfully activated <br />
              Please kindly click on <Link href="/login">Login</Link> to
              continue trading
            </p>
          </div>
        </figure>
      </div>
    </section>
  );
}

export default SuccessRegister;
