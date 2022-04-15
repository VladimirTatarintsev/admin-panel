import cn from "classnames";
import styles from "./ControlLabel.module.css";

export const ControlLabel = ({ control, label, className }) => {
  const controlLabelClass = cn(styles.controlLabel, className, {
    [styles.checked]: control.props.checked,
    [styles.withOutIcon]: !control.props.withIcon,
  });
  return (
    <label className={cn(styles.label, className)}>
      {control}
      <span className={controlLabelClass}>{label}</span>
    </label>
  );
};
