// ThemeContext.js
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(); // Create a context

export const useTheme = () => useContext(ThemeContext); // Export a hook that uses the context

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Initial state

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

