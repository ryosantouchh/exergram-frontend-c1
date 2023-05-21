import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import "../styles/signup.css";
import "../styles/signup.css";
import Layout from "../layout/Layout";
import axios from "axios";
import FormData from "form-data";
import validator from "validator";
import { END_POINT_URL } from "../configs/base.url";
import { AuthContext } from "../context/AuthContext";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validate, setValidate] = useState("");

  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const PasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const ConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const checkBirthDate = (inputError) => {
    const currentTime = Date.now();
    const birth_date = new Date(dateOfBirth).getTime();
    if (birth_date > currentTime)
      inputError.dateOfBirth = "Incorrect birthdate";
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const inputError = {};

      // validate if empty input
      if (validator.isEmpty(firstname))
        inputError.firstname = "Firstname is required";
      if (validator.isEmpty(lastname))
        inputError.lastname = "Lastname is required";
      if (validator.isEmpty(dateOfBirth))
        inputError.dateOfBirth = "Date of Birth is required";
      if (validator.isEmpty(gender)) inputError.gender = "Gender is required";
      if (validator.isEmpty(email)) inputError.email = "Email is required";
      if (validator.isEmpty(username))
        inputError.username = "Username is required";
      if (validator.isEmpty(password))
        inputError.password = "Password is required";
      if (validator.isEmpty(confirmPassword))
        inputError.confirmPassword = "Confirm password is required";

      // validate format input
      if (!validator.isEmail(email))
        inputError.email = "Incorrect email format";
      if (!validator.isLength(password, { min: 6, max: 24 }))
        inputError.password =
          "Password must be at least 6 or maximum at 24 characters";

      // check birthdate
      checkBirthDate(inputError);

      // check confirmation password
      if (password !== confirmPassword)
        inputError.confirmPassword = "Confirmation password is not match";

      if (Object.keys(inputError).length > 0) {
        setValidate(inputError);
        console.log(inputError);
      } else {
        setValidate({});

        const userData = {
          firstname: firstname,
          lastname: lastname,
          birthday: new Date(dateOfBirth),
          gender: gender,
          email: email,
          username: username,
          password: password,
        };
        console.log(userData);

        // end point config
        // const END_POINT = BASE_URL || "http://localhost:8080";

        // const response = await axios.post(
        //   END_POINT_URL + "/auth/register",
        //   userData
        // {
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
        // }
        // );
        // console.log(response.data);
        await authCtx.signup(userData);
        navigate("/login");
      }

      //   const userForm = new FormData();
      //   for(let key in userData) {
      //     userForm.append(key, userData[key]);
      //   }
      //   console.log(userForm);
      //   htmlFor (let pair of userForm.entries()) {
      //       console.log(pair[0] + ", " + pair[1]);
      //     }
    } catch (err) {
      console.error(err);
    }
  };

  const styleOutlineError = (validate) => {
    const result = validate ? { outline: "2px solid red" } : null;
    return result;
  };

  useEffect(() => {
    if (firstname && validate.firstname)
      setValidate({ ...validate, firstname: false });
    if (lastname && validate.lastname)
      setValidate({ ...validate, lastname: false });
    if (dateOfBirth && validate.dateOfBirth)
      setValidate({ ...validate, dateOfBirth: false });
    if (gender && validate.gender) setValidate({ ...validate, gender: false });
    if (email && validate.email) setValidate({ ...validate, email: false });
    if (username && validate.username)
      setValidate({ ...validate, username: false });
    if (password && validate.password)
      setValidate({ ...validate, password: false });
    if (confirmPassword && validate.confirmPassword)
      setValidate({ ...validate, confirmPassword: false });
  }, [
    firstname,
    lastname,
    dateOfBirth,
    username,
    gender,
    email,
    password,
    confirmPassword,
  ]);

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
          <div className="right-signup-form">
            <div className="signup-header">
              <h2>SIGN UP</h2>
              <div className="signup-container">
                <p>
                  Already have an account ? <a href="/login">Log In</a>
                </p>
              </div>
            </div>
            <form className="sign-up-input-form">
              <div className="input-container-fname">
                <label htmlFor="fname">First Name </label>

                <input
                  type="text"
                  name="fname"
                  id="fname"
                  placeholder="First name"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                  style={
                    validate.firstname ? { outline: "2px solid red" } : null
                  }
                />
                {/* {validate.firstname ? (
                <span className="sign-up-form-error-message">
                {validate.firstname}
                </span>
              ) : null} */}
              </div>
              <div className="input-container-lname">
                <label htmlFor="lname">Last Name</label>
                <input
                  type="text"
                  name="lname"
                  id="name"
                  placeholder="Last name"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  required
                  style={
                    validate.lastname ? { outline: "2px solid red" } : null
                  }
                />
              </div>
              <div className="input-container-dob-gender">
                <div className="input-container-dob">
                  <label htmlFor="dob">Date of Birth </label>
                  <input
                    type="date"
                    name="dob"
                    id="dob"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    required
                    style={
                      validate.dateOfBirth ? { outline: "2px solid red" } : null
                    }
                  />
                </div>
                <div className="input-container-gender">
                  <label htmlFor="gender">Gender</label>
                  <select
                    name="gender"
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                    style={styleOutlineError(validate.gender)}
                  >
                    <option defaultValue="" hidden>
                      Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="prefer not to say">Prefer not to say</option>
                  </select>
                </div>
              </div>

              <div className="input-container-email">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={styleOutlineError(validate.email)}
                />
              </div>
              <div className="input-container-username">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  style={styleOutlineError(validate.username)}
                />
              </div>
              <div className="input-container-password">
                <label htmlFor="password">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Must be at least 6 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={styleOutlineError(validate.password)}
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
                <label htmlFor="cpassword">Confirm Password</label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="cpassword"
                  id="cpassword"
                  placeholder="Must be at least 6 characters"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  style={styleOutlineError(validate.confirmPassword)}
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
            </form>
            <button
              className="signup-page-btn"
              type="submit"
              onClick={(e) => handleSignUp(e)}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
