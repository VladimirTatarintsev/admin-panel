import styles from "../CheckboxBlock/CheckboxBlock.module.css";

export const CheckboxBlock = ({ children }) => {
  return <div className={styles.checkboxBlock}>{children}</div>;
};
