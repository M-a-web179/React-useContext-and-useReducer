import { useTheme } from "../context/ThemeContext";
import { LIGHT_THEME } from "../constants/theme";
import styles from "./Navbar.module.css";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.brand}>React App</h1>
      <button type="button" className={styles.button} onClick={toggleTheme}>
        {theme === LIGHT_THEME ? "Switch to dark Mode" : "Switch to light Mode"}
      </button>
    </nav>
  );
}

export default Navbar;