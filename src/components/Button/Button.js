import React from "react";
import cn from "classnames";
import styles from "./Button.module.css";
import { ReactComponent as Bin } from "../../icons/bin.svg";

export const ButtonPrimaryLargeWhithIcon = ({ color, size, className }) => {
  const buttonClass = cn(styles.button, {
    [styles.colorPrimary]: color,
    [styles.sizeLarge]: size,
    [styles.sectionButton]: true,
    [className]: !!className,
  });
  return (
    <button className={buttonClass}>
      <Bin className={styles.icon} />
      <span className={styles.text}>Text here</span>
    </button>
  );
};

export const ButtonPrimaryLarge = ({ color, size, className }) => {
  const buttonClass = cn(styles.button, {
    [styles.colorPrimary]: color,
    [styles.sizeLarge]: size,
    [styles.sectionButton]: true,
    [className]: !!className,
  });
  return (
    <button className={buttonClass}>
      <span className={styles.text}>Text here</span>
    </button>
  );
};

export const buttonPrimarySizeLargeIcon = ({ color, size, className }) => {
  const buttonClass = cn(styles.button, {
    [styles.colorPrimary]: color,
    [styles.sizeLarge]: size,
    [styles.sizeLargeIcon]: true,
    [styles.sectionButton]: true,
    [className]: !!className,
  });
  return (
    <button className={buttonClass}>
      <Bin className={styles.icon} />
    </button>
  );
};

export const ButtonSecondaryLargeWhithIcon = ({ color, size, className }) => {
  const buttonClass = cn(styles.button, {
    [styles.colorSecondary]: color,
    [styles.sizeLarge]: size,
    [styles.sectionButton]: true,
    [className]: !!className,
  });
  return (
    <button className={buttonClass}>
      <Bin className={styles.icon} />
      <span className={styles.text}>Text here</span>
    </button>
  );
};

export const ButtonSecondaryLarge = ({ color, size, className }) => {
  const buttonClass = cn(styles.button, {
    [styles.colorSecondary]: color,
    [styles.sizeLarge]: size,
    [styles.sectionButton]: true,
    [className]: !!className,
  });
  return (
    <button className={buttonClass}>
      <span className={styles.text}>Text here</span>
    </button>
  );
};

export const buttonSecondaryIconSizeLarge = ({ color, size, className }) => {
  const buttonClass = cn(styles.button, {
    [styles.colorSecondary]: color,
    [styles.sizeLarge]: size,
    [styles.sizeLargeIcon]: true,
    [styles.sectionButton]: true,
    [className]: !!className,
  });
  return (
    <button className={buttonClass}>
      <Bin className={styles.icon} />
    </button>
  );
};

export const ButtonTertiaryLargeWhithIcon = ({ color, size, className }) => {
  const buttonClass = cn(styles.button, {
    [styles.colorTertiary]: color,
    [styles.sizeLarge]: size,
    [styles.sectionButton]: true,
    [className]: !!className,
  });
  return (
    <button className={buttonClass}>
      <Bin className={styles.icon} />
      <span className={styles.text}>Text here</span>
    </button>
  );
};

export const ButtonTertiaryLarge = ({ color, size, className }) => {
  const buttonClass = cn(styles.button, {
    [styles.colorTertiary]: color,
    [styles.sizeLarge]: size,
    [styles.sectionButton]: true,
    [className]: !!className,
  });
  return (
    <button className={buttonClass}>
      <span className={styles.text}>Text here</span>
    </button>
  );
};

export const buttonTertiaryIconSizeLarge = ({ color, size, className }) => {
  const buttonClass = cn(styles.button, {
    [styles.colorTertiary]: color,
    [styles.sizeLarge]: size,
    [styles.sizeLargeIcon]: true,
    [styles.sectionButton]: true,
    [className]: !!className,
  });
  return (
    <button className={buttonClass}>
      <Bin className={styles.icon} />
    </button>
  );
};

export const ButtonPrimaryMediumWhithIcon = ({ color, size, className }) => {
  const buttonClass = cn(styles.button, {
    [styles.colorPrimary]: color,
    [styles.sizeMedium]: size,
    [styles.sectionButton]: true,
    [className]: !!className,
  });
  return (
    <button className={buttonClass}>
      <Bin className={styles.icon} color={color} size={size} />
      <span className={styles.text}>Text here</span>
    </button>
  );
};

export const ButtonPrimaryMedium = ({ color, size, className }) => {
  const buttonClass = cn(styles.button, {
    [styles.colorPrimary]: color,
    [styles.sizeMedium]: size,
    [styles.sectionButton]: true,
    [className]: !!className,
  });
  return (
    <button className={buttonClass}>
      <span className={styles.text}>Text here</span>
    </button>
  );
};

export const buttonPrimaryIconSizeMedium = ({ color, size, className }) => {
  const buttonClass = cn(styles.button, {
    [styles.colorPrimary]: color,
    [styles.sizeMedium]: size,
    [styles.sizeMediumIcon]: true,
    [styles.sectionButton]: true,
    [className]: !!className,
  });
  return (
    <button className={buttonClass}>
      <Bin className={styles.icon} />
    </button>
  );
};

export const ButtonSecondaryMediumWhithIcon = ({ color, size, className }) => {
  const buttonClass = cn(styles.button, {
    [styles.colorSecondary]: color,
    [styles.sizeMedium]: size,
    [styles.sectionButton]: true,
    [className]: !!className,
  });
  return (
    <button className={buttonClass}>
      <Bin className={styles.icon} />
      <span className={styles.text}>Text here</span>
    </button>
  );
};

export const ButtonSecondaryMedium = ({ color, size, className }) => {
  const buttonClass = cn(styles.button, {
    [styles.colorSecondary]: color,
    [styles.sizeMedium]: size,
    [styles.sectionButton]: true,
    [className]: !!className,
  });
  return (
    <button className={buttonClass}>
      <span className={styles.text}>Text here</span>
    </button>
  );
};

export const buttonSecondaryIconSizeMedium = ({ color, size, className }) => {
  const buttonClass = cn(styles.button, {
    [styles.colorSecondary]: color,
    [styles.sizeMedium]: size,
    [styles.sizeMediumIcon]: true,
    [styles.sectionButton]: true,
    [className]: !!className,
  });
  return (
    <button className={buttonClass}>
      <Bin />
    </button>
  );
};

export const SectionButtonPrimaryLarge = (color, size) => {
  return (
    <div className={styles.section}>
      <ButtonPrimaryLargeWhithIcon color={color} size={size} />
      <ButtonPrimaryLarge color={color} size={size} />
      <buttonPrimarySizeLargeIcon color={color} size={size} />
    </div>
  );
};

export const SectionButtonSecondaryLarge = (color, size) => {
  return (
    <div className={styles.section}>
      <ButtonSecondaryLargeWhithIcon color={color} size={size} />
      <ButtonSecondaryLarge color={color} size={size} />
      <buttonSecondaryIconSizeLarge color={color} size={size} />
    </div>
  );
};

export const SectionButtonTertiaryLarge = (color, size) => {
  return (
    <div className={styles.section}>
      <ButtonTertiaryLargeWhithIcon color={color} size={size} />
      <ButtonTertiaryLarge color={color} size={size} />
      <buttonTertiaryIconSizeLarge color={color} size={size} />
    </div>
  );
};

export const SectionButtonPrimaryMedium = (color, size) => {
  return (
    <div className={styles.section}>
      <ButtonPrimaryMediumWhithIcon color={color} size={size} />
      <ButtonPrimaryMedium color={color} size={size} />
      <buttonPrimaryIconSizeMedium color={color} size={size} />
    </div>
  );
};

export const SectionButtonSecondaryMedium = (color, size) => {
  return (
    <div className={styles.section}>
      <ButtonSecondaryMediumWhithIcon color={color} size={size} />
      <ButtonSecondaryMedium color={color} size={size} />
      <buttonSecondaryIconSizeMedium color={color} size={size} />
    </div>
  );
};

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
