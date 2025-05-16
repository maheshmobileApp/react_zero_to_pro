// Dart / light

import React, { createContext, useContext, useState } from 'react';// step 1 : imporrt createContext and useContext
const ThemeContext = createContext();// step 2 : create context

//// step 3 : create a custom hook
export const useThemeContext = () => useContext(ThemeContext);
const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
  return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
  );

}

export default ThemeProvider;