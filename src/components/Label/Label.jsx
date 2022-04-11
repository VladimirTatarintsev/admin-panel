import cn from "classnames";
import styles from "./Label.module.css";

export const Label = ({
	children,
	className,
	htmlFor,
}) => {
	const LabelClass = cn(styles.label, className)
	return (
		<label className={LabelClass} htmlFor={htmlFor}>{children}</label>
	)
}