import styles from "./Checkbox.module.css";

export const Checkbox = () => {
  <div className={styles.checkbox}>
    <div className="checkbox">
      <input className="checkbox__item" type="checkbox" id="check" />
      <label className="checkbox__label" for="check"></label>
    </div>
  </div>;
};
export const CheckboxChecked = () => {
  return (
    <div className={styles.checkbox}>
      <input
        checked
        className={styles.checkboxItem}
        type="checkbox"
        id="check-2"
      />
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
