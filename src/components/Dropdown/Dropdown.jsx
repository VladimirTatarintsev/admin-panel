import cn from "classnames";
import styles from "./Dropdown.module.css";

export const Dropdown = ({ className, children, isDropdownVisible }) => {
  const dropdownClass = cn(styles.dropdownBlock, className, {
    [styles.showDropdown]: isDropdownVisible,
  });
  return <div className={dropdownClass}>{children}</div>;
};
