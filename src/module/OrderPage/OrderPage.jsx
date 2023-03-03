import { useState, useEffect, useMemo } from "react";
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
import cn from "classnames";
import { TableHeader, TableBody, TableFooter, TableRow } from "./components";
import { orderFiltersSelector } from "store/selectors/orderFilters";
import { setFilters } from "store/actionCreators/setFilters";
import { getOrderList } from "store/selectors/getOrderList";
import { toggleFilters } from "store/actionCreators/toggleFilters";
import { setClearAllInput } from "store/actionCreators/setClearAllInput";
import { toggleFiltersSelector } from "store/selectors/toggleFilters";
import { setClearActiveInput } from "store/actionCreators/setClearActiveInput";
import { getSelectedOrders } from "store/selectors/selectedOrders";
import { getPagination } from "store/selectors/pagination";
import {
  setIsAllOrdersSelected,
  setSelectedAllOrders,
  setSelectedOrders,
} from "store/actionCreators/setSelectedOrders";
import { setOrders } from "store/actionCreators/setOrders";
import { getTotalPages, createPages, xor } from "helpers/helpers";
import styles from "./OrderPage.module.css";
import { setPagination } from "store/actionCreators/setPagination";

export const OrderPage = ({ className }) => {
  const dispatch = useDispatch();
  const { search, dateFrom, dateTo, amountFrom, amountTo } =
    useSelector(orderFiltersSelector);
  const orders = useSelector(getOrderList);
  const { isFiltersVisible } = useSelector(toggleFiltersSelector);
  const { selectedOrders, isAllOrdersSelected } =
    useSelector(getSelectedOrders);
  const { currentPage, pageLimit } = useSelector(getPagination);
  const [isChecked, setIsChecked] = useState([]);
  const [showDropdown, setShowDropdown] = useState(true);
  const [showDeleteDropdown, setShowDeleteDropdown] = useState(false);

  const pages = [];
  const totalPages = getTotalPages(orders.length, pageLimit);

  useMemo(() => {
    createPages(pages, totalPages);
  }, [pages]);
  const handleSetCurrentPage = (page) => dispatch(setPagination(page));
  const handleChangeInput = ({ target: { name, value } }) => {
    dispatch(setFilters({ name, value }));
  };
  const handleClickShowDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const handleSetIsChecked = ({ target: { value } }) => {
    setIsChecked(xor(isChecked, value));
  };

  const handleClearAllInput = ({ target: { name, value } }) => {
    dispatch(setClearAllInput({ name, value }));
  };

  const handleClearActiveInput = ({ target: { name } }) => {
    dispatch(setClearActiveInput({ name }));
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
  useEffect(() => {
    if (orders.length === 0) {
      dispatch(setIsAllOrdersSelected(false));
    } else if (selectedOrders.length === orders.length) {
      dispatch(setIsAllOrdersSelected(true));
    } else dispatch(setIsAllOrdersSelected(false));
  }, [selectedOrders, orders]);

  return (
    <div className={cn(styles.wrapper, className)}>
      <div className={styles.title}>
        <span className={styles.text}>Список заказов</span>
        <Button icon={IconSun} color="secondary" size="large">
          Светлая тема
        </Button>
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
              onChange={handleChangeInput}
              onClick={handleClearActiveInput}
            />
            <Button
              className={styles.filterButton}
              onClick={() => {
                dispatch(toggleFilters());
              }}
              icon={IconFilter}
              color="primary"
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
          <div className={styles.filterPanel}>
            <div className={styles.area}>
              <Label className={styles.label} htmlFor="date">
                Дата оформления
              </Label>
              <div className={styles.container}>
                <Input
                  className={styles.dateInput}
                  text="с"
                  id="date"
                  placeholder="dd.mm.dddd"
                  name="dateFrom"
                  value={dateFrom}
                  iconRight={IconXMedium}
                  onChange={handleChangeInput}
                  onClick={handleClearActiveInput}
                />
                <Input
                  className={styles.dateInput}
                  text="по"
                  name="dateTo"
                  placeholder="dd.mm.dddd"
                  value={dateTo}
                  iconRight={IconXMedium}
                  onChange={handleChangeInput}
                  onClick={handleClearActiveInput}
                />
              </div>
            </div>
            <div className={styles.area}>
              <Label className={styles.label} htmlFor="status">
                Статус заказа
              </Label>
              <Input
                className={styles.selectInput}
                value="Любой"
                name="status"
                id="status"
                iconRight={IconArrow}
                onChange={handleChangeInput}
                onClick={handleClickShowDropdown}
              />
              <Dropdown
                className={styles.dropdownBlock}
                isDropdownVisible={showDropdown}
              >
                <ControlLabel
                  className={styles.dropdownLabel}
                  control={
                    <Checkbox
                      checked={isChecked.includes("new")}
                      onChange={handleSetIsChecked}
                      withIcon={true}
                      value="new"
                    />
                  }
                  label="Новый"
                />
                <ControlLabel
                  className={styles.dropdownLabel}
                  control={
                    <Checkbox
                      checked={isChecked.includes("calc")}
                      onChange={handleSetIsChecked}
                      withIcon={true}
                      value="calc"
                    />
                  }
                  label="Расчет"
                />
                <ControlLabel
                  className={styles.dropdownLabel}
                  control={
                    <Checkbox
                      checked={isChecked.includes("confirmed")}
                      onChange={handleSetIsChecked}
                      withIcon={true}
                      value="confirmed"
                    />
                  }
                  label="Подтвержден"
                />
                <ControlLabel
                  className={styles.dropdownLabel}
                  control={
                    <Checkbox
                      checked={isChecked.includes("postponed")}
                      onChange={handleSetIsChecked}
                      withIcon={true}
                      value="postponed"
                    />
                  }
                  label="Отложен"
                />
                <ControlLabel
                  className={styles.dropdownLabel}
                  control={
                    <Checkbox
                      checked={isChecked.includes("completed")}
                      onChange={handleSetIsChecked}
                      withIcon={true}
                      value="completed"
                    />
                  }
                  label="Выполнен"
                />
                <ControlLabel
                  className={styles.dropdownLabel}
                  control={
                    <Checkbox
                      checked={isChecked.includes("canceled")}
                      onChange={handleSetIsChecked}
                      withIcon={true}
                      value="canceled"
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
                  name="amountFrom"
                  value={amountFrom}
                  iconRight={IconXMedium}
                  id="sum"
                  placeholder="₽"
                  onChange={handleChangeInput}
                  onClick={handleClearActiveInput}
                />
                <Input
                  className={styles.sumInput}
                  text="до"
                  name="amountTo"
                  value={amountTo}
                  iconRight={IconXMedium}
                  placeholder="₽"
                  onChange={handleChangeInput}
                  onClick={handleClearActiveInput}
                />
              </div>
            </div>
            <div className={styles.area}>
              <Button color="secondary" size="large">
                Применить
              </Button>
            </div>
          </div>
        )}
      </div>
      <div className={styles.table}>
        <TableHeader>
          <TableCell>
            <Checkbox
              checked={isAllOrdersSelected}
              onChange={handleSetIsAllOrdersSelected}
            />
          </TableCell>
          <TableCell icon={IconArrow}>id</TableCell>
          <TableCell icon={IconArrow}>Дата</TableCell>
          <TableCell icon={IconArrow}>Статус</TableCell>
          <TableCell icon={IconArrow}>Позиций</TableCell>
          <TableCell icon={IconArrow}>Сумма</TableCell>
          <TableCell>ФИО покупателя</TableCell>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>
                <Checkbox
                  checked={selectedOrders.includes(`${order.id}`)}
                  onChange={handleSetSelectedOrders}
                  value={order.id}
                />
              </TableCell>
              <TableCell className={styles.cell}>{order.id}</TableCell>
              <TableCell className={styles.cell}>{order.date}</TableCell>
              <TableCell className={styles.cell}>{order.status}</TableCell>
              <TableCell className={styles.cell}>{order.position}</TableCell>
              <TableCell className={styles.cell}>
                {`${order.sum !== "-" ? order.sum + " ₽" : order.sum}  `}
              </TableCell>
              <TableCell className={styles.cell}>{order.fullName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <div className={styles.footerSection}>
            <span>{`Выбрано записей: ${selectedOrders?.length}`}</span>
            {!!selectedOrders.length && (
              <div className={styles.optionBtnsContainer}>
                <Button
                  className={styles.optionButton}
                  color="primary"
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
                  {showDeleteDropdown && (
                    <Dropdown className={styles.deleteDropdown}>
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
                        color="primary"
                        size="medium"
                        fullWidth
                        onClick={(e) => {
                          setShowDeleteDropdown(false);
                        }}
                      >
                        Отмена
                      </Button>
                    </Dropdown>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className={styles.footerSection}>
            <div className={styles.pagination}>
              {pages?.map((page, index) => (
                <span
                  className={`${[styles.pageNum]} ${
                    currentPage === page ? [styles.currentPage] : ""
                  }`}
                  key={index}
                  onClick={() => handleSetCurrentPage(page)}
                >
                  {page}
                </span>
              ))}
            </div>
          </div>
        </TableFooter>
      </div>
    </div>
  );
};
