import cn from "classnames";
import styles from "./Checkbox.module.css";

export const Checkbox = ({
  className,
  checked = false,
  onChange = () => {},
  value = "",
  withIcon = true,
  darkMode,
}) => {
  const checkboxClass = cn(styles.checkboxWrapper, className, {
    [styles.darkMode]: darkMode,
  });
  return (
    <div className={checkboxClass}>
      <label className={styles.label}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={checked}
          value={value}
          onChange={onChange}
        />
        {withIcon && <span className={styles.customCheckbox} />}
      </label>
    </div>
  );
};
