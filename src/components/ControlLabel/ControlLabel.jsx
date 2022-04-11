import styles from "./ControlLabel.module.css"

export const ControlLabel = ({ control, label }) => {
	return (
		<label>
			{control}
			<span className={styles.label}>{label}</span>
		</label>
	)
}