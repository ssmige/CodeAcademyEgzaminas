import React from "react";
import styles from "./Button.module.css";

export default function Button({ onClick, buttonTitle, onClose, icon }) {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      onClose={onClose}
      icon={icon}
    >
      {buttonTitle}
    </button>
  );
}
