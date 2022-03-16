import style from "./Radio.module.css";

export const Radio = () => (
  <div className={style.radioBlock}>
    <div className={style.radio}>
      <input
        className={style.radio__item}
        type="radio"
        name="radio-button"
        id="radio"
      />
      <label className={style.radio__label} for="radio"></label>
    </div>
    <div className={style.radio}>
      <input
        className={style.radio__item}
        checked
        type="radio"
        name="radio-button"
        id="radio-2"
      />
      <label className={style.radio__label} for="radio-2"></label>
    </div>
  </div>
);
