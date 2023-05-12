import React from "react";
import NavbarUser from "../components/Navbar/NavbarUser";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Layout(props) {
  const { children } = props;

  return (

    <div className="layout">
      <NavbarUser />
      {/* <Navbar /> */}
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
