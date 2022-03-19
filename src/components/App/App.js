import {
  InputForm,
  SearchBar,
  CheckboxBlock,
  RadioBlock,
  ButtonTable,
  DropdownSection,
} from "../../components/index";
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
