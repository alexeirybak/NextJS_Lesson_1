"use client";

import { createContext, useContext } from "react";

type Theme = {
  color: {
    primary: string;
    secondary: string;
  };
};

const defaultTheme: Theme = {
  color: {
    primary: "#0070f3",
    secondary: "#005500",
  },
};

const ThemeContext = createContext<Theme>(defaultTheme);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
}


export const useTheme = () => useContext(ThemeContext)