"use client";
import Link from "next/link";
import React, { useState } from "react";
import GoogleIcon from "../components/icons/GoogleIcon";
import EyeIcon from "../components/icons/EyeIcon";

function Login(props) {
  const [showPassword, setShowPassword] = useState(false);
  const handlPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <section className="auth-section">
      <div className="form-container">
        <form className="form-wrapper">
          <div className="header-contents">
            <h2 className="text-[2rem] xl-text-[2.5rem]">Sign In</h2>
            <p className="text-[1rem] xl:text-[1.125rem] mb-14">
              Please login to continue to your account.
            </p>
          </div>
          <div className="form-field">
            <fieldset>
              <legend>email</legend>
              <label htmlFor="email">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="jonas_kahnwald@gmail.com"
                />
              </label>
            </fieldset>
          </div>
          <div className="form-field">
            <label htmlFor="password">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
              />
            </label>
            <div className="eye-icon-container" onClick={handlPassword}>
              <EyeIcon />
            </div>
          </div>
          <div className="form-field checkbox">
            <label htmlFor="checkbox">
              <input type="checkbox" name="checkbox" id="checkbox" />
              keep me logged in
            </label>
          </div>
          <div className="form-field">
            <div className="cta-btn-container">
              <button className="text-[1rem] xl:text-[1.125rem]">
                Sign in
              </button>
            </div>
          </div>
          <div className="form-field">
            <div className="cta-btn-container">
              <button className="google-btn">
                <span className="text-[1rem] xl:text-[1.125rem]">
                  Sign with Google
                </span>
              </button>
            </div>
          </div>
          <div className="form-field inner-flex">
            <p>
              Need an account{" "}
              <Link href="" className="text-[1rem] xl:text-[1.125rem]">
                create one
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
