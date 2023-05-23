import axios from "axios";
import React, { createContext, useState } from "react";

export const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const fetchUserProfileData = async () => {
    const token = `Bearer ${window.localStorage.getItem("token")}`;
    const response = await axios.get(
      import.meta.env.VITE_APP_BACKEND_URL + "/profile",
      {
        headers: { Authorization: token },
      }
    );
    return response;
  };

  const contextValue = {
    fetchUserProfileData,
    image,
    setImage,
    imagePreview,
    setImagePreview,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
