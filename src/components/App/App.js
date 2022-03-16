import { ButtonTable } from "../Button/Button";
import { CheckboxBlock } from "../Checkbox/Checkbox";
import { RadioBlock } from "../Radio/Radio";
import { DropdownSection } from "../Dropdown/Dropdown";
import { InputForm } from "../Input/Input";
import { SearchBar } from "../Search-bar/Search-bar";
import style from "./App.module.css";

export const App = () => {
  return (
    <div className={style.components}>
      <div className={style.wrapper}>
        <InputForm />
      </div>
      <div className={style.wrapper}>
        <SearchBar />
      </div>
      <div className={style.wrapper}>
        <CheckboxBlock />
        <RadioBlock />
      </div>
      <div className={style.wrapper}>
        <ButtonTable />
      </div>
      <div className={style.wrapper}>
        <DropdownSection />
      </div>
    </div>
  );
};
