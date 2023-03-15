import cn from "classnames";
import styles from "./TableBody.module.css";

export const TableBody = ({ className, children, darkMode }) => {
  const bodyClass = cn(styles.body, className, { [styles.darkMode]: darkMode });
  return <div className={bodyClass}>{children}</div>;
};
