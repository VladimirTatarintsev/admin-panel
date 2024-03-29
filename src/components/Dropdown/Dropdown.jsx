import cn from "classnames";
import styles from "./Dropdown.module.css";

export const Dropdown = ({ className, children, isDropdownVisible }) => {
  const dropdownClass = cn(styles.dropdownBlock, className, {
    [styles.hideDropdown]: !isDropdownVisible,
  });
  return <div className={dropdownClass}>{children}</div>;
};
