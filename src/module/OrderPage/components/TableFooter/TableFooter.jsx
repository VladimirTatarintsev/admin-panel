import cn from "classnames";
import styles from "./TableFooter.module.css";

export const TableFooter = ({ className, children, ...props }) => {
  const footerClass = cn(styles.footer, className);
  return (
    <div className={footerClass} {...props}>
      {children}
    </div>
  );
};
