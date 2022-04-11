import { Button } from "../Button/Button"; 
import styles from "./ButtonSection.module.css";
import { ReactComponent as IconBin } from "../../icons/bin.svg"


export const SectionButtonPrimaryLarge = () => {
  return (
    <div className={styles.section}>
      <Button color="primary" size="large" icon={IconBin} marginBottom>
			Text Here
		</Button>
		<Button color="primary" size="large" marginBottom>Text Here</Button>
		<Button color="primary" iconSize="large" icon={IconBin} marginBottom/>
    </div>
  );
};

export const SectionButtonSecondaryLarge = () => {
  return (
    <div className={styles.section}>
      <Button color="secondary" size="large" icon={IconBin} marginBottom>
			Text Here
		</Button>
		<Button color="secondary" size="large" marginBottom>Text Here</Button>
		<Button color="secondary" iconSize="large" icon={IconBin} marginBottom/>
    </div>
  );
};

export const SectionButtonTertiaryLarge = () => {
  return (
    <div className={styles.section}>
      <Button color="tertiary" size="large" icon={IconBin} marginBottom>
			Text Here
		</Button>
		<Button color="tertiary" size="large" marginBottom>Text Here</Button>
		<Button color="tertiary" iconSize="large" icon={IconBin} marginBottom/>
    </div>
  );
};

export const SectionButtonPrimaryMedium = () => {
  return (
    <div className={styles.section}>
      <Button color="primary" size="medium" icon={IconBin} marginBottom>
			Text Here
		</Button>
		<Button color="primary" size="medium" marginBottom>Text Here</Button>
		<Button color="primary" iconSize="medium" icon={IconBin} marginBottom/>
    </div>
  );
};

export const SectionButtonSecondaryMedium = () => {
  return (
    <div className={styles.section}>
      <Button color="secondary" size="medium" icon={IconBin} marginBottom>
			Text Here
		</Button>
		<Button color="secondary" size="medium" marginBottom>Text Here</Button>
		<Button color="secondary" iconSize="medium" icon={IconBin} marginBottom/>
    </div>
  );
};
