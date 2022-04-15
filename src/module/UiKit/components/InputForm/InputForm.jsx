import { Label, Input } from "components";
import styles from "./InputForm.module.css";


export const InputForm = () => {
	return (
	  <div className={styles.form}>
		 <div className={styles.formContainer}>
			<div className={styles.area}>
				<Label className={styles.label} htmlFor="inputEmpty">Дата и время заказа</Label>
				<Input id="inputEmpty"/>
			</div>
		 </div>
		 <div className={styles.formContainer}>
			<div className={styles.area}>
				<Label className={styles.label} htmlFor="inputIncorrect">Дата и время заказа</Label>
				<Input id="inputIncorrect" isError defaultValue="06.12.2021"/>
			</div>
		 </div>
		 <div className={styles.formContainer}>
			<div className={styles.area}>
				<Label className={styles.label} htmlFor="inputDisabled">Дата и время заказа</Label>
				<Input id="inputDisabled" disabled={true} defaultValue="06.12.2021"/>
			</div>
		 </div>
	  </div>
	)
}