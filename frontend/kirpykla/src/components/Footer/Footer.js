import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr />
      <div className={styles.footerInfo}>
        <div className={styles.footerLogo}>
          <img
            className={styles.footerLogoImg}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjqXa5ESZCUjBUKYNYUaGIC_5N6WW2oM9oiDS8wn6hvg2e2J8a_odQizFqpbxiTsy5mls&usqp=CAU"
            alt="Logo"
          />
          <div>
            <h4>Apie mus</h4>
            <h4>Kontaktai</h4>
          </div>
        </div>
        <div>
          <div className={styles.socialIcons}>
            <i className={"icon-black fa-brands fa-twitter"}></i>
            <i className={"icon-black fa-brands fa-youtube"}></i>
            <i className={"icon-black fa-brands fa-instagram"}></i>
            <i className={"icon-black fa-brands fa-facebook-f"}></i>
          </div>
        </div>
      </div>
      <div className={styles.copyRights}>
        <div>&copy; 2023 Copyrights</div>
      </div>
    </footer>
  );
}
