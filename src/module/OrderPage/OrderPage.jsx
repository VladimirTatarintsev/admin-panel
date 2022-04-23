import { useState } from "react";
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
import styles from "./OrderPage.module.css";
import { TableHeader, TableBody, TableFooter, TableRow } from "./components";
import { orderFiltersSelector } from "redux/selectors/orderFilters";
import { setFilters } from "redux/actionCreators/setFilters";
import { getOrderList } from "redux/selectors/getOrderList";
import { toggleFilters } from "redux/actionCreators/toggleFilters";
import { setClearAllInput } from "redux/actionCreators/setClearAllInput";
import { toggleFiltersSelector } from "redux/selectors/toggleFilters";
import { setClearActiveInput } from "redux/actionCreators/setClearActiveInput";

const xor = (arr, status) => {
  return arr.includes(status)
    ? arr.filter((i) => i !== status)
    : arr.concat(status);
};

export const OrderPage = ({ className }) => {
  const dispatch = useDispatch();

  const { search, dateFrom, dateTo, amountFrom, amountTo } =
    useSelector(orderFiltersSelector);
  const orders = useSelector(getOrderList);
  const { isFiltersVisible } = useSelector(toggleFiltersSelector);

  const handleChangeInput = ({ target: { name, value } }) => {
    dispatch(setFilters({ name, value }));
  };
  const [isChecked, setIsChecked] = useState([]);
  const [showDropdown, setShowDropdown] = useState(true);

  const handleClickShowDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleChangeIsChecked = ({ target: { value } }) => {
    setIsChecked(xor(isChecked, value));
  };
  const handleClearAllInput = ({ target: { name, value } }) => {
    dispatch(setClearAllInput({ name, value }));
  };

  const handleClearActiveInput = ({ target: { name } }) => {
    dispatch(setClearActiveInput({ name }));
  };

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
                      onChange={handleChangeIsChecked}
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
                      onChange={handleChangeIsChecked}
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
                      onChange={handleChangeIsChecked}
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
                      onChange={handleChangeIsChecked}
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
                      onChange={handleChangeIsChecked}
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
                      onChange={handleChangeIsChecked}
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
              checked={isChecked.includes("all")}
              onChange={handleChangeIsChecked}
              value="all"
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
                  checked={isChecked.includes(`${order.id}`)}
                  value={order.id}
                />
              </TableCell>
              <TableCell className={styles.cell} key={order.id}>
                {order.id}
              </TableCell>
              <TableCell className={styles.cell} key={order.date}>
                {order.date}
              </TableCell>
              <TableCell className={styles.cell} key={order.status}>
                {order.status}
              </TableCell>
              <TableCell className={styles.cell} key={order.position}>
                {order.position}
              </TableCell>
              <TableCell className={styles.cell} key={order.sum}>
                {order.sum}
              </TableCell>
              <TableCell className={styles.cell} key={order.fullName}>
                {order.fullName}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          Выбрано записей: 0
          <Button
            className={styles.footerButton}
            color="primary"
            size="medium"
            icon={IconPencil}
          >
            Изменить статус
          </Button>
          <Button
            className={styles.footerButton}
            color="red"
            size="medium"
            icon={IconBin}
          >
            Удалить
          </Button>
          <div className={styles.pagination}></div>
        </TableFooter>
      </div>
    </div>
  );
};
