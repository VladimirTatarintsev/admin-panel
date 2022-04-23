import cn from "classnames";
import styles from "./TableHeader.module.css";

export const TableHeader = ({ className, children }) => {
  return (
    <div className={cn(styles.header, className)}>
      <div className={styles.sortWrapper}>{children}</div>
    </div>
  );
};
