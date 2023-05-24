import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import logo from "../../assets/images/Logo1exergram.svg";
import "./Navbar.css";
import { useNavigate } from "react-router";
import { UserContext } from "../../context/UserContext";

function NavbarUser() {
  const authCtx = useContext(AuthContext);
  const userCtx = useContext(UserContext);

  const navigate = useNavigate();

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
            <a href="/createactivity">
              <li>
                <button className="add-activity-btn">ADD ACTIVITY</button>
              </li>
            </a>
            <label htmlFor="navbar-dropdown-list">
              <li className="profile-btn">
                {/* <img
                  src={userCtx.imagePreview}
                  style={{ width: "100%", borderRadius: "50%" }}
                /> */}
                <i
                  className="fa-solid fa-bars"
                  style={{ fontSize: "30px" }}
                ></i>
              </li>
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
                <a
                  href=""
                  onClick={() => {
                    authCtx.logout();
                    navigate("/");
                  }}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarUser;
