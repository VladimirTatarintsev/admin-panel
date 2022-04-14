import { useState } from "react";
import { 
	InputForm,
	SearchBarBlock,
	CheckboxBlock,
	RadioBlock,
	ButtonTable,
	DropdownSection,
} from "../index";
import { Checkbox, Input, Dropdown, Radio, Button, ControlLabel, Label} from "../../components";
import { ReactComponent as IconSun} from "icons/sun.svg";
import { ReactComponent as IconMoon} from "icons/moon.svg";
import styles from "./UiKit.module.css";
 
export const UiKit = () => {

	const xor = (arr, item) => {
		return (
			arr.includes(item) ? arr.filter((i)=>i !==item) : arr.concat(item)
		)
	}
		
	const [isChecked, setIsChecked] = useState([]);

	const [defaultRadio, setDefaultRadio] = useState("")

	const [dropdownRadio, setDropdownRadio] = useState("");

	const handleChangeisChecked = ({target: {value}}) => {
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
				 <Checkbox checked={isChecked.includes("check1")} value="check1" onChange={handleChangeisChecked }/> 
		 		 <Checkbox checked={isChecked.includes("check2")} value="check2" onChange={handleChangeisChecked }/> 
			</CheckboxBlock>
			<RadioBlock>
				<Radio checked={defaultRadio==="radio1"} value="radio1" onChange={handleDefaultRadioChange}/>
				<Radio checked={defaultRadio==="radio2"} value="radio2" onChange={handleDefaultRadioChange} />
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
						onChange={handleChangeisChecked} 
						value="new"/>}
						label="Новый"
					/>
					<ControlLabel className={styles.dropdownLabel}
						control={<Checkbox checked={ isChecked.includes("calc")}
						onChange={handleChangeisChecked} 
						value="calc"/>}
						label="Расчет"
					/>
					<ControlLabel className={styles.dropdownLabel} 
						control={<Checkbox checked={ isChecked.includes("confirmed")}
						onChange={handleChangeisChecked}
						value="confirmed"/>} 
						label="Подтвержден"
					/>
					<ControlLabel className={styles.dropdownLabel} 
						control={<Checkbox checked={ isChecked.includes("postponed")}  
						onChange={handleChangeisChecked}
						value="postponed"/>} 
						label="Отложен"
					/>
					<ControlLabel className={styles.dropdownLabel} 
						control={<Checkbox checked={ isChecked.includes("completed")}  
						onChange={handleChangeisChecked}
						value="completed"/>} 
						label="Выполнен"/>
					<ControlLabel className={styles.dropdownLabel} 
						control={<Checkbox checked={ isChecked.includes("canceled")} 
						onChange={handleChangeisChecked}
						value="canceled"/>} 
						label="Отменен"
					/>
				</Dropdown>

				<Dropdown className={styles.dropdownBlock}>
					<ControlLabel className={styles.dropdownLabel} 
						control={<Radio checked={ dropdownRadio === "new"} 
						withoutIcon={true} 
						name="radioBtn" 
						value="new" 
						onChange={handleChangeDropdownRadio}/>} 
						label="Новый"
					/>
					<ControlLabel className={styles.dropdownLabel} 
						control={<Radio checked={ dropdownRadio === "calc"} 
						withoutIcon={true} 
						name="radioBtn" 
						value="calc" 
						onChange={handleChangeDropdownRadio}/>} 
						label="Расчет"
					/>
					<ControlLabel className={styles.dropdownLabel} 
						control={<Radio checked={ dropdownRadio === "confirmed"} 
						withoutIcon={true} 
						name="radioBtn" 
						value="confirmed" 
						onChange={handleChangeDropdownRadio}/>} 
						label="Подтвержден"
					/>
					<ControlLabel className={styles.dropdownLabel} 
						control={<Radio checked={ dropdownRadio === "postponed"} 
						withoutIcon={true} 
						name="radioBtn" 
						value="postponed" 
						onChange={handleChangeDropdownRadio}/>} 
						label="Отложен"
					/>
					<ControlLabel className={styles.dropdownLabel} 
						control={<Radio checked={ dropdownRadio === "completed"} 
						withoutIcon={true} 
						name="radioBtn" 
						value="completed" 
						onChange={handleChangeDropdownRadio}/>} 
						label="Выполнен"
					/>
					<ControlLabel className={styles.dropdownLabel} 
						control={<Radio checked={ dropdownRadio === "canceled"} 
						withoutIcon={true} 
						name="radioBtn" 
						value="canceled" 
						onChange={handleChangeDropdownRadio}/>} 
						label="Отменен"
					/>
        		</Dropdown>
			</DropdownSection>
			<DropdownSection>
				<Dropdown>
					<Label htmlFor="pageNumber">Номер страницы</Label>
					<Input id="pageNumber" placeholder="Введите номер"/>
				</Dropdown>
				<Dropdown>
					<Label>Удалить n записей?</Label>
					<Button className={styles.dropdownBlockButton} color="secondary" size="medium" fullWidth>
						Удалить
					</Button>
					<Button color="primary" size="medium" fullWidth>
						Отмена
					</Button>
				</Dropdown>
				<Dropdown>
				<Label>Выберите тему</Label>
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