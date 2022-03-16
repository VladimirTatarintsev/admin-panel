import cn from "classnames";
import style from "./Button.module.css";

export const ButtonTable = () => {
  const buttonColorPrimary = cn({
    [style.button]: true,
    [style.buttonColorPrimary]: true,
    [style.buttonSizeLarge]: true,
    [style.buttonSectionButton]: true,
  });
  const buttonColorSecondary = cn({
    [style.button]: true,
    [style.buttonColorSecondary]: true,
    [style.buttonSizeLarge]: true,
    [style.buttonSectionButton]: true,
  });
  const buttonColorTertiary = cn({
    [style.button]: true,
    [style.buttonColorTertiary]: true,
    [style.buttonSizeLarge]: true,
    [style.buttonSectionButton]: true,
  });
  const buttonColorPrimaryMedium = cn({
    [style.button]: true,
    [style.buttonColorPrimary]: true,
    [style.buttonSizeMedium]: true,
    [style.buttonSectionButton]: true,
  });
  const buttonColorSecondaryMedium = cn({
    [style.button]: true,
    [style.buttonColorSecondary]: true,
    [style.buttonSizeMedium]: true,
    [style.buttonSectionButton]: true,
  });
  const buttonPrimaryLargeIcon = cn({
    [style.button]: true,
    [style.buttonColorPrimary]: true,
    [style.buttonSizeLargeIcon]: true,
    [style.buttonSectionButton]: true,
  });
  const buttonPrimaryMediumIcon = cn({
    [style.button]: true,
    [style.buttonColorPrimary]: true,
    [style.buttonSizeMediumIcon]: true,
    [style.buttonSectionButton]: true,
  });
  const buttonSecondaryLargeIcon = cn({
    [style.button]: true,
    [style.buttonColorSecondary]: true,
    [style.buttonSizeLargeIcon]: true,
    [style.buttonSectionButton]: true,
  });
  const buttonSecondaryMediumIcon = cn({
    [style.button]: true,
    [style.buttonColorSecondary]: true,
    [style.buttonSizeMediumIcon]: true,
    [style.buttonSectionButton]: true,
  });

  return (
    <div className={style.buttonTable}>
      <div className={style.buttonSection}>
        <button className={buttonColorPrimary}>
          <svg
            className={style.buttonIcon}
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
          <span className={style.buttonText}>Text here</span>
        </button>
        <button className={buttonColorPrimary}>
          <span className={style.buttonText}>Text here</span>
        </button>
        <button className={buttonPrimaryLargeIcon}>
          <svg
            className={style.buttonIcon}
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

      <div className={style.buttonSection}>
        <button className={buttonColorSecondary}>
          <svg
            className={style.buttonIcon}
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
          <span className={style.buttonText}>Text here</span>
        </button>
        <button className={buttonColorSecondary}>
          <span className={style.buttonText}>Text here</span>
        </button>
        <button className={buttonSecondaryLargeIcon}>
          <svg
            className={style.buttonIcon}
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

      <div className={style.buttonSection}>
        <button className={buttonColorTertiary}>
          <svg
            className={style.buttonIcon}
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
          <span className={style.buttonText}>Text here</span>
        </button>
        <button className={buttonColorTertiary}>
          <span className={style.buttonText}>Text here</span>
        </button>
      </div>

      <div className={style.buttonSection}>
        <button className={buttonColorPrimaryMedium}>
          <svg
            className={style.buttonIcon}
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
          <span className={style.buttonText}>Text here</span>
        </button>
        <button className={buttonColorPrimaryMedium}>
          <span className={style.buttonText}>Text here</span>
        </button>
        <button className={buttonPrimaryMediumIcon}>
          <svg
            className={style.buttonIcon}
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
        <button className={buttonColorSecondaryMedium}>
          <svg
            className={style.buttonIcon}
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
          <span className={style.buttonText}>Text here</span>
        </button>
        <button className={buttonColorSecondaryMedium}>
          <span className={style.buttonText}>Text here</span>
        </button>
        <button className={buttonSecondaryMediumIcon}>
          <svg
            className={style.buttonIcon}
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
};
