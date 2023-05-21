import React, { useContext, useEffect } from "react";
import NavbarUser from "../components/Navbar/NavbarUser";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { AuthContext } from "../context/AuthContext";

function Layout({ children }) {
  const token = window.localStorage.getItem("token");
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    if (token) {
      const decodedToken = authCtx.tokenDecoder();
      // const decodedToken = jwtDecode(token);
      // console.log(decodedToken);
      const currentTime = Date.now() / 1000;
      // console.log(currentTime);
      // console.log("not expired");
      // console.log(decodedToken);

      if (decodedToken.exp < currentTime) {
        // console.log("expired");
        authCtx.logout();
        authCtx.setToken("");
      }
    }
  }, []);

  return (
    <div className="layout">
      {token ? <NavbarUser /> : <Navbar />}
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
