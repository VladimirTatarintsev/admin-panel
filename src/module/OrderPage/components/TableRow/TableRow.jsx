import cn from "classnames";
import styles from "./TableRow.module.css";

export const TableRow = ({ className, children, onClick }) => {
  return (
    <div className={cn(styles.row, className)} onClick={onClick}>
      {children}
    </div>
  );
};
