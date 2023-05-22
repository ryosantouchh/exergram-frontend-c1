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

  const signup = async (signupData) => {
    const response = await axios.post(
      import.meta.env.VITE_APP_BACKEND_URL + "/auth/register",
      signupData
    );
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

  const readFullname = () => {
    if (window.localStorage.getItem("token")) {
      const decoded = tokenDecoder();
      setFirstName(decoded.firstname);
      setLastName(decoded.lastname);
    }
  };

  const contextValue = {
    isLoggedIn,
    login,
    readFullname,
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
