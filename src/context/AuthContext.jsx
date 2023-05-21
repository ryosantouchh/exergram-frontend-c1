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

  const login = async (e) => {
    e.preventDefault();
    try {
      const loginData = {
        username: username,
        password: password,
      };
      console.log(loginData);
      const response = await axios.post(
        END_POINT_URL + "/auth/login",
        loginData
      );

      if (response) {
        setToken(response.data.token);
        const decodedToken = jwtDecode(response.data.token);

        window.localStorage.setItem("token", response.data.token);
      }

      return response;
    } catch (error) {
      console.error(error);
    }
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
    token,
    tokenDecoder,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
