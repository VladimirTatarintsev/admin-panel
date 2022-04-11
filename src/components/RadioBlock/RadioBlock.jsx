import { ControlLabel } from "../ControlLabel/ControlLabel";
import { Radio } from "../Radio/Radio";
import styles from "../RadioBlock/RadioBlock.module.css";


export const RadioBlock = () => {
  return (
    <div className={styles.radioBlock}>
		 <ControlLabel control={<Radio />}/>
		 <ControlLabel control={<Radio defaultChecked/>}/>
    </div>
  );
};
