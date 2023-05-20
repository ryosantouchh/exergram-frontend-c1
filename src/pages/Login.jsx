import React, { useState, useContext } from "react";
import "../styles/login.css";
import Layout from "../layout/Layout";
import { UserContext } from "../context/UserContext";
import axios from "axios";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
//   const { isLoggedIn, handleLogin } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const loginData = {
        username: username,
        password: password,
      };
      console.log(loginData);
      const response = await axios.post(
        "http://localhost:8080/user/login",
        loginData
      );
    //   console.log(response.data);
    //   if (response) {
    //     console.log("login success");
    //   } else {
    //     console.log("username or password incorrect");
    //   }
    } catch (error) {
      console.error(error);
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
              <label for="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="login-input-container password">
              <label for="password">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Must be at least 6 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
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
            <div className="login-input-container-cta">
              <label className="checkbox-container">
                <nbsp />
                <input type="checkbox" id="checkbox" />
                <span className="checkmark"></span>
                &nbsp;Remember me
              </label>
            </div>
            <button className="login-btn" type="submit" onClick={(e) => handleLogin(e)}>
              Log In
            </button>
            <div className="copy legal">
              <p>
                <span className="forgotPassword">
                  <a href="#">Forgotten password?</a>
                </span>
              </p>
            </div>
          </form>
          -
        </div>
      </div>
    </Layout>
  );
}

export default Login;
