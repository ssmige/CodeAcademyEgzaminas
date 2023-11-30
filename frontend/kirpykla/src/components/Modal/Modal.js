import React from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import Button from "../Button/Button";
import buttonStyles from "../Button/Button.module.css";

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
        <div>
          <div className={styles.header}>
            <h1>{title}</h1>
            <Button
              className={buttonStyles.modalCancel}
              buttonTitle={"Atšaukti"}
              onClick={onClose}
            />
          </div>

          <p>{text}</p>
        </div>
        {children}
        <>
          {/* <Button
            className={[
              buttonStyles.modalCancel,
              buttonStyles.buttonPositionRigth,
            ].join(" ")}
            buttonTitle={"Atšaukti"}
            onClick={onClose}
          /> */}
        </>
      </div>
    </div>,
    document.body
  );
}
