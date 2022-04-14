import cn from "classnames";
import styles from "./DropdownSection.module.css";


export const DropdownSection = ({ className, children }) => {
	const SectionClass = cn (styles.dropdownSection, styles.dropdownSectionTop, className )
  return (
    <>
      <div className={SectionClass}>
			{children}
      </div>
    </>
  );
};