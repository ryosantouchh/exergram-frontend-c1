import React from "react";
import Layout from "../layout/Layout";
import "../styles/EditProfile.css";
import { useState, useEffect } from "react";

const EditProfile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [image, setImage] = useState("");

  const PasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const ConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleClickEditProfile = () => {
    const profileObj = {};

    if (firstname) profileObj.firstname = firstname;
    if (lastname) profileObj.lastname = lastname;
    if (email) profileObj.email = email;
    if (contactNumber) profileObj.contact_number = contactNumber;
  };

  return (
    <Layout>
      <div className="edit-profile-main">
        <div className="edit-profile">
          <div className="edit-profile-top">
            <h1>Edit Profile</h1>
            {!image ? (
              <button>Add Profile Image</button>
            ) : (
              <img
                className="edit-profile-img-circle"
                src="//placehold.it/100"
                alt="avatar"
              />
            )}
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
          <div className="edit-profile-btn-box">
            <button className="orange-btn edit-profile-btn">Change</button>
            <button className="other-btn edit-profile-btn">Cancel</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EditProfile;
