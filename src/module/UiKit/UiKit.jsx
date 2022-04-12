import { useState } from "react";
import {
	InputForm,
	SearchBarBlock,
	CheckboxBlock,
	RadioBlock,
	ButtonTable,
	DropdownSection,
} from "../index";
import { Checkbox, Input, Dropdown, Radio, Button} from "../../components";
import style from "./UiKit.module.css";
 
export const UiKit = () => {
	const STATUS = {
		new: "new",
		calc: "calc",
		confirmed: "confirmed",
		postponed: "postponed",
		completed: "completed",
		canceled: "canceled",
	}
	const STATUS_LABEL = {
		[STATUS.new]: "Новый",
		[STATUS.calc]: "Расчет",
		[STATUS.confirmed]: "Подтвержден",
		[STATUS.postponed]: "Отложен",
		[STATUS.completed]: "Выполнен",
		[STATUS.canceled]: "Отменен"
	}

	const [checked, setChecked] = useState(STATUS.new);
	const handleCheckboxChange = ({target: {checked}}) => {
		setChecked( checked );
	}
	return (
	  <div className={style.components}>
		 <div className={style.wrapperInput}>
			<InputForm />
		 </div>
		 <div className={style.wrapperSearchBar}>
			<SearchBarBlock />
		 </div>
		 <div className={style.wrapperCheckboxRadio}>
			<CheckboxBlock>
				 <Checkbox onChange={handleCheckboxChange} checked={checked}/>
		 		 <Checkbox onChange={handleCheckboxChange} checked={checked}/>
			</CheckboxBlock>
			<RadioBlock>
				<Radio/>
				<Radio/>
			</RadioBlock>
		 </div>
		 <div className={style.wrapperButton}>
			<ButtonTable />
		 </div>
		 <div className={style.wrapperDropdown}>
			<DropdownSection />
		 </div>
	  </div>
	);
};