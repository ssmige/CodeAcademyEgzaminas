import React from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import Button from "../Button/Button";

export default function Modal({
  children,
  isOpen,
  title,
  text,
  startIcon,
  variant,
  onClose,
  modalButtonLabel,
}) {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.header}>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
        {children}
        <>
          <button className={styles.modalButton} onClick={onClose}>
            {modalButtonLabel}
          </button>
        </>
      </div>
    </div>,
    document.body
  );
}
