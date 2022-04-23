import cn from "classnames";
import styles from "./TableFooter.module.css";

export const TableFooter = ({ className, children }) => {
  const footerClass = cn(styles.footer, className);
  return <div className={footerClass}>{children}</div>;
};
