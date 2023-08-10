'use client'

import ThemeContext from "./theme";
import { useState, useEffect } from "react";

export function ThemeContextProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');

        if (localTheme) {
            setTheme(localTheme as 'light' | 'dark');
        } else {
            setTheme('dark');
        }
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        window.localStorage.setItem('theme', theme);
        setMounted(true);
    }, [theme]);

    if (!mounted) return <div />;
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
}