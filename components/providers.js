"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AppContext = createContext(null);

export function AppProviders({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "light";
    }
    return window.localStorage.getItem("aland_theme") || "light";
  });
  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") {
      return "ku";
    }
    return window.localStorage.getItem("aland_language") || "ku";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("aland_theme", theme);
  }, [theme]);

  useEffect(() => {
    window.localStorage.setItem("aland_language", language);
  }, [language]);

  const value = useMemo(
    () => ({
      theme,
      language,
      toggleTheme: () => setTheme((prev) => (prev === "dark" ? "light" : "dark")),
      setLanguage,
    }),
    [language, theme]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used inside AppProviders");
  }

  return context;
}
