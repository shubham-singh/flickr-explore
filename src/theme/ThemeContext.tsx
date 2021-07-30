import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

interface ThemeContextInterface {
    theme: 'light' | 'dark',
    setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>
}

const ThemeContext = createContext<ThemeContextInterface>({} as ThemeContextInterface);

export const ThemeContextProvider = ({children}: {children: React.ReactNode}) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);