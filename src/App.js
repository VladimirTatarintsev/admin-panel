import { OrderPage } from "module/OrderPage/OrderPage";
import { useSelector } from "react-redux";
import { toggleThemeSelector } from "store/selectors/toggleTheme";
import styles from "./App.module.css";

export const App = () => {
  const { isDarkModeOn } = useSelector(toggleThemeSelector);
  return (
    <div
      className={`${[styles.appContainer]} ${
        isDarkModeOn ? [styles.darkTheme] : ""
      }`}
    >
      <div className={styles.app}>
        <OrderPage />
      </div>
    </div>
  );
};
