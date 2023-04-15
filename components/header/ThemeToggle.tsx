import { useTheme } from 'next-themes';
import React, { useEffect } from 'react'

export default function ThemeToggle() {
    const { systemTheme, theme, setTheme } = useTheme();

    const currentTheme = theme === 'system' ? systemTheme : theme;

    // Beacause the document maybe undefined in SSR.
    useEffect(() => {
        const rootElClasslist = document?.getElementsByTagName("html")[0].classList;
        if (theme == "dark") {
            rootElClasslist?.remove("dark");
        } else {
            rootElClasslist?.add("dark");
        }
    });

    return (
        <button
            onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")}
            className=' hover:bg-gray-600 dark:hover:bg-gray-300 
            transition-all duration-100  mx-4 rounded-lg w-30 h-8 border-slate-800 border'>
            {theme == "dark" ? <span>Dark</span> : <span>Light</span>}
        </button>
    )
}
