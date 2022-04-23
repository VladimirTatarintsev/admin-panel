import cn from "classnames";
import styles from "./TableRow.module.css";

export const TableRow = ({ className, children }) => {
  return <div className={cn(styles.row, className)}>{children}</div>;
};
