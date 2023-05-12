import React from "react";
import logo from "../../assets/images/Logo1exergram.svg";
import "./Navbar.css";

function NavbarUser() {
  return (
    <div className="navbar-container">
      <nav>
        <div className="navbar-left">
          <div className="navbar-logo">
            <div className="navbar-img-box">
              <a href="/">
                <img className="logo" src={logo} alt="exergram-logo" />
              </a>
            </div>
          </div>
          <div className="navbar-menu">
            <ul>
              <li>
                <a href="/dashboard">DASHBOARD</a>
              </li>
              <li>
                <a href="/feed">FEED</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-right">
          <ul>
            <li>
              <button className="add-activity-btn">
                <a href="/createactivity">ADD ACTIVITY</a>
              </button>
            </li>
            <label htmlFor="navbar-dropdown-list">
              <li className="profile-btn">T</li>
            </label>
          </ul>
          <input
            type="checkbox"
            className="navbar-dropdown-toggle"
            id="navbar-dropdown-list"
          />
          <div className="navbar-dropdown-profile">
            <ul>
              <li>
                <a href="/editprofile">Edit Profile</a>
              </li>
              <li>
                <a href="">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarUser;
