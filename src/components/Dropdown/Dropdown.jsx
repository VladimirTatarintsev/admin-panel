import cn from "classnames";
import styles from "./Dropdown.module.css";


export const Dropdown = ({ className, children }) => {
	const DropdownClass = cn (styles.dropdownBlock, className)
	return (
		<div className={DropdownClass}>
			{children}
		</div>
	)
}