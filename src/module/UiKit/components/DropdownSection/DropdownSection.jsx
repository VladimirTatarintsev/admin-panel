import cn from "classnames";
import styles from "./DropdownSection.module.css";


export const DropdownSection = ({ className, children }) => {
	const sectionClass = cn (styles.dropdownSection, styles.dropdownSectionTop, className )
  return (
    <>
      <div className={sectionClass}>
			{children}
      </div>
    </>
  );
};