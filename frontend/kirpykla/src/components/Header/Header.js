import React from "react";
import styles from "./Header.module.css";
import Button from "../Button/Button";

export default function Header() {
  return (
    <header>
      <div>
        <div className={styles.header}>
          <div className={styles.logo}>
            <img
              className={styles.logoImg}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjqXa5ESZCUjBUKYNYUaGIC_5N6WW2oM9oiDS8wn6hvg2e2J8a_odQizFqpbxiTsy5mls&usqp=CAU"
              alt="Logo"
            />
            <h3>Grožio salonas</h3>
          </div>
          <Button
            className={styles.button}
            // onClick={handleRegistration}
            buttonTitle={"Registracija vizitui"}
          />
        </div>
        <div>
          <nav className={styles.aTag}>
            <a href="">Apie mus</a>
            <a href="">Paslaugos</a>
            <a href="">Kontaktai</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
