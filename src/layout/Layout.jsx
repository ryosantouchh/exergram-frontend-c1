import React, { useContext } from "react";
import NavbarUser from "../components/Navbar/NavbarUser";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { UserContext } from "../context/UserContext";

function Layout({ children }) {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <div className="layout">
      {isLoggedIn ? <NavbarUser /> : <Navbar />}
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
