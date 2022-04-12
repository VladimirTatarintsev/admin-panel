import cn from "classnames";
import { Checkbox } from "../../../../components/Checkbox/Checkbox";
import { Radio } from "../../../../components/Radio/Radio";
import { ControlLabel } from "../../../../components/ControlLabel/ControlLabel";
import { Input } from "../../../../components/Input/Input";
import { Label } from "../../../../components/Label/Label";
import { Button } from "../../../../components/Button/Button";
import { Dropdown } from "../../../../components/Dropdown/Dropdown";
import { ReactComponent as IconSun } from "../../../../icons/sun.svg";
import { ReactComponent as IconMoon } from "../../../../icons/moon.svg";
import styles from "./DropdownSection.module.css";


export const DropdownSection = ({ className }) => {
	const SectionClass = cn (styles.dropdownSection, styles.dropdownSectionTop, className )
  return (
    <>
      <div className={SectionClass}>
        <Dropdown className={styles.dropdownBlock}>
				<ControlLabel className={styles.dropdownLabel} control={<Checkbox />} label="Новый"/>
			 	<ControlLabel className={styles.dropdownLabel} control={<Checkbox />} label="Расчет"/>
			 	<ControlLabel className={styles.dropdownLabel} control={<Checkbox defaultChecked/>} label="Подтвержден"/>
			 	<ControlLabel className={styles.dropdownLabel} control={<Checkbox />} label="Отложен"/>
			 	<ControlLabel className={styles.dropdownLabel} control={<Checkbox />} label="Выполнен"/>
			 	<ControlLabel className={styles.dropdownLabel} control={<Checkbox />} label="Отменен"/>
        </Dropdown>
        <Dropdown className={styles.dropdownBlock}>
			 	<ControlLabel className={styles.dropdownLabel} control={<Radio withoutIcon={true} name="radioBtn"/>} label="Новый"/>
			 	<ControlLabel className={styles.dropdownLabel} control={<Radio withoutIcon={true} name="radioBtn"/>} label="Расчет"/>
			 	<ControlLabel className={styles.dropdownLabel} control={<Radio withoutIcon={true} defaultChecked name="radioBtn"/>} label="Подтвержден"/>
			 	<ControlLabel className={styles.dropdownLabel} control={<Radio withoutIcon={true} name="radioBtn"/>} label="Отложен"/>
			 	<ControlLabel className={styles.dropdownLabel} control={<Radio withoutIcon={true} name="radioBtn"/>} label="Выполнен"/>
			 	<ControlLabel className={styles.dropdownLabel} control={<Radio withoutIcon={true} name="radioBtn"/>} label="Отменен"/>
        </Dropdown>
      </div>
      <div className={SectionClass}>
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
      </div>
    </>
  );
};