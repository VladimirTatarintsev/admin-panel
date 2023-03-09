import { ReactComponent as DeleteIcon } from "icons/x-large.svg";
import { ReactComponent as Checkmark } from "icons/checkmark.svg";
import { Button, Label, Input } from "components";
import { TableBody, TableFooter, TableHeader } from "..";
import { useDispatch, useSelector } from "react-redux";
import { getEditOrder } from "store/selectors/editOrder";
import styles from "./OrderForm.module.css";
import { setIsEditFormActive } from "store/actionCreators/setEditOrder";

export const OrderForm = ({ order }) => {
  const dispatch = useDispatch();
  const { isEditFormActive } = useSelector(getEditOrder);

  const handleHideForm = () => {
    dispatch(setIsEditFormActive(false));
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
          <Button color="primary" size="medium" icon={DeleteIcon} />
        </div>
        <div className={styles.form}>
          <div className={styles.formInputs}>
            <div className={styles.area}>
              <Label className={styles.label} htmlFor="orderDate">
                Дата и время заказа
              </Label>
              <Input value={``} id="orderDate" disabled />
            </div>
            <div className={styles.area}>
              <Label className={styles.label} htmlFor="orderName">
                ФИО покупателя
              </Label>
              <Input value={""} id="orderName" />
            </div>
          </div>
          <div className={styles.orderTable}>
            <TableHeader className={styles.tableHeader}></TableHeader>
            <TableBody></TableBody>
            <TableFooter className={styles.tableFooter}>
              {`Итоговая сумма: ${order?.sum} ₽`}
            </TableFooter>
          </div>
          <div className={styles.formInputs}>
            <div className={styles.area}>
              <Label className={styles.label} htmlFor="orderLoyaltyLevel">
                Уровень лояльности
              </Label>
              <Input value={""} id="orderLoyaltyLevel" disabled />
            </div>
            <div className={styles.area}>
              <Label className={styles.label} htmlFor="orderStatus">
                Статус заказа
              </Label>
              <Input value={""} id="orderStatus" />
            </div>
            <div className={styles.area}>
              <Label className={styles.label} htmlFor="orderCode">
                Код подтверждения
              </Label>
              <Input isError value={""} id="orderCode" />
            </div>
          </div>
          <div className={styles.formFooter}>
            <Button color="primary" size="large" icon={Checkmark}>
              Сохранить
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
