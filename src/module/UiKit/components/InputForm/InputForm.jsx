import styles from "./InputForm.module.css";
import { InputArea, InputAreaIncorrect, InputAreaDisabled } from "../InputArea/InputArea"



export const InputForm = ({children}) => {
	return (
	  <div className={styles.form}>
		 <div className={styles.formContainer}>
			 {children}
			<InputArea />
		 </div>
 
		 <div className={styles.formContainer}>
			<InputAreaIncorrect />
		 </div>
 
		 <div className={styles.formContainer}>
			<InputAreaDisabled />
		 </div>
	  </div>
	)
 }