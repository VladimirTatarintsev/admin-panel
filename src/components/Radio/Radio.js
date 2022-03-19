import styles from "./Radio.module.css";

export const Radio = () => {
  return (
    <div className={styles.radio}>
      <input
        className={styles.Input}
        type="radio"
        name="radio-button"
        id="radio"
      />
      <label className={styles.Label} for="radio"></label>
    </div>
  );
};

export const RadioChecked = () => {
  return (
    <div className={styles.radio}>
      <input
        className={styles.Input}
        type="radio"
        name="radio-button"
        id="radio-2"
      />
      <label className={styles.Label} for="radio-2"></label>
    </div>
  );
};

export const RadioBlock = () => {
  return (
    <div className={styles.radioBlock}>
      <Radio />
      <RadioChecked />
    </div>
  );
};
