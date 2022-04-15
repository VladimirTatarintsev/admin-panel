import { useState } from "react";
import { 
	InputForm,
	SearchBarBlock,
	CheckboxBlock,
	RadioBlock,
	ButtonTable,
	DropdownSection,
} from "../index";
import { Checkbox, Input, Dropdown, Radio, Button, ControlLabel, Label} from "components";
import { ReactComponent as IconSun} from "icons/sun.svg";
import { ReactComponent as IconMoon} from "icons/moon.svg";
import styles from "./UiKit.module.css";
 
export const UiKit = () => {

	const xor = (arr, status) => {
		return (
			arr.includes(status) ? arr.filter((i)=>i !==status) : arr.concat(status)
		)
	}
		
	const [isChecked, setIsChecked] = useState([]);

	const [defaultRadio, setDefaultRadio] = useState("")

	const [dropdownRadio, setDropdownRadio] = useState("");

	const handleChangeIsChecked = ({target: {value}}) => {
		setIsChecked (xor(isChecked, value));
	}
	const handleChangeDropdownRadio = ({target: {value}}) => {
		setDropdownRadio (value);
	}
	const handleDefaultRadioChange = ({target: {value}}) => {
		setDefaultRadio (value);
	}
	return (
	  <div className={styles.components}>
		 <div className={styles.wrapperInput}>
			<InputForm />
		 </div>
		 <div className={styles.wrapperSearchBar}>
			<SearchBarBlock />
		 </div>
		 <div className={styles.wrapperCheckboxRadio}>
			<CheckboxBlock>
				 <Checkbox checked={isChecked.includes("check1")} 
					value="check1" 
					onChange={handleChangeIsChecked } 
				 /> 
		 		 <Checkbox checked={isChecked.includes("check2")} 
					value="check2" 
					onChange={handleChangeIsChecked } /> 
			</CheckboxBlock>
			<RadioBlock>
				<Radio checked={defaultRadio==="radio1"} 
					value="radio1" 
					onChange={handleDefaultRadioChange}/>
				<Radio checked={defaultRadio==="radio2"} 
					value="radio2" 
					onChange={handleDefaultRadioChange}/>
			</RadioBlock>
		 </div>
		 <div className={styles.wrapperButton}>
			<ButtonTable />
		 </div>
		 <div className={styles.wrapperDropdown}>
			<DropdownSection className={styles.dropdownSectionTop}>
				<Dropdown className={styles.dropdownBlock}>
					<ControlLabel className={styles.dropdownLabel}
						control={<Checkbox checked={ isChecked.includes("new")}
						onChange={handleChangeIsChecked} 
						value="new"/>}
						label="Новый"
						withIcon={true}
					/>
					<ControlLabel className={styles.dropdownLabel}
						control={<Checkbox checked={ isChecked.includes("calc")}
						onChange={handleChangeIsChecked} 
						value="calc"/>}
						label="Расчет"
						withIcon={true}
					/>
					<ControlLabel className={styles.dropdownLabel} 
						control={<Checkbox checked={ isChecked.includes("confirmed")}
						onChange={handleChangeIsChecked}
						value="confirmed"/>} 
						label="Подтвержден"
						withIcon={true}
					/>
					<ControlLabel className={styles.dropdownLabel} 
						control={<Checkbox checked={ isChecked.includes("postponed")}  
						onChange={handleChangeIsChecked}
						value="postponed"/>} 
						label="Отложен"
						withIcon={true}
					/>
					<ControlLabel className={styles.dropdownLabel} 
						control={<Checkbox checked={ isChecked.includes("completed")}  
						onChange={handleChangeIsChecked}
						value="completed"/>} 
						label="Выполнен"
						withIcon={true}
					/>
					<ControlLabel className={styles.dropdownLabel} 
						control={<Checkbox checked={ isChecked.includes("canceled")} 
						onChange={handleChangeIsChecked}
						value="canceled"/>} 
						label="Отменен"
						withIcon={true}
					/>
				</Dropdown>

				<Dropdown className={styles.dropdownBlock}>
					<ControlLabel className={styles.dropdownLabel} 
						control={<Radio checked={ dropdownRadio === "new"} 
						withIcon={false} 
						name="radioBtn" 
						value="new" 
						onChange={handleChangeDropdownRadio}/>} 
						label="Новый"
					/>
					<ControlLabel className={styles.dropdownLabel} 
						control={<Radio checked={ dropdownRadio === "calc"} 
						withIcon={false} 
						name="radioBtn" 
						value="calc" 
						onChange={handleChangeDropdownRadio}/>} 
						label="Расчет"
					/>
					<ControlLabel className={styles.dropdownLabel} 
						control={<Radio checked={ dropdownRadio === "confirmed"} 
						withIcon={false} 
						name="radioBtn" 
						value="confirmed" 
						onChange={handleChangeDropdownRadio}/>} 
						label="Подтвержден"
					/>
					<ControlLabel className={styles.dropdownLabel} 
						control={<Radio checked={ dropdownRadio === "postponed"} 
						withIcon={false} 
						name="radioBtn" 
						value="postponed" 
						onChange={handleChangeDropdownRadio}/>} 
						label="Отложен"
					/>
					<ControlLabel className={styles.dropdownLabel} 
						control={<Radio checked={ dropdownRadio === "completed"} 
						withIcon={false} 
						name="radioBtn" 
						value="completed" 
						onChange={handleChangeDropdownRadio}/>} 
						label="Выполнен"
					/>
					<ControlLabel className={styles.dropdownLabel} 
						control={<Radio checked={ dropdownRadio === "canceled"} 
						withIcon={false} 
						name="radioBtn" 
						value="canceled" 
						onChange={handleChangeDropdownRadio}/>} 
						label="Отменен"
					/>
        		</Dropdown>
			</DropdownSection>
			<DropdownSection>
				<Dropdown>
					<Label className={styles.label} htmlFor="pageNumber">Номер страницы</Label>
					<Input id="pageNumber" placeholder="Введите номер"/>
				</Dropdown>
				<Dropdown>
					<Label className={styles.label}>Удалить n записей?</Label>
					<Button className={styles.dropdownBlockButton} color="secondary" size="medium" fullWidth>
						Удалить
					</Button>
					<Button color="primary" size="medium" fullWidth>
						Отмена
					</Button>
				</Dropdown>
				<Dropdown>
				<Label className={styles.label}>Выберите тему</Label>
					<Button className={styles.dropdownBlockButton} color="secondary" size="medium" icon={IconSun} fullWidth>
						Светлая
					</Button>
					<Button color="primary" size="medium" icon={IconMoon} fullWidth>
						Темная
					</Button>
				</Dropdown>
			</DropdownSection>
		 </div>
	  </div>
	);
};