import { Input } from "../../../../components/Input/Input";
import styles from "./SearchBar.module.css";
import { ReactComponent as IconSearch } from "../../../../icons/search.svg";


export const SearchBarItem = ({ defaultValue }) => {
  return (
	<div className={styles.item}>
		<Input
		type="text"
		placeholder="Номер заказа или ФИО"
		iconInput={IconSearch}
		defaultValue={defaultValue}
		/>
	</div>
  );
};

