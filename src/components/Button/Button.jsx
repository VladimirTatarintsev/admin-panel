import cn from "classnames";
import { capitalize } from "helpers/capitalize";
import styles from "./Button.module.css";

export const Button = ({
  color,
  size,
  icon: Icon,
  children,
  className,
  fullWidth,
}) => {
  const buttonClass = cn(styles.button, className, {
    [styles[`color${capitalize(color)}`]]: true,
    [styles[`size${capitalize(size)}`]]: true,
    [styles.iconOnly]: !children,
    [styles.buttonFullWidth]: fullWidth,
  });
  return (
    <button className={buttonClass}>
      {Icon && <Icon className={styles.icon} />}
      {children && <span className={styles.text}>{children}</span>}
    </button>
  );
};
