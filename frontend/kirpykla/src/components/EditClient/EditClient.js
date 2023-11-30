import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import RegistrationDate from "../RegistrationDate/RegistrationDate";
import styles from "./EditClient.module.css";
import mainStyles from "../MainPage/MainPage.module.css";
import Button from "../Button/Button.js";
import buttonStyles from "../Button/Button.module.css";

const endpoint = "http://localhost:3001/registration";

export default function EditClient() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [registrationDate, setRegistrationDate] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${endpoint}/${id}`).then(({ data }) => {
      setName(data.name);
      setSurname(data.surname);
      setEmail(data.email);
      setRegistrationDate(data.registrationDate);
    });
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .put(`${endpoint}/${id}`, {
        name,
        surname,
        email,
        registrationDate,
      })
      .then(() => {
        navigate("/registration");
      })
      .catch(() => alert("Ivyko klaida"));
  }
  function handleCancel() {
    navigate("/registration");
  }
  return (
    <div className={mainStyles.size}>
      <div className={mainStyles.background}></div>
      <body>
        <h1>Atnaujinti kliento duomenis</h1>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="name">
            Vardas
          </label>
          <input
            className={styles.input}
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label className={styles.label} htmlFor="surname">
            Pavardė
          </label>
          <input
            className={styles.input}
            id="surname"
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
          <br />
          <label className={styles.label} htmlFor="email">
            El.paštas
          </label>
          <input
            className={styles.input}
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label className={styles.label} htmlFor="email">
            Registacijos laikas
          </label>
          <RegistrationDate
            registrationDate={registrationDate}
            setRegistrationDate={setRegistrationDate}
          />
          <br />
          <div className={styles.buttonPosition}>
            <Button
              className={buttonStyles.modalCancel}
              type="onClick"
              onClick={handleCancel}
              buttonTitle={"Atšaukti"}
            />
            <Button type="submit" buttonTitle={"Išsaugoti pakeitimus"} />
          </div>
        </form>
      </body>
    </div>
  );
}
