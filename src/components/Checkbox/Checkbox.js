import styles from "./Checkbox.module.css";

export const Checkbox = () => {
  return (
    <div className={styles.checkbox}>
      <input className={styles.checkboxItem} type="checkbox" id="check" />
      <label className={styles.checkboxLabel} for="check"></label>
    </div>
  );
};
export const CheckboxChecked = () => {
  return (
    <div className={styles.checkbox}>
      <input className={styles.checkboxItem} type="checkbox" id="check-2" />
      <label className={styles.checkboxLabel} for="check-2"></label>
    </div>
  );
};
export const CheckboxBlock = () => {
  return (
    <div className={styles.checkboxBlock}>
      <Checkbox />
      <CheckboxChecked />
    </div>
  );
};
