import React from "react";
import styles from "./Label.module.css";

export default function Label({ text, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className={styles.label}>
      {text}
    </label>
  );
}
