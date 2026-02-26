import { useNavigate, useLocation } from 'react-router-dom';
import type { ChangeEvent } from 'react';
import styles from "./Header.module.css";
import ThemeToggler from "../ThemeToggler/ThemeToggler";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getValueFromPath = (pathname: string): string => {
    switch (pathname) {
      case "/morphing": return "1";
      case "/moving": return "2";
      case "/mask": return "3";
      default: return "";
    }
  };

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.value) {
      case "1":
        navigate("/morphing");
        break;
      case "2":
        navigate("/moving");
        break;
      case "3":
        navigate("/mask");
        break;
    }
  };

  const currentValue = getValueFromPath(location.pathname);

  return (
    <header className={styles.sectionBody}>
      <div className={styles.toggleContainer}>
        <input type="radio" id="r1" name="t" value="1" className={styles.toggleRadio} checked={currentValue === "1"} onChange={handleRadioChange} />
        <label htmlFor="r1" className={styles.toggleLabel}>Morphing</label>

        <input type="radio" id="r2" name="t" value="2" className={styles.toggleRadio} checked={currentValue === "2"} onChange={handleRadioChange} />
        <label htmlFor="r2" className={styles.toggleLabel}>Moving</label>

        <input type="radio" id="r3" name="t" value="3" className={styles.toggleRadio} checked={currentValue === "3"} onChange={handleRadioChange} />
        <label htmlFor="r3" className={styles.toggleLabel}>Mask</label>

        <div className={styles.toggleOverlay} />
      </div>
      <div className={styles.themeWrapper}>
        <ThemeToggler />
      </div>
    </header>
  );
};

export default Header;