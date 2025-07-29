import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import type { ThemeContextType } from "../context/ThemeContext";

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error(
      "useTheme must be used within a ThemeProvider. " +
        "Make sure your component is wrapped with ThemeProvider."
    );
  }

  return context;
};
