import style from "./Button.module.css";

export const ButtonTable = () => (
  <div className={style.buttonTable}>
    <div className={`${style.buttonSection} ${style.buttonTable__sectionTop}`}>
      <button
        className={`${style.button} ${style.button_color_primary} ${style.button_size_large} ${style.buttonSection__button}`}
      >
        <svg
          className={style.button__icon}
          viewBox="0 0 16 16"
          fill="none"
          stroke="#FFF"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 3.5H3.5M14 3.5H12.5M5.5 3.5H10.5M5.5 3.5V2.5C5.5 1.94772 5.94772 1.5 6.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V3.5M5.5 3.5H3.5M10.5 3.5H12.5M3.5 3.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V3.5"
            fill="none"
            stroke-linecap="round"
          />
          <path d="M6.5 6V12M9.5 6V12" fill="none" stroke-linecap="round" />
        </svg>
        <span className={style.button__text}>Text here</span>
      </button>
      <button
        className={`${style.button} ${style.button_color_primary} ${style.button_size_large} ${style.buttonSection__button}`}
      >
        <span className={style.button__text}>Text here</span>
      </button>
      <button
        className={`${style.button} ${style.button_color_primary} ${style.button_size_largeIcon} ${style.buttonSection__button}`}
      >
        <svg
          className={style.button__icon}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 3.5H3.5M14 3.5H12.5M5.5 3.5H10.5M5.5 3.5V2.5C5.5 1.94772 5.94772 1.5 6.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V3.5M5.5 3.5H3.5M10.5 3.5H12.5M3.5 3.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V3.5"
            fill="none"
            stroke-linecap="round"
          />
          <path d="M6.5 6V12M9.5 6V12" fill="none" stroke-linecap="round" />
        </svg>
      </button>
    </div>

    <div className={`${style.buttonSection} ${style.buttonTable__sectionTop}`}>
      <button
        className={`${style.button} ${style.button_color_secondary} ${style.button_size_large} ${style.buttonSection__button}`}
      >
        <svg
          className={style.button__icon}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 3.5H3.5M14 3.5H12.5M5.5 3.5H10.5M5.5 3.5V2.5C5.5 1.94772 5.94772 1.5 6.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V3.5M5.5 3.5H3.5M10.5 3.5H12.5M3.5 3.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V3.5"
            fill="none"
            stroke-linecap="round"
          />
          <path d="M6.5 6V12M9.5 6V12" fill="none" stroke-linecap="round" />
        </svg>
        <span className={style.button__text}>Text here</span>
      </button>
      <button
        className={`${style.button} ${style.button_color_secondary} ${style.button_size_large} ${style.buttonSection__button}`}
      >
        <span className={style.button__text}>Text here</span>
      </button>
      <button
        className={`${style.button} ${style.button_color_secondary} ${style.button_size_largeIcon} ${style.buttonSection__button}`}
      >
        <svg
          className={style.button__icon}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 3.5H3.5M14 3.5H12.5M5.5 3.5H10.5M5.5 3.5V2.5C5.5 1.94772 5.94772 1.5 6.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V3.5M5.5 3.5H3.5M10.5 3.5H12.5M3.5 3.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V3.5"
            fill="none"
            stroke-linecap="round"
          />
          <path d="M6.5 6V12M9.5 6V12" fill="none" stroke-linecap="round" />
        </svg>
      </button>
    </div>

    <div className={`${style.buttonSection} ${style.buttonTable__sectionTop}`}>
      <button
        className={`${style.button} ${style.button_color_tertiary} ${style.button_size_large} ${style.buttonSection__button}`}
      >
        <svg
          className={style.button__icon}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 3.5H3.5M14 3.5H12.5M5.5 3.5H10.5M5.5 3.5V2.5C5.5 1.94772 5.94772 1.5 6.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V3.5M5.5 3.5H3.5M10.5 3.5H12.5M3.5 3.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V3.5"
            fill="none"
            stroke-linecap="round"
          />
          <path d="M6.5 6V12M9.5 6V12" fill="none" stroke-linecap="round" />
        </svg>
        <span className={style.button__text}>Text here</span>
      </button>
      <button
        className={`${style.button} ${style.button_color_tertiary} ${style.button_size_large} ${style.buttonSection__button}`}
      >
        <span className={style.button__text}>Text here</span>
      </button>
    </div>

    <div className={style.buttonSection}>
      <button
        className={`${style.button} ${style.button_color_primary} ${style.button_size_medium} ${style.buttonSection__button}`}
      >
        <svg
          className={style.button__icon}
          viewBox="0 0 16 16"
          fill="none"
          stroke="#FFF"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 3.5H3.5M14 3.5H12.5M5.5 3.5H10.5M5.5 3.5V2.5C5.5 1.94772 5.94772 1.5 6.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V3.5M5.5 3.5H3.5M10.5 3.5H12.5M3.5 3.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V3.5"
            fill="none"
            stroke-linecap="round"
          />
          <path d="M6.5 6V12M9.5 6V12" fill="none" stroke-linecap="round" />
        </svg>
        <span className={style.button__text}>Text here</span>
      </button>
      <button
        className={`${style.button} ${style.button_color_primary} ${style.button_size_medium} ${style.buttonSection__button}`}
      >
        <span className={style.button__text}>Text here</span>
      </button>
      <button
        className={`${style.button} ${style.button_color_primary} ${style.button_size_mediumIcon} ${style.buttonSection__button}`}
      >
        <svg
          className={style.button__icon}
          viewBox="0 0 16 16"
          fill="none"
          stroke="#FFF"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 3.5H3.5M14 3.5H12.5M5.5 3.5H10.5M5.5 3.5V2.5C5.5 1.94772 5.94772 1.5 6.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V3.5M5.5 3.5H3.5M10.5 3.5H12.5M3.5 3.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V3.5"
            fill="none"
            stroke-linecap="round"
          />
          <path d="M6.5 6V12M9.5 6V12" fill="none" stroke-linecap="round" />
        </svg>
      </button>
    </div>

    <div className={style.buttonSection}>
      <button
        className={`${style.button} ${style.button_color_secondary} ${style.button_size_medium} ${style.buttonSection__button}`}
      >
        <svg
          className={style.button__icon}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 3.5H3.5M14 3.5H12.5M5.5 3.5H10.5M5.5 3.5V2.5C5.5 1.94772 5.94772 1.5 6.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V3.5M5.5 3.5H3.5M10.5 3.5H12.5M3.5 3.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V3.5"
            fill="none"
            stroke-linecap="round"
          />
          <path d="M6.5 6V12M9.5 6V12" fill="none" stroke-linecap="round" />
        </svg>
        <span className={style.button__text}>Text here</span>
      </button>
      <button
        className={`${style.button} ${style.button_color_secondary} ${style.button_size_medium} ${style.buttonSection__button}`}
      >
        <span className={style.button__text}>Text here</span>
      </button>
      <button
        className={`${style.button} ${style.button_color_secondary} ${style.button_size_mediumIcon} ${style.buttonSection__button}`}
      >
        <svg
          className={style.button__icon}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 3.5H3.5M14 3.5H12.5M5.5 3.5H10.5M5.5 3.5V2.5C5.5 1.94772 5.94772 1.5 6.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V3.5M5.5 3.5H3.5M10.5 3.5H12.5M3.5 3.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V3.5"
            fill="none"
            stroke-linecap="round"
          />
          <path d="M6.5 6V12M9.5 6V12" fill="none" stroke-linecap="round" />
        </svg>
      </button>
    </div>
  </div>
);
