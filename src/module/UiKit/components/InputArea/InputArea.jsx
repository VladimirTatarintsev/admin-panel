import { Label, Input } from "../../../../components";
import styles from "./InputArea.module.css";


export const InputArea = ({ children }) => {
	return (
		<div className={styles.area}>
			{children}
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
			<Input id="inputDisabled" disabled={true} defaultValue="06.12.2021"/>
		</div>
	)
}