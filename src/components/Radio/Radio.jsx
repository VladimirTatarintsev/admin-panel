import cn from "classnames";
import styles from "./Radio.module.css";


export const Radio = ({
	className,
	type = "radio",
	name = "radio",
	defaultChecked,
}) => {
	const CheckboxClass = cn (styles.radioWrapper, className)
  return (
    <div className={CheckboxClass}>
		 <label className={styles.label}>
			<input
				className={styles.radio}
				type={type}
				name={name}
				defaultChecked={defaultChecked}
			/>
			<span className={styles.customRadio}/>
		</label>
    </div>
  );
};

