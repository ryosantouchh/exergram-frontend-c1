import React from "react";
import Layout from "../layout/Layout";
import "../styles/EditProfile.css"
import { useState, useEffect } from "react";

const EditProfile = () => {
    const [showPassword, setShowPassword] = useState(false);
    const PasswordVisibility = () => {
        setShowPassword(!showPassword)
    };


    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const ConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword)
    };

    return (
        <Layout>
            <div className="edit-profile-main">
                <div className="edit-profile">
                    <div className="edit-profile-top">
                        <h1>Edit Profile</h1>
                        <img className="edit-profile-img-circle" src="//placehold.it/100" alt="avatar" />
                    </div>

                    <div class="edit-profile-fullname">
                        <div class="edit-profile-fname">
                            <label className="name" for="fname">First Name</label>
                            <input
                                type="text"
                                name="fname"
                                id="fname"
                                placeholder="First name"
                                required
                            />
                        </div>
                        <div class="edit-profile-lname">
                            <label className="name" for="lname">Last Name</label>
                            <input
                                type="text"
                                name="lname"
                                id="lname"
                                placeholder="Last name"
                                required
                            />
                        </div>
                    </div>

                    <div class="edit-profile-email">
                        <label for="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email address"
                            required
                        />
                    </div>
                    <div class="edit-profile-address">
                        <label for="address">Address</label>
                        <input
                            type="text"
                            name="address"
                            id="address"
                            placeholder="Address"
                            required
                        />
                    </div>
                    <div class="edit-profile-contact-number">
                        <label for="contact number">Contact Number</label>
                        <input
                            type="text"
                            name="contactNumber"
                            id="contactNumber"
                            placeholder="Contact Number"
                            required
                        />
                    </div>
                    <div className="edit-profile-city-state">
                        <div class="edit-profile-city">
                            <label for="city">City</label>
                            <select name="city" id="city" required>
                                <option value="" disabled selected hidden>city</option>
                                <option value="Chonburi">Chonburi</option>
                                <option value="Bangkok">Bangkok</option>
                                <option value="Phuket">Phuket</option>
                            </select>
                        </div>
                        <div class="edit-profile-state">
                            <label for="state">State</label>
                            <select name="state" id="state" required>
                                <option value="" disabled selected hidden>state</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="c">C</option>
                            </select>
                        </div>
                    </div>
                    <div className="edit-profile-password">
                        <label for="password">Password</label>
                        <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Must be at least 6 characters" required />
                        {showPassword ? (
                            <i className="fa-solid fa-eye" id="show-password" onClick={PasswordVisibility}></i>)
                            : (<i className="fa-solid fa-eye-slash" id="hide-password" onClick={PasswordVisibility}></i>
                            )}

                    </div>
                    <div className="edit-profile-btn-box">
                        <button id="edit-profile-btn" className="orange-btn">Change</button>
                        <button id="edit-profile-btn" className="other-btn">Cancel</button>

                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default EditProfile;