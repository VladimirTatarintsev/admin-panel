import cn from "classnames";
import { Label } from "components";
import styles from "./TableCell.module.css";

export const TableCell = ({ className, children, icon: Icon }) => {
  return (
    <div className={cn(styles.cell, className)}>
      <Label className={styles.text}>{children}</Label>
      {Icon && <Icon className={styles.icon} />}
    </div>
  );
};
