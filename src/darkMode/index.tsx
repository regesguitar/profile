import { useState } from "react";
import './styles.css';
export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return { darkMode, toggleDarkMode };
};
