import cn from "classnames";
import styles from "./TableBody.module.css";

export const TableBody = ({ className, children }) => {
  const bodyClass = cn(styles.body, className);
  return <div className={bodyClass}>{children}</div>;
};
