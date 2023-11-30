import React from "react";
import buttonStyles from "./Button.module.css";

export default function Button({
  onClick,
  buttonTitle,
  onClose,
  icon,
  className,
}) {
  return (
    <button
      onClick={onClick}
      onClose={onClose}
      icon={icon}
      className={`${buttonStyles.button} ${className}`}
    >
      {buttonTitle}
    </button>
  );
}
