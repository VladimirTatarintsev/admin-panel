import cn from "classnames";
import styles from "./Input.module.css";

import { ReactComponent as IconLocked } from "icons/locked.svg";

export const Input = ({
  id,
  type = "text",
  placeholder = "Введите",
  value,
  className,
  name = "",
  isError = false,
  disabled = false,
  iconInput: IconInput,
  iconRight: IconRight,
  onChange,
  onClick,
  text = "",
  ...props
}) => {
  const inputClass = cn(styles.field, className, {
    [styles.iconInput]: IconInput,
    [styles.textInput]: text,
    [styles.fieldIncorrect]: isError,
    [styles.fieldDisabled]: disabled,
  });
  return (
    <div className={styles.input}>
      <input
        className={inputClass}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
      {IconInput && <IconInput className={styles.searchIconInput} />}

      {value && (
        <button onClick={onClick} className={styles.button} name={name}>
          <IconRight className={styles.buttonIcon} />
        </button>
      )}

      {disabled && <IconLocked className={styles.iconLocked} />}
      {text && <span className={styles.text}>{text}</span>}
    </div>
  );
};
