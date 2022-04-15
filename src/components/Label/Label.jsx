import cn from "classnames";
import styles from "./Label.module.css";

export const Label = ({
	children,
	className,
	htmlFor,
}) => {
	const labelClass = cn(styles.label, className)
	return (
		<label className={labelClass} htmlFor={htmlFor}>{children}</label>
	)
}