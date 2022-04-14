import cn from "classnames";
import styles from "./Input.module.css";
import { ReactComponent as IconXMedium } from "../../icons/x-medium.svg";
import { ReactComponent as IconLocked } from "../../icons/locked.svg";


export const Input = ({
	id, 
	type = "text", 
	placeholder = "Введите", 
	defaultValue, 
	className, 
	isError = false, 
	disabled = false,
	iconInput: IconInput,
	onChange,
}) => {
	const InputClass = cn( styles.field, className, {
		[styles.iconInput]: IconInput,
		[styles.fieldIncorrect]: isError,
		[styles.fieldDisabled]: disabled,
	 });
  return ( 
	<div className={styles.input}>
		<input
			className={InputClass}
			type={type}
			id={id}
			placeholder={placeholder}
			defaultValue={defaultValue}
			onChange={onChange}
			disabled={disabled}
		/>
		{ IconInput && <IconInput className={styles.searchIconInput}/> }

		{ defaultValue && (
		<button className={styles.button}>
			<IconXMedium className={styles.buttonIcon} />
		</button>
		)}

		{ disabled && (<IconLocked className={styles.iconLocked}/>
		)}
	</div>
  );
};
