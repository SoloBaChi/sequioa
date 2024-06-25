"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import EyeIcon from "../components/icons/EyeIcon";

function SignUp(props) {
  const [showPassword, setShowPassword] = useState(false);
  const handlPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [statusObj, setStatusObj] = useState("");

  // Handle change
  const handleChange = (ev) => {
    setUser((prev) => {
      return {
        ...prev,
        [ev.target.name]: ev.target.value,
      };
    });
  };

  // Handle status || error message

  // Handle Submit
  const handleSubmit = async (ev) => {
    ev.preventDefault();

    // set Loading
    setLoading(true);

    try {
      const data = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        confirmPassword: user.confirmPassword,
      };

      // Send the Request to the backend using fetch API
      const res = await fetch(`https://sequioa-api.vercel.app/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resBody = await res.json();
      setStatusObj(resBody);
      const { status, message } = resBody;
      if (status === "error") {
        toast.error(message.toLowerCase());
      } else {
        toast.success(message.toLowerCase());
      }

      // use toastify for notification
      setUser((prev) => {
        return {
          ...prev,
          ...resBody,
        };
      });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }

    // make a post request using fetch
  };

  return (
    <section className="auth-section">
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="form-container">
        <form onSubmit={handleSubmit} className="form-wrapper">
          <div className="header-contents">
            <h2 className="text-[2rem] xl-text-[2.5rem]">Sign Up</h2>
            <p className="text-[1rem] xl:text-[1.125rem] mb-14">
              Please create account to continue to your account.
            </p>
          </div>
          <div className="form-field">
            <label htmlFor="firstname">
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={user.firstName}
                onChange={handleChange}
                placeholder="First Name"
              />
            </label>
          </div>
          <div className="form-field">
            <label htmlFor="lastname">
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={user.lastName}
                onChange={handleChange}
                placeholder="Last Name"
              />
            </label>
          </div>
          <div className="form-field">
            <fieldset>
              <legend>email</legend>
              <label htmlFor="email">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={user.email}
                  onChange={handleChange}
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
                value={user.password}
                onChange={handleChange}
                placeholder="Password"
              />
            </label>
            <div className="eye-icon-container" onClick={handlPassword}>
              <EyeIcon />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="comfirmPassword">
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                value={user.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
              />
            </label>
            <div className="eye-icon-container" onClick={handlPassword}>
              <EyeIcon />
            </div>
          </div>

          <div className="form-field">
            <div className="cta-btn-container toast-container">
              <button className="submit-btn text-[1rem] xl:text-[1.125rem]">
                {loading ? (
                  <ThreeDots
                    visible={true}
                    height="20"
                    width="70"
                    color="#fff"
                    radius="9"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                  />
                ) : (
                  "Register"
                )}
              </button>
              {/* <ToastContainer /> */}
            </div>
          </div>
          {/* <div className="form-field">
            <div className="cta-btn-container">
              <button className="google-btn text-[1rem] xl:text-[1.125rem]">
                <span>Sign Up with Google</span>
              </button>
            </div>
          </div> */}
          <div className="form-field inner-flex">
            <p>
              Already have an account{" "}
              <Link href="/login" className="text-[1rem] xl:text-[1.125rem]">
                login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
