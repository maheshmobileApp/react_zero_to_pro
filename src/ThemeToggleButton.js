import React from 'react';
import { useThemeContext } from './ThemeContext';

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useThemeContext();
    return (
        <button onClick={toggleTheme}>
            Toggle {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
    );

}

export default ThemeToggleButton;