import cn from "classnames";
import styles from "./Checkbox.module.css";

export const Checkbox = ({
	className,
	type = "checkbox",
	checked = false,
	onChange = () => {},
	value = "",
	name = "isChecked",
}) => {
	const CheckboxClass = cn (styles.checkboxWrapper, className)
  return (
    <div className={CheckboxClass}>
		<label className={styles.label}>
      	<input className={styles.checkbox} type={type} name={name} checked={checked} value={value} onChange={onChange}/>
			<span className={styles.customCheckbox}/>
      </label>
    </div>
  );
};
