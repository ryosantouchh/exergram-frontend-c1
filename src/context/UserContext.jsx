import axios from "axios";
import React, { createContext, useState } from "react";

export const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const token = `Bearer ${window.localStorage.getItem("token")}`;

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const fetchUserProfileData = async () => {
    const response = await axios.get("/profile", {
      headers: { Authorization: token },
    });
    return response;
  };

  const contextValue = {
    isLoggedIn,
    handleLogin,
    fetchUserProfileData,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
