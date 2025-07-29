import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

// Extend Window interface to include our preloaded theme
declare global {
  interface Window {
    __INITIAL_THEME__?: "light" | "dark";
  }
}

// Define theme types
export type Theme = "light" | "dark";

// Define context interface
export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  isLoading: boolean;
}

// Create context
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

// Provider props
interface ThemeProviderProps {
  children: ReactNode;
}

// Theme Provider Component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize theme state using preloaded theme
  const [theme, setThemeState] = useState<Theme>(() => {
    // First: Check if we have a preloaded theme from the script
    if (typeof window !== "undefined" && window.__INITIAL_THEME__) {
      return window.__INITIAL_THEME__;
    }

    // Second: Check current DOM state
    if (typeof window !== "undefined") {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      if (currentTheme === "dark" || currentTheme === "light") {
        return currentTheme;
      }
    }

    // Fallback: Check localStorage and system preference
    if (typeof window !== "undefined") {
      try {
        const savedTheme = localStorage.getItem("theme") as Theme;
        if (savedTheme === "light" || savedTheme === "dark") {
          return savedTheme;
        }
      } catch (error) {
        console.warn("Failed to read theme from localStorage:", error);
      }

      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        return "dark";
      }
    }

    // Final fallback
    return "light";
  });

  // Handle initial loading state
  useEffect(() => {
    // Quick loading state resolution since theme is preloaded
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  // Apply theme changes (skip initial application since it's preloaded)
  useEffect(() => {
    if (!isLoading && typeof window !== "undefined") {
      // Add loading class during transition
      document.body.classList.add("theme-loading");

      // Apply theme
      document.documentElement.setAttribute("data-theme", theme);

      // Save to localStorage
      try {
        localStorage.setItem("theme", theme);
      } catch (error) {
        console.warn("Failed to save theme to localStorage:", error);
      }

      // Update body class
      document.body.className = document.body.className.replace(
        /theme-\w+/,
        ""
      );
      document.body.classList.add(`theme-${theme}`);

      // Remove loading class after a short delay
      const timer = setTimeout(() => {
        document.body.classList.remove("theme-loading");
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [theme, isLoading]);

  // Listen for system theme changes
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      const handleSystemThemeChange = (e: MediaQueryListEvent) => {
        // Only auto-update if user hasn't manually set a preference
        const hasManualPreference = localStorage.getItem("theme");
        if (!hasManualPreference) {
          setThemeState(e.matches ? "dark" : "light");
        }
      };

      // Modern browsers
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener("change", handleSystemThemeChange);
        return () =>
          mediaQuery.removeEventListener("change", handleSystemThemeChange);
      }
      // Legacy browsers
      else if (mediaQuery.addListener) {
        mediaQuery.addListener(handleSystemThemeChange);
        return () => mediaQuery.removeListener(handleSystemThemeChange);
      }
    }
  }, []);

  // Toggle between themes
  const toggleTheme = () => {
    setThemeState((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  };

  // Set specific theme
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  // Context value
  const contextValue: ThemeContextType = {
    theme,
    toggleTheme,
    setTheme,
    isLoading,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
