import cn from "classnames";
import styles from "./Checkbox.module.css";

export const Checkbox = ({
	className,
	type = "checkbox",
	defaultChecked
}) => {
	const CheckboxClass = cn (styles.checkboxWrapper, className)
  return (
    <div className={CheckboxClass}>
		<label className={styles.label}>
      	<input className={styles.checkbox} type={type} defaultChecked={defaultChecked}/>
			<span className={styles.customCheckbox}/>
      </label>
    </div>
  );
};
