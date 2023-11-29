import React from "react";
// import { useNavigate } from "react-router-dom";

import styles from "./MainPage.module.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MainContent from "../MainContent/MainContent";

export default function MainPage() {
  // const navigate = useNavigate();

  // function handleRegistration() {
  //   navigate("/registration");
  // }
  return (
    <div className={styles.size}>
      <div className={styles.background}></div>
      <body>
        <Header />
        <MainContent />
        <Footer />
      </body>
    </div>
  );
}
