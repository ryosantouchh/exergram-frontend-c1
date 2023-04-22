import React from "react";
import Layout from "../layout/Layout";
import "../styles/EditProfile.css"

const EditProfile = () => {
    return (
        <Layout>
            <div className="edit-profile-main">
                <div className="edit-profile">
                    <h3>Edit Profile</h3>
                    <img className="edit-profile-img-circle" src="//placehold.it/100" alt="avatar" />

                    <div className=".edit-profile-upload-file">
                        <label>
                            Choose File..
                            <input type="file" size="60" />
                        </label>
                    </div>

                    <div className="edit-profile-form-group">
                        <div className="edit-profile-name">
                            <label>Name:</label>
                            <input type="text" name="first_name" placeholder="Firstname" />
                            <input type="text" name="last_name" placeholder="Lastname" />
                        </div>

                        <div className="edit-profile-birth-gen-box">
                            <label>Birth Day:</label>
                            <input type="date" name="birthday" />

                            <label>Gender:</label>
                            <select name="edit-profile-gender-box">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>

                        <div className="edit-profile-weight-height-box">
                            <label>Weight:</label>
                            <input type="number" name="weight" placeholder="Kg" />

                            <label>Heigh:</label>
                            <input type="number" name="height" placeholder="Cm" />
                        </div>

                        <div className="edit-profile-location-box">
                            <label>Location:</label>
                            <input type="text" name="locaiton" />
                        </div>

                        <div className="edit-profile-bio-box">
                            <label>Profile Bio:</label>
                            <textarea rows="5"></textarea>
                        </div>
                    </div>

                    <div className="edit-profile-btn-box">
                        <button className="other-btn">Cancel</button>
                        <button className="orange-btn">Change</button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default EditProfile;