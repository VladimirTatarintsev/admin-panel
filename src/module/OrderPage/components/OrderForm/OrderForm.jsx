import { ReactComponent as DeleteIcon } from "icons/x-large.svg";
import { ReactComponent as ClearIcon } from "icons/x-medium.svg";
import { ReactComponent as Checkmark } from "icons/checkmark.svg";
import {
  Button,
  Label,
  Input,
  TableCell,
  ControlLabel,
  Radio,
  Dropdown,
} from "components";
import { TableBody, TableFooter, TableHeader, TableRow } from "..";
import { useDispatch, useSelector } from "react-redux";
import styles from "./OrderForm.module.css";
import { setIsEditFormActive } from "store/actionCreators/setEditOrder";
import { getEditOrder } from "store/selectors/editOrder";
import { ReactComponent as IconArrow } from "icons/v_arrow.svg";
import { useState, useEffect } from "react";
import { toggleThemeSelector } from "store/selectors/toggleTheme";

export const OrderForm = ({ order }) => {
  const dispatch = useDispatch();
  const { isEditFormActive } = useSelector(getEditOrder);
  const handleHideForm = () => {
    dispatch(setIsEditFormActive(false));
    setShowDropdown(false);
  };
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownRadio, setDropdownRadio] = useState("");
  const { isDarkModeOn } = useSelector(toggleThemeSelector);
  const [value, setValue] = useState({
    orderName: "",
    status: "",
    confirmationCode: "",
  });

  useEffect(() => {
    setValue({
      orderName: order?.fullName,
      status: order?.status,
      confirmationCode: "000",
    });
    setDropdownRadio(`${order?.status}`);
  }, [order]);

  const handleChangeDropdownRadio = ({ target: { value } }) => {
    setDropdownRadio(value);
    setValue({ ...value, status: value });
    setShowDropdown(false);
  };
  const handleChangeOrderSpec = ({ target: { name, value } }) => {
    setValue({ ...value, [name]: value });
  };
  const handleClearActiveInput = ({ target: { name } }) => {
    setValue({ ...value, [name]: "" });
  };

  return (
    <div
      className={
        isEditFormActive ? [styles.formContainerBackground] : [styles.hideForm]
      }
      onClick={handleHideForm}
    >
      <div
        className={
          isEditFormActive ? [styles.formContainer] : [styles.hideFormConteiner]
        }
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={styles.formHeader}>
          <h2 className={styles.formTitle}>{`Заявка #${order?.id}`}</h2>
          <Button
            color="primary"
            size="medium"
            icon={DeleteIcon}
            onClick={handleHideForm}
          />
        </div>
        <div
          className={`${styles.form} ${isDarkModeOn && [styles.formDarkMode]}`}
        >
          <div
            className={`${styles.formInputs} ${
              isDarkModeOn && [styles.formInputsDarkMode]
            }`}
          >
            <div className={styles.area}>
              <Label className={styles.label} htmlFor="orderDate">
                Дата и время заказа
              </Label>
              <Input
                value={order?.date}
                id="orderDate"
                disabled
                iconRight={ClearIcon}
              />
            </div>
            <div className={styles.area}>
              <Label className={styles.label} htmlFor="orderName">
                ФИО покупателя
              </Label>
              <Input
                value={value.orderName}
                id="orderName"
                name="orderName"
                iconRight={ClearIcon}
                onChange={handleChangeOrderSpec}
                onClick={handleClearActiveInput}
                darkMode={isDarkModeOn}
              />
            </div>
          </div>
          <div className={styles.orderTable}>
            <TableHeader className={styles.tableHeader}>
              <TableCell
                className={styles.cell}
                headerCellDarkMode={isDarkModeOn}
              >
                Артикул
              </TableCell>
              <TableCell
                className={styles.cell}
                headerCellDarkMode={isDarkModeOn}
              >
                Наименование
              </TableCell>
              <TableCell
                className={styles.cell}
                headerCellDarkMode={isDarkModeOn}
              >
                Цена
              </TableCell>
            </TableHeader>
            <TableBody className={styles.tableBody}>
              {order?.goods.map(({ article, title, price }) => (
                <TableRow className={styles.tableRow} key={article}>
                  <TableCell className={styles.cell} darkMode={isDarkModeOn}>
                    {article}
                  </TableCell>
                  <TableCell className={styles.cell} darkMode={isDarkModeOn}>
                    {title}
                  </TableCell>
                  <TableCell className={styles.cell} darkMode={isDarkModeOn}>
                    {price} ₽
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter
              className={
                isDarkModeOn ? [styles.tableFooterDark] : [styles.tableFooter]
              }
            >
              {`Итоговая сумма: ${order?.sum === "-" ? "0" : order?.sum} ₽`}
            </TableFooter>
          </div>
          <div
            className={`${styles.formInputs} ${
              isDarkModeOn && [styles.formInputsDarkMode]
            }`}
          >
            <div className={styles.area}>
              <Label className={styles.label} htmlFor="orderLoyaltyLevel">
                Уровень лояльности
              </Label>
              <Input defaultValue="Новичок" id="orderLoyaltyLevel" disabled />
            </div>
            <div className={styles.statusArea}>
              <Label className={styles.label} htmlFor="orderStatus">
                Статус заказа
              </Label>
              <Input
                value={value.status}
                id="orderStatus"
                iconRight={IconArrow}
                placeholder="Нажмите для выбора"
                onChange={handleChangeOrderSpec}
                onClick={() => setShowDropdown(!showDropdown)}
                onFocus={() => setShowDropdown(true)}
                readOnly
                darkMode={isDarkModeOn}
              />
              {showDropdown && (
                <Dropdown
                  isDropdownVisible={showDropdown}
                  className={`${styles.dropdownBlock} ${
                    isDarkModeOn && [styles.dropdownDarkMode]
                  }`}
                >
                  <ControlLabel
                    className={styles.dropdownLabel}
                    control={
                      <Radio
                        checked={dropdownRadio === "Новый"}
                        withIcon
                        name="radioBtn"
                        value="Новый"
                        onChange={handleChangeDropdownRadio}
                      />
                    }
                    label="Новый"
                  />
                  <ControlLabel
                    className={styles.dropdownLabel}
                    control={
                      <Radio
                        checked={dropdownRadio === "Рассчет"}
                        withIcon
                        name="radioBtn"
                        value="Рассчет"
                        onChange={handleChangeDropdownRadio}
                      />
                    }
                    label="Расчет"
                  />
                  <ControlLabel
                    className={styles.dropdownLabel}
                    control={
                      <Radio
                        checked={dropdownRadio === "Подтвержден"}
                        withIcon
                        name="radioBtn"
                        value="Подтвержден"
                        onChange={handleChangeDropdownRadio}
                      />
                    }
                    label="Подтвержден"
                  />
                  <ControlLabel
                    className={styles.dropdownLabel}
                    control={
                      <Radio
                        checked={dropdownRadio === "Отложен"}
                        withIcon
                        name="radioBtn"
                        value="Отложен"
                        onChange={handleChangeDropdownRadio}
                      />
                    }
                    label="Отложен"
                  />
                  <ControlLabel
                    className={styles.dropdownLabel}
                    control={
                      <Radio
                        checked={dropdownRadio === "Выполнен"}
                        withIcon
                        name="radioBtn"
                        value="Выполнен"
                        onChange={handleChangeDropdownRadio}
                      />
                    }
                    label="Выполнен"
                  />
                  <ControlLabel
                    className={styles.dropdownLabel}
                    control={
                      <Radio
                        checked={dropdownRadio === "Отменен"}
                        withIcon
                        name="radioBtn"
                        value="Отменен"
                        onChange={handleChangeDropdownRadio}
                      />
                    }
                    label="Отменен"
                  />
                </Dropdown>
              )}
            </div>
            <div className={styles.area}>
              <Label className={styles.label} htmlFor="confirmationCode">
                Код подтверждения
              </Label>
              <Input
                isError
                value={value.confirmationCode}
                iconRight={ClearIcon}
                name="confirmationCode"
                id="confirmationCode"
                onChange={handleChangeOrderSpec}
                onClick={handleClearActiveInput}
                darkMode={isDarkModeOn}
              />
            </div>
          </div>
          <div className={styles.formFooter}>
            <Button
              color={`${isDarkModeOn ? "primaryDarkMode" : "primary"}`}
              size="large"
              icon={Checkmark}
            >
              Сохранить
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
