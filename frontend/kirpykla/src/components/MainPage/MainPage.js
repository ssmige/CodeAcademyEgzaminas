import React from "react";
import mainStyles from "./MainPage.module.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MainContent from "../MainContent/MainContent";

export default function MainPage() {
  return (
    <div className={mainStyles.size}>
      <div className={mainStyles.background}></div>
      <body>
        <Header />
        <MainContent />
        <Footer />
      </body>
    </div>
  );
}
