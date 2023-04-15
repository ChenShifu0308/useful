import { useTheme } from 'next-themes';
import React, { useEffect } from 'react'

export default function ThemeToggle() {
    const { systemTheme, theme, setTheme } = useTheme();

    // Beacause the document maybe undefined in SSR.
    useEffect(() => {
        const rootElClasslist = document?.getElementsByTagName("html")[0].classList;
        if (theme == "dark") {
            rootElClasslist?.add("dark");
        } else {
            rootElClasslist?.remove("dark");
        }
    });

    return (
        <button
            onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")}
            className=' hover:bg-gray-200 dark:hover:bg-gray-800 px-2
            transition-all duration-100  mx-4 rounded-lg w-30 h-8 border-slate-500 border'>
            {theme == "dark" ? 'Dark' : 'Light'}
        </button>
    )
}
