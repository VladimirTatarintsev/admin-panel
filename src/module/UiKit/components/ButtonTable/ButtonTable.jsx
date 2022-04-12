import styles from "./ButtonTable.module.css";
import { SectionButtonPrimaryLarge, SectionButtonSecondaryLarge, SectionButtonTertiaryLarge, SectionButtonPrimaryMedium, SectionButtonSecondaryMedium } from "../ButtonSection/ButtonSection";



export const ButtonTable = () => {
  return (
    <div className={styles.buttonTable}>
      <SectionButtonPrimaryLarge />
      <SectionButtonSecondaryLarge />
      <SectionButtonTertiaryLarge />
      <SectionButtonPrimaryMedium />
      <SectionButtonSecondaryMedium />
    </div>
  );
};
