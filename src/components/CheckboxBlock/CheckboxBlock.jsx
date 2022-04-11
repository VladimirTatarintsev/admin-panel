import { Checkbox } from "../Checkbox/Checkbox";
import { ControlLabel } from "../ControlLabel/ControlLabel";
import styles from "../CheckboxBlock/CheckboxBlock.module.css"


export const CheckboxBlock = () => {
	return (
	  <div className={styles.checkboxBlock}>
		 <ControlLabel control={<Checkbox/>}/>
		 <ControlLabel control={<Checkbox defaultChecked/>}/> 
	  </div>
	);
};