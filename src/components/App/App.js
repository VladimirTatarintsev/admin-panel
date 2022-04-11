import {
  InputForm,
  SearchBarBlock,
  CheckboxBlock,
  RadioBlock,
  ButtonTable,
  DropdownSection,
} from "../../components/index";
import style from "./App.module.css";

export const App = () => {
  return (
    <div className={style.components}>
      <div className={style.wrapperInput}>
        <InputForm />
      </div>
      <div className={style.wrapperSearchBar}>
        <SearchBarBlock />
      </div>
      <div className={style.wrapperCheckboxRadio}>
        <CheckboxBlock />
        <RadioBlock />
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
