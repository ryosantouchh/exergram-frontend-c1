import React, { createContext, useState } from "react";

import axios from "axios";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [image, setImagePreview] = useState("");

  const signup = async (signupData) => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_APP_BACKEND_URL + "/auth/register",
        signupData
      );
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const loginData = {
        username: username,
        password: password,
      };
      // console.log(loginData);
      // const response = await axios.post("/auth/login", loginData);
      const response = await axios.post(
        import.meta.env.VITE_APP_BACKEND_URL + "/auth/login",
        loginData
      );

      if (response) {
        window.localStorage.setItem("token", response.data.token);
        setFirstName(response.data.firstname);
        setLastName(response.data.lastname);
        return response;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    window.localStorage.removeItem("token");
  };

  const tokenDecoder = () => {
    const tokenObject = window.localStorage.getItem("token");
    const decodedToken = jwtDecode(tokenObject);
    return decodedToken;
  };

  // const readFullname = () => {
  //   if (window.localStorage.getItem("token")) {
  //     if (firstName && lastName) {
  //       setFirstName(firstName);
  //       setLastName(lastName);
  //       console.log("not decoded");
  //     } else {
  //       const decoded = tokenDecoder();
  //       setFirstName(decoded.firstname);
  //       setLastName(decoded.lastname);
  //       console.log("decoded");
  //     }
  //   }
  // };

  const contextValue = {
    isLoggedIn,
    login,
    // readFullname,
    setUsername,
    setPassword,
    setToken,
    token,
    tokenDecoder,
    signup,
    logout,
    firstName,
    lastName,
    setFirstName,
    setLastName,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
