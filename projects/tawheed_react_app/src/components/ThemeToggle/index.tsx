import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../../hooks";
import styles from "./ThemeToggle.module.scss";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme, isLoading } = useTheme();

  return (
    <button
      className={`${styles.themeToggle} ${isLoading ? styles.loading : ""}`}
      onClick={toggleTheme}
      disabled={isLoading}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      <div className={styles.track}>
        <div className={styles.thumb}>
          {isLoading ? (
            // Show loading spinner during initialization
            <div className={styles.loadingSpinner} />
          ) : (
            <>
              <FiSun
                className={`${styles.icon} ${styles.sunIcon}`}
                size={14}
                aria-hidden="true"
              />
              <FiMoon
                className={`${styles.icon} ${styles.moonIcon}`}
                size={14}
                aria-hidden="true"
              />
            </>
          )}
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
