import cn from "classnames";
import { Label } from "components";
import { useSelector } from "react-redux";
import { getSorting } from "store/selectors/sorting";
import styles from "./TableCell.module.css";

export const TableCell = ({
  className,
  children,
  icon: Icon,
  onClick,
  name,
  darkMode,
  iconLeft: IconLeft,
  headerCellDarkMode,
}) => {
  const { key, direction } = useSelector(getSorting);
  return (
    <div
      className={cn(styles.cell, className, {
        [styles.darkMode]: darkMode,
        [styles.headerCellDarkMode]: headerCellDarkMode,
      })}
      onClick={onClick}
      data-name={name}
    >
      <Label className={styles.text}>{children}</Label>
      {Icon && (
        <div className={styles.sortBtn} data-name={name}>
          <Icon
            className={`${
              key === name && direction === "asc"
                ? [styles.iconReverse]
                : [styles.icon]
            }`}
          />
        </div>
      )}
    </div>
  );
};
