import React, { createContext, useState } from "react";

export const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const contextValue = {
    isLoggedIn,
    handleLogin,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
