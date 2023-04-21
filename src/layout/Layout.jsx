import React from "react";
import NavbarUser from "../components/Navbar/NavbarUser";
import Navbar from "../components/Navbar/Navbar";

function Layout(props) {
  const { children } = props;

  return (
    <div>
      {/* <NavbarUser /> */}
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
