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
              <button className="login-btn">LOGIN</button>
            </li>
            <li>
              <button className="signup-btn">SIGN UP</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavbarUser;
