import React, { createContext, useState } from "react";

import axios from "axios";
import jwtDecode from "jwt-decode";
import { END_POINT_URL } from "../configs/base.url";

export const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signup = async (signupData) => {
    const response = await axios.post(
      END_POINT_URL + "/auth/register",
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
      const response = await axios.post("/auth/login", loginData);

      if (response) {
        setToken(response.data.token);
        // const decodedToken = jwtDecode(response.data.token);

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

  const contextValue = {
    isLoggedIn,
    login,
    setUsername,
    setPassword,
    setToken,
    token,
    tokenDecoder,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
