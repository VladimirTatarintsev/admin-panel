import cn from "classnames";
import styles from "./Button.module.css";
import { capitalize } from "../Helper/Helper";
import Bin from "../../icons/Bin.svg";

export const ButtonPrimaryLargeWhithIcon = (
  color = "primary",
  size = "large",
  className,
  children,
  ...props
) => {
  const buttonClass = cn(styles.button, {
    [styles.colorPrimary]: color,
    [styles.sizeLarge]: size,
    [styles.sectionButton]: true,
    [className]: !!className,
  });
  return (
    <button className={buttonClass} {...props}>
      <Bin />
      {children}
      <span className={styles.text}>Text here</span>
    </button>
  );
};

export const ButtonPrimaryLarge = (
  color = "primary",
  size = "large",
  className,
  children,
  ...props
) => {
  const buttonClass = cn(styles.button, {
    [styles.colorPrimary]: color,
    [styles.sizeLarge]: size,
    [styles.sectionButton]: true,
    [className]: !!className,
  });
  return (
    <button className={buttonClass} {...props}>
      {children}
      <span className={styles.text}>Text here</span>
    </button>
  );
};

export const buttonPrimaryIconSizeLarge = (
  color = "primary",
  size = "large",
  className,
  children,
  ...props
) => {
  const buttonClass = cn(styles.button, {
    [styles.colorPrimary]: color,
    [styles.sizeLarge]: size,
    [sizeLargeIcon]: true,
    [styles.sectionButton]: true,
    [className]: !!className,
  });
  return (
    <button className={buttonClass} {...props}>
      <Bin />
      {children}
    </button>
  );
};

export const ButtonSecondaryLargeWhithIcon = (
  color = "secondary",
  size = "large",
  className,
  children,
  ...props
) => {
  const buttonClass = cn(styles.button, {
    [styles.colorSecondary]: color,
    [styles.sizeLarge]: size,
    [styles.sectionButton]: true,
    [className]: !!className,
  });
  return (
    <button className={buttonClass} {...props}>
      <Bin />
      {children}
      <span className={styles.text}>Text here</span>
    </button>
  );
};

export const ButtonSecondaryLarge = (
  color = "secondary",
  size = "large",
  className,
  children,
  ...props
) => {
  const buttonClass = cn(styles.button, {
    [styles.colorSecondary]: color,
    [styles.sizeLarge]: size,
    [styles.sectionButton]: true,
    [className]: !!className,
  });
  return (
    <button className={buttonClass} {...props}>
      {children}
      <span className={styles.text}>Text here</span>
    </button>
  );
};

export const buttonSecondaryIconSizeLarge = (
  color = "secondary",
  size = "large",
  className,
  children,
  ...props
) => {
  const buttonClass = cn(styles.button, {
    [styles.colorSecondary]: color,
    [styles.sizeLarge]: size,
    [sizeLargeIcon]: true,
    [styles.sectionButton]: true,
    [className]: !!className,
  });
  return (
    <button className={buttonClass} {...props}>
      <Bin />
      {children}
    </button>
  );
};

export const ButtonTertiaryLargeWhithIcon = (
  color = "tertiary",
  size = "large",
  className,
  children,
  ...props
) => {
  const buttonClass = cn(styles.button, {
    [styles.colorTertiary]: color,
    [styles.sizeLarge]: size,
    [styles.sectionButton]: true,
    [className]: !!className,
  });
  return (
    <button className={buttonClass} {...props}>
      <Bin />
      {children}
      <span className={styles.text}>Text here</span>
    </button>
  );
};

export const ButtonTertiaryLarge = (
  color = "tertiary",
  size = "large",
  className,
  children,
  ...props
) => {
  const buttonClass = cn(styles.button, {
    [styles.colorTertiary]: color,
    [styles.sizeLarge]: size,
    [styles.sectionButton]: true,
    [className]: !!className,
  });
  return (
    <button className={buttonClass} {...props}>
      {children}
      <span className={styles.text}>Text here</span>
    </button>
  );
};

export const buttonTertiaryIconSizeLarge = (
  color = "tertiary",
  size = "large",
  className,
  children,
  ...props
) => {
  const buttonClass = cn(styles.button, {
    [styles.colorTertiary]: color,
    [styles.sizeLarge]: size,
    [sizeLargeIcon]: true,
    [styles.sectionButton]: true,
    [className]: !!className,
  });
  return (
    <button className={buttonClass} {...props}>
      <Bin />
      {children}
    </button>
  );
};

export const ButtonPrimaryMediumWhithIcon = (
  color = "primary",
  size = "medium",
  className,
  children,
  ...props
) => {
  const buttonClass = cn(styles.button, {
    [styles.colorPrimary]: color,
    [styles.sizeMedium]: size,
    [styles.sectionButton]: true,
    [className]: !!className,
  });
  return (
    <button className={buttonClass} {...props}>
      <Bin />
      {children}
      <span className={styles.text}>Text here</span>
    </button>
  );
};

export const ButtonPrimaryMedium = (
  color = "primary",
  size = "medium",
  className,
  children,
  ...props
) => {
  const buttonClass = cn(styles.button, {
    [styles.colorPrimary]: color,
    [styles.sizeMedium]: size,
    [styles.sectionButton]: true,
    [className]: !!className,
  });
  return (
    <button className={buttonClass} {...props}>
      {children}
      <span className={styles.text}>Text here</span>
    </button>
  );
};

export const buttonPrimaryIconSizeMedium = (
  color = "primary",
  size = "medium",
  className,
  children,
  ...props
) => {
  const buttonClass = cn(styles.button, {
    [styles.colorPrimary]: color,
    [styles.sizeMedium]: size,
    [sizeMediumIcon]: true,
    [styles.sectionButton]: true,
    [className]: !!className,
  });
  return (
    <button className={buttonClass} {...props}>
      <Bin />
      {children}
    </button>
  );
};

export const ButtonSecondaryMediumWhithIcon = (
  color = "secondary",
  size = "medium",
  className,
  children,
  ...props
) => {
  const buttonClass = cn(styles.button, {
    [styles.colorSecondary]: color,
    [styles.sizeMedium]: size,
    [styles.sectionButton]: true,
    [className]: !!className,
  });
  return (
    <button className={buttonClass} {...props}>
      <Bin />
      {children}
      <span className={styles.text}>Text here</span>
    </button>
  );
};

export const ButtonSecondaryMedium = (
  color = "secondary",
  size = "medium",
  className,
  children,
  ...props
) => {
  const buttonClass = cn(styles.button, {
    [styles.colorSecondary]: color,
    [styles.sizeMedium]: size,
    [styles.sectionButton]: true,
    [className]: !!className,
  });
  return (
    <button className={buttonClass} {...props}>
      {children}
      <span className={styles.text}>Text here</span>
    </button>
  );
};

export const buttonSecondaryIconSizeMedium = (
  color = "secondary",
  size = "medium",
  className,
  children,
  ...props
) => {
  const buttonClass = cn(styles.button, {
    [styles.colorSecondary]: color,
    [styles.sizeMedium]: size,
    [sizeMediumIcon]: true,
    [styles.sectionButton]: true,
    [className]: !!className,
  });
  return (
    <button className={buttonClass} {...props}>
      <Bin />
      {children}
    </button>
  );
};
export const SectionButton = () => {
  <div className={styles.section}>
    <ButtonPrimaryLargeWhithIcon />
    <ButtonPrimaryLarge />
    <buttonPrimaryIconSizeLarge />
  </div>;
};
export const ButtonTable = () => {
  return (
    <div className={styles.buttonTable}>
      <div className={styles.section}>
        <ButtonSecondaryLargeWhithIcon />
        <ButtonSecondaryLarge />
        <buttonSecondaryIconSizeLarge />
      </div>

      <div className={styles.section}>
        <ButtonTertiaryLargeWhithIcon />
        <ButtonTertiaryLarge />
        <buttonTertiaryIconSizeLarge />
      </div>

      <div className={styles.section}>
        <ButtonPrimaryMediumWhithIcon />
        <ButtonPrimaryMedium />
        <buttonPrimaryIconSizeMedium />
      </div>

      <div className={styles.section}>
        <ButtonSecondaryMediumWhithIcon />
        <ButtonSecondaryMedium />
        <buttonSecondaryIconSizeMedium />
      </div>
    </div>
  );
};
