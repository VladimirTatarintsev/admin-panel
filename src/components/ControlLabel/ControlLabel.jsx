import cn from "classnames"
import styles from "./ControlLabel.module.css"

export const ControlLabel = ({ control, label, className }) => {
	const ControlLabelClass = cn( styles.controlLabel, className,{
		[styles.checked]: control.props.checked,
		[styles.withoutIcon]: control.props.withoutIcon,
	})
	return (
		<label className={styles.label}>
			{control}
			<span className={ControlLabelClass}>{label}</span>
		</label>
	)
}