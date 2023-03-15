import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Input,
  Label,
  Dropdown,
  ControlLabel,
  Checkbox,
  TableCell,
} from "components";
import { ReactComponent as IconRefresh } from "icons/refresh.svg";
import { ReactComponent as IconSun } from "icons/sun.svg";
import { ReactComponent as IconSearch } from "icons/search.svg";
import { ReactComponent as IconXMedium } from "icons/x-medium.svg";
import { ReactComponent as IconFilter } from "icons/filter.svg";
import { ReactComponent as IconPencil } from "icons/pencil.svg";
import { ReactComponent as IconBin } from "icons/bin.svg";
import { ReactComponent as IconArrow } from "icons/v_arrow.svg";
import { ReactComponent as IconMoon } from "icons/moon.svg";
import {
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  OrderForm,
} from "./components";
import { orderFiltersSelector } from "store/selectors/orderFilters";
import { getOrderForEdit, getOrders } from "store/selectors/orderList";
import { toggleFilters } from "store/actionCreators/toggleFilters";
import {
  setSearch,
  setDateFrom,
  setDateTo,
  setAmountFrom,
  setAmountTo,
  clearAllInput,
  setStatus,
  clearActiveInput,
} from "store/actionCreators/setFilters";
import { toggleFiltersSelector } from "store/selectors/toggleFilters";
import { getSelectedOrders } from "store/selectors/selectedOrders";
import { getOrderPages } from "store/selectors/orderList";
import { setPagination } from "store/actionCreators/setPagination";
import {
  setIsAllOrdersSelected,
  setSelectedAllOrders,
  setSelectedOrders,
} from "store/actionCreators/setSelectedOrders";
import { setOrders } from "store/actionCreators/setOrders";
import { getSorting } from "store/selectors/sorting";
import {
  setOrderSorting,
  setSortDirection,
} from "store/actionCreators/setSorting";
import { xor } from "helpers/helpers";
import {
  setEditOrder,
  setIsEditFormActive,
} from "store/actionCreators/setEditOrder";
import { toggleThemeSelector } from "store/selectors/toggleTheme";
import { toggleTheme } from "store/actionCreators/toggleTheme";
import styles from "./OrderPage.module.css";

export const OrderPage = () => {
  const dispatch = useDispatch();
  const { search } = useSelector(orderFiltersSelector);
  const { key, direction } = useSelector(getSorting);
  const editOrder = useSelector(getOrderForEdit);
  const orders = useSelector(getOrders);
  const { isFiltersVisible } = useSelector(toggleFiltersSelector);
  const { selectedOrders, isAllOrdersSelected } =
    useSelector(getSelectedOrders);
  const { currentPage, pages } = useSelector(getOrderPages);
  const { isDarkModeOn } = useSelector(toggleThemeSelector);

  const [isChecked, setIsChecked] = useState([]);
  const [filters, setFilters] = useState({
    dateFromFilter: "",
    dateToFilter: "",
    amountFromFilter: "",
    amountToFilter: "",
    statusFilter: [],
  });
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDeleteDropdown, setShowDeleteDropdown] = useState(false);

  const handleSetCurrentPage = (page) => dispatch(setPagination(page));
  const handleChangeSearchInput = ({ target: { value } }) => {
    dispatch(setSearch({ value }));
  };
  const handleClearSearchInput = ({ target: { name, value } }) => {
    dispatch(clearActiveInput({ name, value }));
  };
  const handleChangeAdditionFilters = ({ target: { name, value } }) => {
    setFilters({ ...filters, [name]: value });
  };
  const handleSetAdditionFilters = () => {
    dispatch(setDateFrom(filters.dateFromFilter));
    dispatch(setDateTo(filters.dateToFilter));
    dispatch(setAmountFrom(filters.amountFromFilter));
    dispatch(setAmountTo(filters.amountToFilter));
    dispatch(setStatus(filters.statusFilter));
  };
  const handleClearAllInput = () => {
    setFilters({
      dateFromFilter: "",
      dateToFilter: "",
      amountFromFilter: "",
      amountToFilter: "",
      statusFilter: [],
    });
    setIsChecked([]);
    dispatch(clearAllInput());
  };
  const handleClearActiveAdditionInput = ({ target: { name } }) => {
    setFilters({ ...filters, [name]: "" });
  };

  const handleClickShowDropdown = (e) => {
    setShowDropdown(!showDropdown);
    e.stopPropagation();
  };
  const handleSetSelectedStatus = ({ target: { value } }) => {
    setIsChecked(xor(isChecked, value));
    setFilters({ ...filters, statusFilter: xor(filters.statusFilter, value) });
  };

  const handleSetSort = ({ target }) => {
    dispatch(setOrderSorting(target.dataset?.name));
    let prevStatus = key;
    if (prevStatus === target.dataset?.name) {
      direction === "asc"
        ? dispatch(setSortDirection("desc"))
        : dispatch(setSortDirection("asc"));
    } else dispatch(setSortDirection("asc"));
  };

  const handleSetSelectedOrders = ({ target: { value } }) => {
    dispatch(setSelectedOrders(value));
  };
  const handleSetIsAllOrdersSelected = () => {
    dispatch(setIsAllOrdersSelected(!isAllOrdersSelected));
    dispatch(setSelectedAllOrders(orders.map((order) => order.id)));
  };
  const handleClickDeleteOrders = () => {
    selectedOrders.forEach((id) => dispatch(setOrders(id)));
    dispatch(setSelectedOrders(""));
    setShowDeleteDropdown(false);
  };

  const handleSetEditOrder = (id) => {
    dispatch(setEditOrder(id));
    dispatch(setIsEditFormActive());
  };
  const handleSwitchTheme = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    if (orders.length === 0) {
      dispatch(setIsAllOrdersSelected(false));
    } else if (selectedOrders.length === orders.length) {
      dispatch(setIsAllOrdersSelected(true));
    } else dispatch(setIsAllOrdersSelected(false));
  }, [selectedOrders, orders]);

  return (
    <div
      className={`${[styles.wrapper]} ${isDarkModeOn ? [styles.darkMode] : ""}`}
      onClick={() => setShowDropdown(false)}
    >
      <div className={styles.title}>
        <span
          className={`${[styles.text]} ${
            isDarkModeOn && [styles.textDarkMode]
          }`}
        >
          Список заказов
        </span>
        {isDarkModeOn ? (
          <Button
            icon={IconMoon}
            color="secondary"
            size="large"
            onClick={handleSwitchTheme}
          >
            Тёмная тема
          </Button>
        ) : (
          <Button
            icon={IconSun}
            color="secondary"
            size="large"
            onClick={handleSwitchTheme}
          >
            Светлая тема
          </Button>
        )}
      </div>

      <div className={styles.filters}>
        <div className={styles.search}>
          <div className={styles.itemGroup}>
            <Input
              iconInput={IconSearch}
              className={styles.input}
              name="search"
              value={search}
              iconRight={IconXMedium}
              placeholder="Номер заказа или ФИО"
              onChange={handleChangeSearchInput}
              onClick={handleClearSearchInput}
              darkMode={isDarkModeOn}
            />
            <Button
              className={styles.filterButton}
              onClick={() => {
                dispatch(toggleFilters());
              }}
              icon={IconFilter}
              color={`${isDarkModeOn ? "primaryDarkMode" : "primary"}`}
              size="large"
            >
              Фильтры
            </Button>
            {isFiltersVisible && (
              <Button
                color="secondary"
                size="large"
                onClick={handleClearAllInput}
              >
                Сбросить фильтры
              </Button>
            )}
          </div>
          <Button icon={IconRefresh} color="secondary" size="large">
            Загрузка
          </Button>
        </div>
        {isFiltersVisible && (
          <div
            className={`${[styles.filterPanel]} ${
              isDarkModeOn && [styles.filterPanelDark]
            }`}
          >
            <div className={styles.area}>
              <Label className={styles.label} htmlFor="date">
                Дата оформления
              </Label>
              <div className={styles.container}>
                <Input
                  className={styles.dateInput}
                  text="с"
                  id="date"
                  placeholder="dd.mm.yyyy"
                  name="dateFromFilter"
                  value={filters.dateFromFilter}
                  iconRight={IconXMedium}
                  onChange={handleChangeAdditionFilters}
                  onClick={handleClearActiveAdditionInput}
                  darkMode={isDarkModeOn}
                />
                <Input
                  className={styles.dateInput}
                  text="по"
                  name="dateToFilter"
                  placeholder="dd.mm.yyyy"
                  value={filters.dateToFilter}
                  iconRight={IconXMedium}
                  onChange={handleChangeAdditionFilters}
                  onClick={handleClearActiveAdditionInput}
                  darkMode={isDarkModeOn}
                />
              </div>
            </div>
            <div className={styles.area} onClick={(e) => e.stopPropagation()}>
              <Label className={styles.label} htmlFor="status">
                Статус заказа
              </Label>
              <Input
                className={styles.selectInput}
                value={filters.statusFilter}
                name="statusFilter"
                id="status"
                iconRight={IconArrow}
                onFocus={() => setShowDropdown(true)}
                onClick={handleClickShowDropdown}
                placeholder="Нажмите для выбора"
                readOnly
                darkMode={isDarkModeOn}
              />
              <Dropdown
                className={`${styles.dropdownBlock} ${
                  isDarkModeOn && [styles.dropdownDarkMode]
                }`}
                isDropdownVisible={showDropdown}
              >
                <ControlLabel
                  className={styles.dropdownLabel}
                  control={
                    <Checkbox
                      checked={isChecked.includes("Новый")}
                      onChange={handleSetSelectedStatus}
                      withIcon={true}
                      value="Новый"
                      darkMode={isDarkModeOn}
                    />
                  }
                  label="Новый"
                />
                <ControlLabel
                  className={styles.dropdownLabel}
                  control={
                    <Checkbox
                      checked={isChecked.includes("Рассчет")}
                      onChange={handleSetSelectedStatus}
                      withIcon={true}
                      value="Рассчет"
                      darkMode={isDarkModeOn}
                    />
                  }
                  label="Рассчет"
                />
                <ControlLabel
                  className={styles.dropdownLabel}
                  control={
                    <Checkbox
                      checked={isChecked.includes("Подтвержден")}
                      onChange={handleSetSelectedStatus}
                      withIcon={true}
                      value="Подтвержден"
                      darkMode={isDarkModeOn}
                    />
                  }
                  label="Подтвержден"
                />
                <ControlLabel
                  className={styles.dropdownLabel}
                  control={
                    <Checkbox
                      checked={isChecked.includes("Отложен")}
                      onChange={handleSetSelectedStatus}
                      withIcon={true}
                      value="Отложен"
                      darkMode={isDarkModeOn}
                    />
                  }
                  label="Отложен"
                />
                <ControlLabel
                  className={styles.dropdownLabel}
                  control={
                    <Checkbox
                      checked={isChecked.includes("Выполнен")}
                      onChange={handleSetSelectedStatus}
                      withIcon={true}
                      value="Выполнен"
                      darkMode={isDarkModeOn}
                    />
                  }
                  label="Выполнен"
                />
                <ControlLabel
                  className={styles.dropdownLabel}
                  control={
                    <Checkbox
                      checked={isChecked.includes("Отменен")}
                      onChange={handleSetSelectedStatus}
                      withIcon={true}
                      value="Отменен"
                      darkMode={isDarkModeOn}
                    />
                  }
                  label="Отменен"
                />
              </Dropdown>
            </div>
            <div className={styles.area}>
              <Label className={styles.label} htmlFor="sum">
                Сумма заказа
              </Label>
              <div className={styles.container}>
                <Input
                  className={styles.sumInput}
                  text="от"
                  name="amountFromFilter"
                  value={filters.amountFromFilter}
                  iconRight={IconXMedium}
                  id="sum"
                  placeholder="₽"
                  onChange={handleChangeAdditionFilters}
                  onClick={handleClearActiveAdditionInput}
                  darkMode={isDarkModeOn}
                />
                <Input
                  className={styles.sumInput}
                  text="до"
                  name="amountToFilter"
                  value={filters.amountToFilter}
                  iconRight={IconXMedium}
                  placeholder="₽"
                  onChange={handleChangeAdditionFilters}
                  onClick={handleClearActiveAdditionInput}
                  darkMode={isDarkModeOn}
                />
              </div>
            </div>
            <div className={styles.area}>
              <Button
                color="secondary"
                size="large"
                onClick={() => handleSetAdditionFilters()}
              >
                Применить
              </Button>
            </div>
          </div>
        )}
      </div>
      <OrderForm order={editOrder}></OrderForm>
      <div className={styles.table}>
        <TableHeader>
          <TableCell>
            <Checkbox
              checked={isAllOrdersSelected}
              onChange={handleSetIsAllOrdersSelected}
              darkMode={isDarkModeOn}
            />
          </TableCell>
          <TableCell
            className={styles.headerCell}
            icon={IconArrow}
            onClick={(e) => handleSetSort(e)}
            name="id"
            headerCellDarkMode={isDarkModeOn}
          >
            id
          </TableCell>
          <TableCell
            className={styles.headerCell}
            icon={IconArrow}
            onClick={(e) => handleSetSort(e)}
            name="date"
            headerCellDarkMode={isDarkModeOn}
          >
            Дата
          </TableCell>
          <TableCell
            className={styles.headerCell}
            icon={IconArrow}
            onClick={(e) => handleSetSort(e)}
            name="status"
            headerCellDarkMode={isDarkModeOn}
          >
            Статус
          </TableCell>
          <TableCell
            className={styles.headerCell}
            icon={IconArrow}
            onClick={(e) => handleSetSort(e)}
            name="position"
            headerCellDarkMode={isDarkModeOn}
          >
            Позиций
          </TableCell>
          <TableCell
            className={styles.headerCell}
            icon={IconArrow}
            onClick={(e) => handleSetSort(e)}
            name="sum"
            headerCellDarkMode={isDarkModeOn}
          >
            Сумма
          </TableCell>
          <TableCell
            className={styles.headerCell}
            headerCellDarkMode={isDarkModeOn}
          >
            ФИО покупателя
          </TableCell>
        </TableHeader>
        <TableBody darkMode={isDarkModeOn}>
          {orders.map((order) => (
            <TableRow
              className={styles.row}
              key={order.id}
              onClick={() => handleSetEditOrder(order.id)}
            >
              <TableCell>
                <Checkbox
                  checked={selectedOrders.includes(`${order.id}`)}
                  onChange={handleSetSelectedOrders}
                  value={order.id}
                  darkMode={isDarkModeOn}
                />
              </TableCell>
              <TableCell darkMode={isDarkModeOn}>{order.id}</TableCell>
              <TableCell darkMode={isDarkModeOn}>{order.date}</TableCell>
              <TableCell darkMode={isDarkModeOn}>{order.status}</TableCell>
              <TableCell darkMode={isDarkModeOn}>{order.position}</TableCell>
              <TableCell darkMode={isDarkModeOn}>
                {`${order.sum !== "-" ? order.sum + " ₽" : order.sum}`}
              </TableCell>
              <TableCell darkMode={isDarkModeOn}>{order.fullName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter className={`${isDarkModeOn && [styles.footerDark]}`}>
          <div className={styles.footerSection}>
            <span>{`Выбрано записей: ${selectedOrders?.length}`}</span>
            {!!selectedOrders.length && (
              <div className={styles.optionBtnsContainer}>
                <Button
                  className={styles.optionButton}
                  color={`${isDarkModeOn ? "primaryDarkMode" : "primary"}`}
                  size="medium"
                  icon={IconPencil}
                >
                  Изменить статус
                </Button>
                <div className={styles.optionButtonWrap}>
                  <Button
                    className={styles.optionButton}
                    color="red"
                    size="medium"
                    icon={IconBin}
                    onClick={() => setShowDeleteDropdown(!showDeleteDropdown)}
                  >
                    Удалить
                  </Button>
                  <Dropdown
                    className={`${styles.deleteDropdown} ${
                      isDarkModeOn && [styles.dropdownDarkMode]
                    }`}
                    isDropdownVisible={showDeleteDropdown}
                  >
                    <Label
                      className={styles.label}
                    >{`Удалить ${selectedOrders.length} записей?`}</Label>
                    <Button
                      className={styles.dropdownBlockButton}
                      color="secondary"
                      size="medium"
                      fullWidth
                      onClick={() => handleClickDeleteOrders()}
                    >
                      Удалить
                    </Button>
                    <Button
                      color={`${isDarkModeOn ? "primaryDarkMode" : "primary"}`}
                      size="medium"
                      fullWidth
                      onClick={(e) => {
                        setShowDeleteDropdown(false);
                      }}
                    >
                      Отмена
                    </Button>
                  </Dropdown>
                </div>
              </div>
            )}
          </div>
          <div className={styles.footerSection}>
            <div className={styles.pagination}>
              {pages?.map((page, index) => (
                <Button
                  className={styles.pageBtn}
                  key={index}
                  size="medium"
                  color={`${currentPage === page ? "primary" : "secondary"}`}
                  onClick={() => handleSetCurrentPage(page)}
                >
                  {page}
                </Button>
              ))}
            </div>
          </div>
        </TableFooter>
      </div>
    </div>
  );
};
