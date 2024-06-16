"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import EyeIcon from "../components/icons/EyeIcon";
import { useRouter } from "next/navigation";

function SignIn(props) {
  const router = useRouter();
  const addToLocalStorage = (token) => {
    localStorage.setItem("auth-token", token);
  };

  const [showPassword, setShowPassword] = useState(false);
  const handlPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const [user, setUser] = useState({
    email: "",
    password: "",
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

  // Handle Submit
  const handleSubmit = async (ev) => {
    ev.preventDefault();

    // set Loading
    setLoading(true);

    try {
      const data = {
        email: user.email,
        password: user.password,
      };

      // Send the Request to the backend using fetch API
      const res = await fetch(`https://sequioa-api.vercel.app/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resBody = await res.json();
      setStatusObj(resBody);
      console.log(resBody);
      addToLocalStorage(resBody?.data?.accessToken);
      const { status, message } = resBody;
      if (status === "error") {
        toast.error(message.toLowerCase());
      } else {
        toast.success(message.toLowerCase());
        router.push("/dashboard");
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
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form-wrapper">
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
                  onChange={handleChange}
                  value={user.email}
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
                onChange={handleChange}
                value={user.password}
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
              <input
                checked
                type="checkbox"
                name="checkbox"
                id="checkbox"
                required
              />
              keep me logged in
            </label>
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
                  "Sign In"
                )}
              </button>
              <ToastContainer />
            </div>
          </div>
          {/* <div className="form-field">
            <div className="cta-btn-container">
              <button className="google-btn text-[1rem] xl:text-[1.125rem]">
                <span>Sign in with Google</span>
              </button>
            </div>
          </div> */}
          <div className="form-field inner-flex">
            <p>
              Need an account{" "}
              <Link href="/register" className="text-[1rem] xl:text-[1.125rem]">
                create one
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignIn;
