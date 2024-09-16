import React, { createContext, useState } from 'react';

// Create the context
export const BackgroundColorContext = createContext();

// Create a provider component
export const BackgroundColorProvider = ({ children }) => {
  const [bgColor, setBgColor] = useState('white');

  const changeBackgroundColor = (color) => {
    setBgColor(color);
  };

  return (
    <BackgroundColorContext.Provider value={{ bgColor, changeBackgroundColor }}>
      {children}
    </BackgroundColorContext.Provider>
  );
};
