import React, { createContext, useState } from "react";

export const ImageContext = createContext({});

const ImageContextProvider = ({ children }) => {
  const onImageChange = (event, setPreview, setBase64, setImageFile) => {
    if (event.target.files && event.target.files[0]) {
      setPreview(URL.createObjectURL(event.target.files[0]));
      const file = event.target.files[0];
      setBase64(file, setImageFile);
    }
  };

  const setFileToBase = (file, setImageFile) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageFile(reader.result);
    };
  };

  const value = { onImageChange, setFileToBase };

  return (
    <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
  );
};

export default ImageContextProvider;
