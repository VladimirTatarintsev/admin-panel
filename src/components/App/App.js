import { ButtonTable } from "../Button/Button";
import { Checkbox } from "../Checkbox/Checkbox";
import { Radio } from "../Radio/Radio";
import { Dropdown } from "../Dropdown/Dropdown";
import { InputWrapper } from "../Input/Input";
import { SearchBarWrapper } from "../Search-bar/Search-bar";
import style from "./App.module.css";

const App = () => (
  <div className={style.components}>
    <InputWrapper />
    <SearchBarWrapper />
    <Checkbox />
    <Radio />
    <ButtonTable />
    <Dropdown />
  </div>
);

export default App;
