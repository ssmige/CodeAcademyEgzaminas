import React from "react";
import styles from "./MainContent.module.css";

export default function MainContent() {
  return (
    <main>
      <section className={styles.section}>
        <div className={styles.sectionHeigth}>
          <h2>Nebūtina patiems kankintis</h2>
          <div className={styles.image}>
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/haircut-reflection-royalty-free-image-1584937350.jpg?resize=980:*"
              alt="vyras kerpasi"
            />
          </div>
          <h1>Pasitikėkite profesionalais</h1>
        </div>
      </section>
    </main>
  );
}
