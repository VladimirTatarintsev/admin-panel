import cn from "classnames";
import styles from "./Radio.module.css";


export const Radio = ({
	className,
	type = "radio",
	name = "radio",
	checked = false,
	onChange = () => {},
	value,
	withoutIcon = false,
}) => {
	const CheckboxClass = cn (styles.radioWrapper, className)
  return (
    <div className={CheckboxClass}>
		 <label className={styles.label}>
			<input
				className = {styles.radio}
				type = {type}
				name = {name}
				checked = {checked}
				value = {value}
				onChange = {onChange}
			/>
			{withoutIcon || <span className={styles.customRadio}/>}
		</label>
    </div>
  );
};

