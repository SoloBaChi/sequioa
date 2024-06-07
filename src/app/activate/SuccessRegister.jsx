"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function SuccessRegister(props) {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const token = searchParams.get("token");
  const [status, setStatus] = useState("");

  useEffect(() => {
    confirmActivation();
  }, []);
  const confirmActivation = async () => {
    const url = `https://sequioa-api.vercel.app/activate?email=${email}&token=${token}`;
    const res = await fetch(url);
    const resObj = await res.json();
    setStatus(resObj);
  };

  // const token = searchParams.get("token");
  return (
    <section className="success-register">
      {status === "success" ? (
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
      ) : null}
    </section>
  );
}

export default SuccessRegister;
