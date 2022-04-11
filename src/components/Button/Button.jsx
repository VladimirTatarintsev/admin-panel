import cn from "classnames";
import styles from "./Button.module.css";


export const Button = ({ color, size, icon: Icon, iconSize, children, className, fullWidth, marginBottom }) => {
	const buttonClass = cn ( styles.button, className, {
		[styles.colorPrimary]: color==="primary",
		[styles.colorSecondary]: color==="secondary",
		[styles.colorTertiary]: color==="tertiary",
		[styles.sizeLarge]: size==="large",
		[styles.sizeMedium]: size==="medium",
		[styles.sizeLargeIcon]: iconSize==="large",
		[styles.sizeMediumIcon]: iconSize==="medium",
		[styles.buttonFullWidth]: fullWidth,
		[styles.sectionButton]: marginBottom,
	})
	return (
		<button className={buttonClass}>
			{Icon && <Icon className={styles.icon}/>}
 		 	{children}
 		</button>
	);
}