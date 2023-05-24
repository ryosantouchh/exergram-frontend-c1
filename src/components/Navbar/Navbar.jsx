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
        </div>
        <div className="navbar-right">
          <ul>
            <li>
              <a href="/login">
                <button className="login-btn-navbar">LOGIN</button>
              </a>
            </li>
            <li>
              <a href="/signup">
                <button className="signup-btn-navbar">SIGN UP</button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavbarUser;
