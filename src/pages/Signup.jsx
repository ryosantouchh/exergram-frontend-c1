import React from "react";
import { useState, useEffect } from "react";
import "../styles/signup.css";
import "../styles/signup.css";
import Layout from "../layout/Layout";
import axios from "axios";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [datOfBirth, setDatOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const PasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const ConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Layout>
      <div className="signup-page">
        <div className="left-signup">
          <div className="quote-signup">
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

        <div className="right-signup">
          <form className="right-signup-form">
            <div className="signup-header">
              <h2>SIGN UP</h2>
              <div className="signup-container">
                <p>
                  Already have an account?{" "}
                  <a href="/login">
                    <strong>Log In</strong>
                  </a>
                </p>
              </div>
            </div>
            <div className="input-container-fullname"></div>
            <div className="input-container-fname">
              <label for="fname">First Name</label>
              <input
                type="text"
                name="fname"
                id="fname"
                placeholder="First name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
              />
              <div className="input-container-lname">
                <label for="lname">Last Name</label>
                <input
                  type="text"
                  name="lname"
                  id="name"
                  placeholder="Last name"
                  value={lastname}
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="input-container-dob-gender">
              <div className="input-container-dob">
                <label for="dob">Date of Birth </label>
                <input type="date" name="dob" id="dob" required />
              </div>
              <div className="input-container-gender">
                <label for="gender">Gender</label>
                <select name="gender" id="gender" required>
                  <option value="" disabled selected hidden>
                    Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Prefernottosay">Prefer not to say</option>
                </select>
              </div>
            </div>

            <div className="input-container-email">
              <label for="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-container-username">
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
            <div className="input-container-password">
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
            <div className="input-container-cpassword">
              <label for="cpassword">Confirm Password</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="cpassword"
                id="cpassword"
                placeholder="Must be at least 6 characters"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {showConfirmPassword ? (
                <i
                  className="fa-solid fa-eye"
                  id="show-password2"
                  onClick={ConfirmPasswordVisibility}
                ></i>
              ) : (
                <i
                  className="fa-solid fa-eye-slash"
                  id="hide-password2"
                  onClick={ConfirmPasswordVisibility}
                ></i>
              )}
            </div>
            <button className="signup-page-btn" type="submit">
              Sign Up
            </button>
            <div className="copy legal">
              <p>
                <span className="policy-terms">
                  By continuing, you agree to accept our <br />{" "}
                  <a href="#">Privacy Policy</a> &amp;{" "}
                  <a href="#">Terms of Service</a>.
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
