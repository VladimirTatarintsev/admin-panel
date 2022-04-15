import cn from "classnames";
import styles from "./Dropdown.module.css";

export const Dropdown = ({ className, children }) => {
  const dropdownClass = cn(styles.dropdownBlock, className);
  return <div className={dropdownClass}>{children}</div>;
};
