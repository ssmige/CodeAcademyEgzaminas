import React from "react";
import styles from "./Input.module.css";

export default function Input({
  value,
  type,
  onChange,
  placholder,
  startIcon,
  endIcon,
  id,
  isValid,
  warningText,
  children,
}) {
  return (
    <>
      <div
        className={`${styles.wrapper} ${
          isValid ? styles.valid : styles.invalid
        }`}
      >
        {startIcon}
        {children}
        <input
          type={type}
          className={styles.input}
          value={value}
          onChange={onChange}
          placeholder={placholder}
          id={id}
        />

        {endIcon}
      </div>
      <p className={styles.warning}>{!isValid && <p>{warningText}</p>}</p>
    </>
  );
}
