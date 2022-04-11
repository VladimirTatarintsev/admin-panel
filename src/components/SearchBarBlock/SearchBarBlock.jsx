import { SearchBarItem } from "../SearchBar/SearchBar";
import styles from "./SearchBarBlock.module.css";


export const SearchBarBlock = () => {
	return (
		<div className={styles.block}>
			<div className={styles.itemGroup}>
				<SearchBarItem />
				<SearchBarItem defaultValue="50744" />
			</div>
		</div>
	)
}
