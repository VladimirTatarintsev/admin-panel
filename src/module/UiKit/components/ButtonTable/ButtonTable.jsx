import { Button } from "components";
import { ReactComponent as IconBin } from "icons/bin.svg";
import styles from "./ButtonTable.module.css";

export const ButtonTable = () => {
  return (
    <div className={styles.buttonTable}>
      <div className={styles.sectionTop}>
        <Button
          className={styles.sectionButton}
          color="primary"
          size="large"
          icon={IconBin}
        >
          Text Here
        </Button>
        <Button className={styles.sectionButton} color="primary" size="large">
          Text Here
        </Button>
        <Button
          className={styles.sectionButton}
          color="primary"
          size="large"
          icon={IconBin}
        />
      </div>
      <div className={styles.sectionTop}>
        <Button
          className={styles.sectionButton}
          color="secondary"
          size="large"
          icon={IconBin}
        >
          Text Here
        </Button>
        <Button className={styles.sectionButton} color="secondary" size="large">
          Text Here
        </Button>
        <Button
          className={styles.sectionButton}
          color="secondary"
          size="large"
          icon={IconBin}
        />
      </div>
      <div className={styles.section}>
        <Button
          className={styles.sectionButton}
          color="tertiary"
          size="large"
          icon={IconBin}
        >
          Text Here
        </Button>
        <Button className={styles.sectionButton} color="tertiary" size="large">
          Text Here
        </Button>
        <Button
          className={styles.sectionButton}
          color="tertiary"
          size="large"
          icon={IconBin}
        />
      </div>
      <div className={styles.section}>
        <Button
          className={styles.sectionButton}
          color="primary"
          size="medium"
          icon={IconBin}
        >
          Text Here
        </Button>
        <Button className={styles.sectionButton} color="primary" size="medium">
          Text Here
        </Button>
        <Button
          className={styles.sectionButton}
          color="primary"
          size="medium"
          icon={IconBin}
        />
      </div>
      <div className={styles.section}>
        <Button
          className={styles.sectionButton}
          color="secondary"
          size="medium"
          icon={IconBin}
        >
          Text Here
        </Button>
        <Button
          className={styles.sectionButton}
          color="secondary"
          size="medium"
        >
          Text Here
        </Button>
        <Button
          className={styles.sectionButton}
          color="secondary"
          size="medium"
          icon={IconBin}
        />
      </div>
    </div>
  );
};
