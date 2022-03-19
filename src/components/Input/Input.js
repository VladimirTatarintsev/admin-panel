import styles from "./Input.module.css";
import cn from "classnames";

export const Input = () => {
  return (
    <div className={styles.input}>
      <label className={styles.label} for="inputEmpty">
        Дата и время заказа
      </label>
      <div className={styles.area}>
        <input
          className={styles.field}
          type="text"
          id="inputEmpty"
          placeholder="Введите"
        />
      </div>
    </div>
  );
};

export const InputIncorrect = (style, className, ...props) => {
  const InputClass = cn({
    [styles.field]: true,
    [styles.fieldIncorrect]: style,
    [className]: !!className,
  });

  return (
    <div className={styles.input}>
      <label className={styles.label} for="incorrect">
        Дата и время заказа
      </label>
      <div className={styles.area}>
        <input
          type="text"
          id="incorrect"
          placeholder="Введите"
          value="06.12.2021"
          className={InputClass}
          {...props}
        />
        <button className={styles.button}>
          <svg
            className={styles.icon}
            viewBox="0 0 16 16"
            fill="none"
            stroke="#BAD8F5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5" fill="none" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export const InputDisabled = (style, className, ...props) => {
  const InputClass = cn({
    [styles.field]: true,
    [styles.fieldDisabled]: style,
    [className]: !!className,
  });
  return (
    <div className={styles.input}>
      <label className={styles.label} for="inputDisabled">
        Дата и время заказа
      </label>
      <div className={styles.area}>
        <input
          disabled
          className={InputClass}
          {...props}
          type="text"
          id="inputDisabled"
          placeholder="Введите"
          value="06.12.2021"
        />
        <div className={styles.iconArea}>
          <svg
            className={styles.icon}
            viewBox="0 0 16 16"
            stroke="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5V7C13.1046 7 14 7.89543 14 9V13C14 14.1046 13.1046 15 12 15H4C2.89543 15 2 14.1046 2 13V9C2 7.89543 2.89543 7 4 7V5ZM10 5V7H6V5C6 3.89543 6.89543 3 8 3C9.10457 3 10 3.89543 10 5Z"
              stroke="none"
            />
            <path
              d="M12 5C12 2.8 10.2 1 8 1C5.8 1 4 2.8 4 5L4 9H6V5C6 3.75 7 3 8 3C9 3 10 3.75 10 5V9H12V5Z"
              stroke="none"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
export const InputForm = () => {
  return (
    <div className={styles.form}>
      <div className={styles.formContainer}>
        <Input />
      </div>

      <div className={styles.formContainer}>
        <InputIncorrect></InputIncorrect>
      </div>

      <div className={styles.formContainer}>
        <InputDisabled />
      </div>
    </div>
  );
};
