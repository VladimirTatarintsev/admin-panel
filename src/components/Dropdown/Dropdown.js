import style from "./Dropdown.module.css";

const Dropdown = () => (
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
          <input className="checkbox__item" type="checkbox" id="postponed" />
          <label className="checkbox__label" for="postponed">
            Отложен
          </label>
        </div>
        <div className="checkbox dropdown-block__checkbox">
          <input className="checkbox__item" type="checkbox" id="completed" />
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
            id="radio-new"
          />
          <label className="radio__label-none" for="radio-new">
            Новый
          </label>
        </div>
        <div className="radio dropdown-block__radio">
          <input
            className="radio__item-none"
            type="radio"
            name="radio-btn"
            id="radio-calc"
          />
          <label className="radio__label-none" for="radio-calc">
            Рассчет
          </label>
        </div>
        <div className="radio dropdown-block__radio">
          <input
            className="radio__item-none"
            type="radio"
            name="radio-btn"
            id="radio-confirmed"
          />
          <label className="radio__label-none" for="radio-confirmed">
            Подтвержден
          </label>
        </div>
        <div className="radio dropdown-block__radio">
          <input
            className="radio__item-none"
            type="radio"
            name="radio-btn"
            id="radio-postponed"
          />
          <label className="radio__label-none" for="radio-postponed">
            Отложен
          </label>
        </div>
        <div className="radio dropdown-block__radio">
          <input
            className="radio__item-none"
            type="radio"
            name="radio-btn"
            id="radio-completed"
          />
          <label className="radio__label-none" for="radio-completed">
            Выполнен
          </label>
        </div>
        <div className="radio dropdown-block__radio">
          <input
            className="radio__item-none"
            type="radio"
            name="radio-btn"
            id="radio-canceled"
          />
          <label className="radio__label-none" for="radio-canceled">
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
        <button className="button button_color_secondary button_size_medium button_full-width dropdown-block__button">
          <span className="button__text">Удалить</span>
        </button>
        <button className="button button_color_primary button_size_medium button_full-width dropdown-block__button">
          <span className="button__text">Отмена</span>
        </button>
      </div>
      <div className="dropdown-block">
        <label className="button-label">Выберите тему</label>
        <button className="button button_color_secondary button_size_medium button_full-width dropdown-block__button">
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
            <path d="M3.5 14H2L2 12.5L3.5 11L5 12.5L3.5 14Z" stroke="none" />
            <path d="M14 3.5V2L12.5 2L11 3.5L12.5 5L14 3.5Z" stroke="none" />
          </svg>
          <span className="button__text">Светлая</span>
        </button>
        <button className="button button_color_primary button_size_medium button_full-width dropdown-block__button">
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
);

export default Dropdown;
