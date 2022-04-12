import cn from "classnames"
import styles from "./ControlLabel.module.css"

export const ControlLabel = ({ control, label, className }) => {
	const ControlLabelClass = cn( styles.controlLabel, className,{
		[styles.checked]: control.props.checked,
	})
	return (
		<label className={ControlLabelClass}>
			{control}
			<span className={styles.label}>{label}</span>
		</label>
	)
}