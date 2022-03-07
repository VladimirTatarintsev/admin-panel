import "./css/input.css";
import "./css/search-bar.css";
import "./css/checkbox-radio.css";
import "./css/button.css";
import "./css/dropdown.css";
import "./css/common.css";
import "./css/reset.css";

function App() {
  return (
    <div className="Components">
      <div className="wrapper wrapper__input">
        <div className="input-form">
          <div className="input-form__container">
            <div className="input">
              <label className="input__label" for="input-empty">
                Дата и время заказа
              </label>
              <div className="input__area">
                <input
                  className="input__field"
                  type="text"
                  id="input-empty"
                  placeholder="Введите"
                />
              </div>
            </div>
          </div>
          <div className="input-form__container">
            <div className="input">
              <label className="input__label" for="input-incorrect">
                Дата и время заказа
              </label>
              <div className="input__area">
                <input
                  className="input__field input__field_incorrect"
                  type="text"
                  id="input-incorrect"
                  placeholder="Введите"
                  value="06.12.2021"
                />
                <button className="input__button">
                  <svg
                    className="input__icon"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="#BAD8F5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5"
                      fill="none"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="input-form__container">
            <div className="input">
              <label className="input__label" for="input-disabled">
                Дата и время заказа
              </label>
              <div className="input__area">
                <input
                  disabled
                  className="input__field input__field_disabled"
                  type="text"
                  id="input-disabled"
                  placeholder="Введите"
                  value="06.12.2021"
                />
                <div className="input__icon-area">
                  <svg
                    className="input__icon"
                    viewBox="0 0 16 16"
                    fill="#000"
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
          </div>
        </div>
      </div>

      <div className="wrapper wrapper__search-bar">
        <div className="search-bar">
          <div className="search-bar__item-group">
            <div className="serch-bar__item-area">
              <input
                className="search-bar__input"
                type="text"
                placeholder="Номер заказа или ФИО"
              />
              <svg
                className="search-bar__icon"
                viewBox="0 0 16 16"
                fill="none"
                stroke="#459DF5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0355 10.0355C11.9882 8.08291 11.9882 4.91709 10.0355 2.96447C8.08291 1.01184 4.91709 1.01184 2.96447 2.96447C1.01184 4.91709 1.01184 8.08291 2.96447 10.0355C4.91709 11.9882 8.08291 11.9882 10.0355 10.0355ZM10.0355 10.0355L14 14M14 14L14.5 13.5L11.5 10.5M14 14L13.5 14.5L10.5 11.5"
                  fill="none"
                />
              </svg>
            </div>

            <div className="serch-bar__item-area">
              <input
                className="search-bar__input"
                type="text"
                placeholder="Номер заказа или ФИО"
                value="50744"
              />
              <svg
                className="search-bar__icon"
                viewBox="0 0 16 16"
                fill="none"
                stroke="#459DF5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0355 10.0355C11.9882 8.08291 11.9882 4.91709 10.0355 2.96447C8.08291 1.01184 4.91709 1.01184 2.96447 2.96447C1.01184 4.91709 1.01184 8.08291 2.96447 10.0355C4.91709 11.9882 8.08291 11.9882 10.0355 10.0355ZM10.0355 10.0355L14 14M14 14L14.5 13.5L11.5 10.5M14 14L13.5 14.5L10.5 11.5"
                  fill="none"
                />
              </svg>
              <button className="search-bar__button">
                <svg
                  className="search-bar__button-icon"
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
        </div>
      </div>

      <div className="wrapper wrapper__checkbox-radio">
        <div className="checkbox-block">
          <div className="checkbox">
            <input className="checkbox__item" type="checkbox" id="check-1" />
            <label className="checkbox__label" for="check-1"></label>
          </div>
          <div className="checkbox">
            <input
              checked
              className="checkbox__item"
              type="checkbox"
              id="check-2"
            />
            <label className="checkbox__label" for="check-2"></label>
          </div>
        </div>
        <div className="radio-block">
          <div className="radio">
            <input
              className="radio__item"
              type="radio"
              name="radio-button"
              id="radio-1"
            />
            <label className="radio__label" for="radio-1"></label>
          </div>
          <div className="radio">
            <input
              className="radio__item"
              checked
              type="radio"
              name="radio-button"
              id="radio-2"
            />
            <label className="radio__label" for="radio-2"></label>
          </div>
        </div>
      </div>

      <div className="wrapper wrapper__button">
        <div className="button-table">
          <div className="button-section button-section_top">
            <button className="button button_color_primary button_size_large button-section__button">
              <svg
                className="button__icon"
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
                <path
                  d="M6.5 6V12M9.5 6V12"
                  fill="none"
                  stroke-linecap="round"
                />
              </svg>
              <span className="button__text">Text here</span>
            </button>
            <button className="button button_color_primary button_size_large button-section__button">
              <span className="button__text">Text here</span>
            </button>
            <button className="button button_color_primary button_size_large-icon button-section__button">
              <svg
                className="button__icon"
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
                <path
                  d="M6.5 6V12M9.5 6V12"
                  fill="none"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>

          <div className="button-section button-section_top">
            <button className="button button_color_secondary button_size_large button-section__button">
              <svg
                className="button__icon"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 3.5H3.5M14 3.5H12.5M5.5 3.5H10.5M5.5 3.5V2.5C5.5 1.94772 5.94772 1.5 6.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V3.5M5.5 3.5H3.5M10.5 3.5H12.5M3.5 3.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V3.5"
                  fill="none"
                  stroke-linecap="round"
                />
                <path
                  d="M6.5 6V12M9.5 6V12"
                  fill="none"
                  stroke-linecap="round"
                />
              </svg>
              <span className="button__text">Text here</span>
            </button>
            <button className="button button_color_secondary button_size_large button-section__button">
              <span className="button__text">Text here</span>
            </button>
            <button className="button button_color_secondary button_size_large-icon button-section__button">
              <svg
                className="button__icon"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 3.5H3.5M14 3.5H12.5M5.5 3.5H10.5M5.5 3.5V2.5C5.5 1.94772 5.94772 1.5 6.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V3.5M5.5 3.5H3.5M10.5 3.5H12.5M3.5 3.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V3.5"
                  fill="none"
                  stroke-linecap="round"
                />
                <path
                  d="M6.5 6V12M9.5 6V12"
                  fill="none"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>

          <div className="button-section button-section_top">
            <button className="button button_color_tertiary button_size_large button-section__button">
              <svg
                className="button__icon"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 3.5H3.5M14 3.5H12.5M5.5 3.5H10.5M5.5 3.5V2.5C5.5 1.94772 5.94772 1.5 6.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V3.5M5.5 3.5H3.5M10.5 3.5H12.5M3.5 3.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V3.5"
                  fill="none"
                  stroke-linecap="round"
                />
                <path
                  d="M6.5 6V12M9.5 6V12"
                  fill="none"
                  stroke-linecap="round"
                />
              </svg>
              <span className="button__text">Text here</span>
            </button>
            <button className="button button_color_tertiary button_size_large button-section__button">
              <span className="button__text">Text here</span>
            </button>
          </div>

          <div className="button-section">
            <button className="button button_color_primary button_size_medium button-section__button">
              <svg
                className="button__icon"
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
                <path
                  d="M6.5 6V12M9.5 6V12"
                  fill="none"
                  stroke-linecap="round"
                />
              </svg>
              <span className="button__text">Text here</span>
            </button>
            <button className="button button_color_primary button_size_medium button-section__button">
              <span className="button__text">Text here</span>
            </button>
            <button className="button button_color_primary button_size_medium-icon button-section__button">
              <svg
                className="button__icon"
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
                <path
                  d="M6.5 6V12M9.5 6V12"
                  fill="none"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>

          <div className="button-section">
            <button className="button button_color_secondary button_size_medium button-section__button">
              <svg
                className="button__icon"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 3.5H3.5M14 3.5H12.5M5.5 3.5H10.5M5.5 3.5V2.5C5.5 1.94772 5.94772 1.5 6.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V3.5M5.5 3.5H3.5M10.5 3.5H12.5M3.5 3.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V3.5"
                  fill="none"
                  stroke-linecap="round"
                />
                <path
                  d="M6.5 6V12M9.5 6V12"
                  fill="none"
                  stroke-linecap="round"
                />
              </svg>
              <span className="button__text">Text here</span>
            </button>
            <button className="button button_color_secondary button_size_medium button-section__button">
              <span className="button__text">Text here</span>
            </button>
            <button className="button button_color_secondary button_size_medium-icon button-section__button">
              <svg
                className="button__icon"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 3.5H3.5M14 3.5H12.5M5.5 3.5H10.5M5.5 3.5V2.5C5.5 1.94772 5.94772 1.5 6.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V3.5M5.5 3.5H3.5M10.5 3.5H12.5M3.5 3.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V3.5"
                  fill="none"
                  stroke-linecap="round"
                />
                <path
                  d="M6.5 6V12M9.5 6V12"
                  fill="none"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="wrapper wrapper__dropdown">
        <div className="dropdown-section dropdown-section__top">
          <div className="dropdown-block">
            <div className="checkbox dropdown-block__checkbox">
              <input className="checkbox__item" type="checkbox" id="new" />
              <label className="checkbox__label" for="new">
                Новый
              </label>
            </div>
            <div className="checkbox dropdown-block__checkbox">
              <input className="checkbox__item" type="checkbox" id="calc" />
              <label className="checkbox__label" for="calc">
                Расчет
              </label>
            </div>
            <div className="checkbox dropdown-block__checkbox">
              <input
                className="checkbox__item"
                checked
                type="checkbox"
                id="confirmed"
              />
              <label className="checkbox__label" for="confirmed">
                Подтвержден
              </label>
            </div>
            <div className="checkbox dropdown-block__checkbox">
              <input
                className="checkbox__item"
                type="checkbox"
                id="postponed"
              />
              <label className="checkbox__label" for="postponed">
                Отложен
              </label>
            </div>
            <div className="checkbox dropdown-block__checkbox">
              <input
                className="checkbox__item"
                type="checkbox"
                id="completed"
              />
              <label className="checkbox__label" for="completed">
                Выполнен
              </label>
            </div>
            <div className="checkbox dropdown-block__checkbox">
              <input className="checkbox__item" type="checkbox" id="canceled" />
              <label className="checkbox__label" for="canceled">
                Отменен
              </label>
            </div>
          </div>
          <div className="dropdown-block">
            <div className="radio dropdown-block__radio">
              <input
                className="radio__item-none"
                type="radio"
                name="radio-btn"
                id="new-1"
              />
              <label className="radio__label-none" for="new-1">
                Новый
              </label>
            </div>
            <div className="radio dropdown-block__radio">
              <input
                className="radio__item-none"
                type="radio"
                name="radio-btn"
                id="calc-1"
              />
              <label className="radio__label-none" for="calc-1">
                Рассчет
              </label>
            </div>
            <div className="radio dropdown-block__radio">
              <input
                className="radio__item-none"
                type="radio"
                name="radio-btn"
                id="confirmed-1"
                checked
              />
              <label className="radio__label-none" for="confirmed-1">
                Подтвержден
              </label>
            </div>
            <div className="radio dropdown-block__radio">
              <input
                className="radio__item-none"
                type="radio"
                name="radio-btn"
                id="postponed-1"
              />
              <label className="radio__label-none" for="postponed-1">
                Отложен
              </label>
            </div>
            <div className="radio dropdown-block__radio">
              <input
                className="radio__item-none"
                type="radio"
                name="radio-btn"
                id="completed-1"
              />
              <label className="radio__label-none" for="completed-1">
                Выполнен
              </label>
            </div>
            <div className="radio dropdown-block__radio">
              <input
                className="radio__item-none"
                type="radio"
                name="radio-btn"
                id="canceled-1"
              />
              <label className="radio__label-none" for="canceled-1">
                Отменен
              </label>
            </div>
          </div>
        </div>
        <div className="dropdown-section">
          <div className="dropdown-block">
            <div className="input">
              <label className="input__label" for="input-empty">
                Номер страницы
              </label>
              <div className="input__area">
                <input
                  className="input__field"
                  type="text"
                  id="input-empty"
                  placeholder="Введите номер"
                />
              </div>
            </div>
          </div>
          <div className="dropdown-block">
            <label className="button-label">Удалить n записей?</label>
            <button className="button button_color_secondary button_size_medium dropdown-block__button">
              <span className="button__text">Удалить</span>
            </button>
            <button className="button button_color_primary button_size_medium dropdown-block__button">
              <span className="button__text">Отмена</span>
            </button>
          </div>
          <div className="dropdown-block">
            <label className="button-label">Выберите тему</label>
            <button className="button button_color_secondary button_size_medium dropdown-block__button">
              <svg
                className="button__icon"
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
                <path
                  d="M3.5 14H2L2 12.5L3.5 11L5 12.5L3.5 14Z"
                  stroke="none"
                />
                <path
                  d="M14 3.5V2L12.5 2L11 3.5L12.5 5L14 3.5Z"
                  stroke="none"
                />
              </svg>
              <span className="button__text">Светлая</span>
            </button>
            <button className="button button_color_primary button_size_medium dropdown-block__button">
              <svg
                className="button__icon"
                viewBox="0 0 16 16"
                stroke="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 15C12.0269 15 15.5 11.5021 15 7.5C14.7688 10.0468 12.6071 12 10 12C7.23858 12 5 9.76142 5 7C5 4.23858 7.23858 2 10 2C11 2 12 2.5 12 2.5C11 1.5 10 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                  stroke="none"
                />
              </svg>
              <span className="button__text">Темная</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
