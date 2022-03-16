import style from "./Search-bar.module.css";

export const SearchBar = () => (
  <div className={style.searchBar}>
    <div className={style.searchBar__itemGroup}>
      <div className={style.searchBar__itemArea}>
        <input
          className={style.searchBar__input}
          type="text"
          placeholder="Номер заказа или ФИО"
        />
        <svg
          className={style.searchBar__icon}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.0355 10.0355C11.9882 8.08291 11.9882 4.91709 10.0355 2.96447C8.08291 1.01184 4.91709 1.01184 2.96447 2.96447C1.01184 4.91709 1.01184 8.08291 2.96447 10.0355C4.91709 11.9882 8.08291 11.9882 10.0355 10.0355ZM10.0355 10.0355L14 14M14 14L14.5 13.5L11.5 10.5M14 14L13.5 14.5L10.5 11.5"
            fill="none"
          />
        </svg>
      </div>

      <div className={style.searchBar__itemArea}>
        <input
          className={style.searchBar__input}
          type="text"
          placeholder="Номер заказа или ФИО"
          value="50744"
        />
        <svg
          className={style.searchBar__icon}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.0355 10.0355C11.9882 8.08291 11.9882 4.91709 10.0355 2.96447C8.08291 1.01184 4.91709 1.01184 2.96447 2.96447C1.01184 4.91709 1.01184 8.08291 2.96447 10.0355C4.91709 11.9882 8.08291 11.9882 10.0355 10.0355ZM10.0355 10.0355L14 14M14 14L14.5 13.5L11.5 10.5M14 14L13.5 14.5L10.5 11.5"
            fill="none"
          />
        </svg>
        <button className={style.searchBar__button}>
          <svg
            className={style.searchBar__buttonIcon}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5" fill="none" />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

export const SearchBarWrapper = () => (
  <div className={`${style.wrapper} ${style.wrapper__searchBar}`}>
    <SearchBar />
  </div>
);
