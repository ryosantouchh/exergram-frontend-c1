import React from "react";
import Layout from "../layout/Layout";
import "../styles/EditProfile.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { ImageContext } from "../context/ImageContext";
import { AuthContext } from "../context/AuthContext";
import FormData from "form-data";
import axios from "axios";
import validator from "validator";

const EditProfile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const userCtx = useContext(UserContext);
  const imgCtx = useContext(ImageContext);
  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();

  const token = "Bearer" + " " + window.localStorage.getItem("token");

  const PasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const ConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleClickEditProfile = async () => {
    const inputError = {};

    if (validator.isEmpty(firstname)) inputError.firstname = true;
    if (validator.isEmpty(lastname)) inputError.lastname = true;
    if (validator.isEmpty(email)) inputError.email = true;
    if (!validator.isEmail(email)) inputError.email = true;
    if (!height) inputError.height = true;
    if (!weight) inputError.weight = true;

    if (!(password === confirmPassword && password && confirmPassword))
      inputError.password = true;

    if (Object.keys(inputError).length > 0) {
      // console.log(inputError);
      setError(inputError);
    } else {
      setError({});

      const profileObj = {
        firstname,
        lastname,
        email,
        contact_number: contactNumber,
        weight,
        height,
        address,
        city,
        province,
      };
      // console.log(profileObj);

      if (password === confirmPassword) {
        profileObj.passwordForConfirmEdit = password;
      }

      if (userCtx.image) {
        profileObj.image = userCtx.image;
      }

      const form = new FormData();
      for (let key in profileObj) {
        form.append(key, profileObj[key]);
      }

      // for (let pair of form.entries()) {
      //   console.log(pair[0] + ", " + pair[1]);
      // }

      setLoading((prev) => (prev = true));

      const response = await axios.patch(
        import.meta.env.VITE_APP_BACKEND_URL + "/profile",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: token,
          },
        }
      );

      authCtx.setFirstName(response.data.firstname);
      authCtx.setLastName(response.data.lastname);

      // console.log(response);
      navigate("/feed");
    }

    // if(image)
  };

  useEffect(() => {
    const fetchData = async () => {
      const userData = await userCtx.fetchUserProfileData();
      // console.log(userData);

      setFirstname(userData.data.firstname);
      setLastname(userData.data.lastname);
      setEmail(userData.data.email);

      if (userData.data.contact_number) {
        setContactNumber(userData.data.contact_number);
      }

      if (userData.data.address) {
        setAddress(userData.data.address);
      }

      if (userData.data.city) {
        setCity(userData.data.city);
      }

      if (userData.data.province_state) {
        setProvince(userData.data.province_state);
      }

      if (userData.data.image.url) {
        userCtx.setImagePreview(userData.data.image.url);
      }

      if (userData.data.weight) {
        setWeight(userData.data.weight);
      }

      if (userData.data.height) {
        setHeight(userData.data.height);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (firstname && error.firstname) setError({ ...error, firstname: false });
    if (lastname && error.lastname) setError({ ...error, lastname: false });
    if (weight && error.weight) setError({ ...error, weight: false });
    if (height && error.height) setError({ ...error, height: false });
    if (email && error.email) setError({ ...error, email: false });
    if (password && error.password) setError({ ...error, password: false });
    if (confirmPassword && error.password)
      setError({ ...error, password: false });
  }, [firstname, lastname, weight, height, email, password, confirmPassword]);

  return (
    <Layout>
      <div className="edit-profile-main">
        <div className="edit-profile">
          <div className="edit-profile-top">
            <h1>Edit Profile</h1>

            {!userCtx.imagePreview ? (
              <>
                <label htmlFor="add-profile-pic" className="add-profile-pic">
                  {/* <button>Add Profile Image</button> */}
                  <p>Add Profile Image</p>
                </label>
              </>
            ) : (
              <label htmlFor="add-profile-pic">
                <img
                  className="edit-profile-img-circle"
                  alt="avatar"
                  src={userCtx.imagePreview}
                />
              </label>
            )}
            <input
              type="file"
              id="add-profile-pic"
              name="filename"
              onChange={(event) => {
                // setImage(e.target.files[0]);
                // onImageChange(e);
                imgCtx.onImageChange(
                  event,
                  userCtx.setImagePreview,
                  imgCtx.setFileToBase,
                  userCtx.setImage
                );
              }}
              style={{ display: "none" }}
            />
            {userCtx.imagePreview ? (
              <i
                className="fa-solid fa-xmark"
                onClick={() => {
                  if (userCtx.image) {
                    userCtx.setImage("");
                    userCtx.setImagePreview(null);
                  } else {
                    userCtx.setImage("do not have image");
                    userCtx.setImagePreview(null);
                  }
                }}
              ></i>
            ) : null}
          </div>

          <div className="edit-profile-fullname">
            <div className="edit-profile-fname">
              <label className="name" htmlFor="fname">
                First Name
              </label>
              <input
                type="text"
                name="fname"
                id="fname"
                placeholder="First name"
                required
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                style={error.firstname ? { outline: "2px solid red" } : null}
              />
            </div>
            <div className="edit-profile-lname">
              <label className="name" htmlFor="lname">
                Last Name
              </label>
              <input
                type="text"
                name="lname"
                id="lname"
                placeholder="Last name"
                required
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                style={error.lastname ? { outline: "2px solid red" } : null}
              />
            </div>
          </div>

          <div className="edit-profile-email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={error.email ? { outline: "2px solid red" } : null}
            />
          </div>
          <div className="edit-profile-contact-number">
            <label htmlFor="contact number">Contact Number</label>
            <input
              type="text"
              name="contactNumber"
              id="contactNumber"
              placeholder="Contact Number"
              required
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>
          <div className="edit-profile-weight-height">
            <div className="edit-profile-weight">
              <label className="weight" htmlFor="weight">
                Weight
              </label>
              <input
                type="number"
                name="weight"
                id="weight"
                placeholder="Weight in kg."
                required
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                style={error.weight ? { outline: "2px solid red" } : null}
              />
              {/* <span>Kilograms</span> */}
            </div>
            <div className="edit-profile-height">
              <label className="height" htmlFor="height">
                Height
              </label>
              <input
                type="number"
                name="height"
                id="height"
                placeholder="Height in cm."
                required
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                style={error.height ? { outline: "2px solid red" } : null}
              />
              {/* <span>Centimeters</span> */}
            </div>
          </div>

          <div className="edit-profile-address">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Address"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="edit-profile-city-state">
            <div className="edit-profile-city">
              <label htmlFor="city">City</label>
              <input
                name="city"
                id="city"
                type="text"
                placeholder="City"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="edit-profile-state">
              <label htmlFor="state">Province / State</label>
              <input
                name="province"
                id="province"
                type="text"
                placeholder="Province"
                required
                value={province}
                onChange={(e) => setProvince(e.target.value)}
              />
            </div>
          </div>
          <div className="edit-profile-password">
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Must be at least 6 characters"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={error.password ? { outline: "2px solid red" } : null}
            />
            {showPassword ? (
              <i className="fa-solid fa-eye" onClick={PasswordVisibility}></i>
            ) : (
              <i
                className="fa-solid fa-eye-slash"
                onClick={PasswordVisibility}
              ></i>
            )}
          </div>
          <div className="edit-profile-password">
            <label htmlFor="password">Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="password"
              placeholder="Must be at least 6 characters"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={error.password ? { outline: "2px solid red" } : null}
            />
            {showConfirmPassword ? (
              <i
                className="fa-solid fa-eye"
                onClick={ConfirmPasswordVisibility}
              ></i>
            ) : (
              <i
                className="fa-solid fa-eye-slash"
                onClick={ConfirmPasswordVisibility}
              ></i>
            )}
          </div>
          {loading ? (
            <div className="edit-form-loading"></div>
          ) : (
            <div className="edit-profile-btn-box">
              <button
                className="orange-btn edit-profile-btn"
                onClick={() => handleClickEditProfile()}
              >
                Change
              </button>
              <button
                className="other-btn edit-profile-btn"
                onClick={() => navigate("/feed")}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default EditProfile;
