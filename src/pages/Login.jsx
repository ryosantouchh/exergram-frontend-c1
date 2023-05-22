import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import "../styles/login.css";
import Layout from "../layout/Layout";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    const response = await authCtx.login(e);
    if (!response) {
      setError((prev) => (prev = true));
    } else {
      setError((prev) => (prev = false));
      navigate("/feed");
    }
  };

  const PasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Layout>
      <div className="login-page">
        <div className="left-login">
          <div className="quote-login">
            <h1>Explore Your Potentiality </h1>
            <h2>
              <em>" A goal without a plan is only a dream ".</em>
            </h2>
            <p>
              Over 1000 reasons to give up, <br /> but the one reason to drive
              we go.{" "}
            </p>
          </div>
        </div>

        <div className="right-login">
          <form className="right-login-form">
            <div className="login-header">
              <h2>LOG IN</h2>
            </div>
            <div className="login-input-container username">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                value={authCtx.username}
                onChange={(e) => {
                  authCtx.setUsername(e.target.value);
                  setError((prev) => (prev = false));
                }}
                required
                style={error ? { outline: "2px solid red" } : null}
              />
            </div>
            <div className="login-input-container password">
              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Must be at least 6 characters"
                value={authCtx.password}
                onChange={(e) => {
                  authCtx.setPassword(e.target.value);
                  setError((prev) => (prev = false));
                }}
                required
                style={error ? { outline: "2px solid red" } : null}
              />
              {showPassword ? (
                <i
                  className="fa-solid fa-eye"
                  id="show-password"
                  onClick={PasswordVisibility}
                ></i>
              ) : (
                <i
                  className="fa-solid fa-eye-slash"
                  id="hide-password"
                  onClick={PasswordVisibility}
                ></i>
              )}
            </div>
            {/* <div className="login-input-container-cta">
              <label className="checkbox-container">
                <input type="checkbox" id="checkbox" />
                <span className="checkmark"></span>
                Remember me
              </label>
            </div> */}
            <button
              className="login-btn"
              type="submit"
              onClick={(e) => {
                handleLogin(e);
              }}
            >
              Log In
            </button>
            {/* <div className="copy legal">
              <p>
                <span className="forgotPassword">
                  <a href="#">Forgotten password?</a>
                </span>
              </p>
            </div> */}
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
