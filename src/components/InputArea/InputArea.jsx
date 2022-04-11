import styles from "./InputArea.module.css";
import { Label } from "../Label/Label";
import { Input } from "../Input/Input";


export const InputArea = () => {
	return (
		<div className={styles.area}>
			<Label htmlFor="inputEmpty">Дата и время заказа</Label>
			<Input id="inputEmpty"/>
		</div>
	)
}

export const InputAreaIncorrect = () => {
	return (
		<div className={styles.area}>
			<Label htmlFor="inputIncorrect">Дата и время заказа</Label>
			<Input id="inputIncorrect" isError defaultValue="06.12.2021"/>
		</div>
	)
}

export const InputAreaDisabled = () => {
	return (
		<div className={styles.area}>
			<Label htmlFor="inputDisabled">Дата и время заказа</Label>
			<Input id="inputDisabled" disabled defaultValue="06.12.2021"/>
		</div>
	)
}