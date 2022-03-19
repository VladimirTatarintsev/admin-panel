import cn from "classnames";
import styles from "./Dropdown.module.css";
import { Checkbox, CheckboxChecked } from "../Checkbox/Checkbox";
import { Radio } from "../Radio/Radio";

export const DropdownSection = () => {
  const DropdownCheckbox = cn({
    [Checkbox]: true,
    [styles.dropdownBlockCheckbox]: true,
  });
  const DropdownCheckboxChecked = cn({
    [CheckboxChecked]: true,
    [styles.dropdownBlockCheckbox]: true,
  });
  const DropdownRadio = cn({
    [Radio]: true,
    [styles.dropdownBlockRadio]: true,
  });
  return (
    <>
      <div className={styles.dropdownSection}>
        <div className={styles.dropdownBlock}>
          <div className={DropdownCheckbox}>
            <input className={styles.checkboxItem} type="checkbox" id="new" />
            <label className={styles.checkboxLabel} for="new">
              Новый
            </label>
          </div>
          <div className={DropdownCheckbox}>
            <input className={styles.checkboxItem} type="checkbox" id="calc" />
            <label className={styles.checkboxLabel} for="calc">
              Расчет
            </label>
          </div>
          <div className={DropdownCheckboxChecked}>
            <input
              className={styles.checkboxItem}
              checked
              type="checkbox"
              id="confirmed"
            />
            <label className={styles.checkboxLabel} for="confirmed">
              Подтвержден
            </label>
          </div>
          <div className={DropdownCheckbox}>
            <input
              className={styles.checkboxItem}
              type="checkbox"
              id="postponed"
            />
            <label className={styles.checkboxLabel} for="postponed">
              Отложен
            </label>
          </div>
          <div className={DropdownCheckbox}>
            <input
              className={styles.checkboxItem}
              type="checkbox"
              id="completed"
            />
            <label className={styles.checkboxLabel} for="completed">
              Выполнен
            </label>
          </div>
          <div className={DropdownCheckbox}>
            <input
              className={styles.checkboxItem}
              type="checkbox"
              id="canceled"
            />
            <label className={styles.checkboxLabel} for="canceled">
              Отменен
            </label>
          </div>
        </div>
        <div className={styles.dropdownBlock}>
          <div className={DropdownRadio}>
            <input
              className={styles.radioItemNone}
              type="radio"
              name="radioBtn"
              id="radioNew"
            />
            <label className={styles.radioLabelNone} for="radioNew">
              Новый
            </label>
          </div>
          <div className={DropdownRadio}>
            <input
              className={styles.radioItemNone}
              type="radio"
              name="radioBtn"
              id="radioCalc"
            />
            <label className={styles.radioLabelNone} for="radioCalc">
              Рассчет
            </label>
          </div>
          <div className={DropdownRadio}>
            <input
              className={styles.radioItemNone}
              type="radio"
              name="radioBtn"
              id="radioConfirmed"
            />
            <label className={styles.radioLabelNone} for="radioConfirmed">
              Подтвержден
            </label>
          </div>
          <div className={DropdownRadio}>
            <input
              className={styles.radioItemNone}
              type="radio"
              name="radioBtn"
              id="radioPostponed"
            />
            <label className={styles.radioLabelNone} for="radioPostponed">
              Отложен
            </label>
          </div>
          <div className={DropdownRadio}>
            <input
              className={styles.radioItemNone}
              type="radio"
              name="radioBtn"
              id="radioCompleted"
            />
            <label className={styles.radioLabelNone} for="radioCompleted">
              Выполнен
            </label>
          </div>
          <div className={DropdownRadio}>
            <input
              className={styles.radioItemNone}
              type="radio"
              name="radioBtn"
              id="radioCanceled"
            />
            <label className={styles.radioLabelNone} for="radioCanceled">
              Отменен
            </label>
          </div>
        </div>
      </div>
      <div className={styles.dropdownSection}>
        <div className={styles.dropdownBlock}>
          <div className={styles.input}>
            <label className={styles.inputLabel} for="inputEmpty">
              Номер страницы
            </label>
            <div className={styles.inputArea}>
              <input
                className={styles.inputField}
                type="text"
                id="inputEmpty"
                placeholder="Введите номер"
              />
            </div>
          </div>
        </div>
        <div className={styles.dropdownBlock}>
          <label className="buttonLabel">Удалить n записей?</label>
          <button className="button buttonColorSecondary buttonSizeMedium buttonFullWidth dropdownBlockButton">
            <span className="buttonText">Удалить</span>
          </button>
          <button className="button buttonColorPrimary buttonSizeMedium buttonFullWidth dropdownBlockButton">
            <span className="buttonText">Отмена</span>
          </button>
        </div>
        <div className={styles.dropdownBlock}>
          <label className="buttonLabel">Выберите тему</label>
          <button className="button buttonColorSecondary buttonSizeMedium buttonFullWidth dropdownBlockButton">
            <svg
              className="buttonIcon"
              viewBox="0 0 16 16"
              stroke="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8" r="4" stroke="none" />
              <path d="M15 9L16 8L15 7H13V9H15Z" stroke="none" />
              <path d="M1 9L0 8L1 7H3V9H1Z" stroke="none" />
              <path d="M7 15L8 16L9 15V13H7V15Z" stroke="none" />
              <path d="M7 1L8 0L9 1V3H7V1Z" stroke="none" />
              <path
                d="M12.5 14H14L14 12.5L12.5 11L11 12.5L12.5 14Z"
                stroke="none"
              />
              <path d="M2 3.5L2 2L3.5 2L5 3.5L3.5 5L2 3.5Z" stroke="none" />
              <path d="M3.5 14H2L2 12.5L3.5 11L5 12.5L3.5 14Z" stroke="none" />
              <path d="M14 3.5V2L12.5 2L11 3.5L12.5 5L14 3.5Z" stroke="none" />
            </svg>
            <span className="buttonText">Светлая</span>
          </button>
          <button className="button buttonColorPrimary buttonSizeMedium buttonFullWidth dropdownBlockButton">
            <svg
              className="buttonIcon"
              viewBox="0 0 16 16"
              stroke="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 15C12.0269 15 15.5 11.5021 15 7.5C14.7688 10.0468 12.6071 12 10 12C7.23858 12 5 9.76142 5 7C5 4.23858 7.23858 2 10 2C11 2 12 2.5 12 2.5C11 1.5 10 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                stroke="none"
              />
            </svg>
            <span className="buttonText">Темная</span>
          </button>
        </div>
      </div>
    </>
  );
};
