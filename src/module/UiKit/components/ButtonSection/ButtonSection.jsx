import { Button } from "../../../../components/Button/Button"; 
import styles from "./ButtonSection.module.css";
import { ReactComponent as IconBin } from "../../../../icons/bin.svg"


export const SectionButtonPrimaryLarge = () => {
  return (
    <div className={styles.section}>
      <Button className={styles.sectionButton} color="primary" size="large" icon={IconBin}>
			Text Here
		</Button>
		<Button className={styles.sectionButton} color="primary" size="large">Text Here</Button>
		<Button className={styles.sectionButton} color="primary" iconSize="large" icon={IconBin}/>
    </div>
  );
};

export const SectionButtonSecondaryLarge = () => {
  return (
    <div className={styles.section}>
      <Button className={styles.sectionButton} color="secondary" size="large" icon={IconBin}>
			Text Here
		</Button>
		<Button className={styles.sectionButton} color="secondary" size="large">Text Here</Button>
		<Button className={styles.sectionButton} color="secondary" iconSize="large" icon={IconBin}/>
    </div>
  );
};

export const SectionButtonTertiaryLarge = () => {
  return (
    <div className={styles.section}>
      <Button className={styles.sectionButton} color="tertiary" size="large" icon={IconBin}>
			Text Here
		</Button>
		<Button className={styles.sectionButton} color="tertiary" size="large">Text Here</Button>
		<Button className={styles.sectionButton} color="tertiary" iconSize="large" icon={IconBin}/>
    </div>
  );
};

export const SectionButtonPrimaryMedium = () => {
  return (
    <div className={styles.section}>
      <Button className={styles.sectionButton} color="primary" size="medium" icon={IconBin}>
			Text Here
		</Button>
		<Button className={styles.sectionButton} color="primary" size="medium">Text Here</Button>
		<Button className={styles.sectionButton} color="primary" iconSize="medium" icon={IconBin}/>
    </div>
  );
};

export const SectionButtonSecondaryMedium = () => {
  return (
    <div className={styles.section}>
      <Button className={styles.sectionButton} color="secondary" size="medium" icon={IconBin}>
			Text Here
		</Button>
		<Button className={styles.sectionButton} color="secondary" size="medium">Text Here</Button>
		<Button className={styles.sectionButton} color="secondary" iconSize="medium" icon={IconBin}/>
    </div>
  );
};
