import React, { useEffect, useState } from "react";
import styles from "./NewClient.module.css";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Label from "../Label/Label";
import RegistrationDate from "../RegistrationDate/RegistrationDate";

const endpoint = "http://localhost:3001/registration";

export default function NewClient({ onClose, setClients }) {
  // const navigate = useNavigate();

  const [name, setName] = useState("");
  const [isNameValid, setIsNameValid] = useState(false);
  const [surname, setSurname] = useState("");
  const [isSurnameValid, setIsSurnameValid] = useState(true);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [registrationDate, setRegistrationDate] = useState("");
  const [isRegistrationDateValid, setIsRegistrationDateValid] = useState(false);

  useEffect(() => {
    const currentTime = new Date();
    const selectedTime = registrationDate ? new Date(registrationDate) : null;

    if (name.length <= 2) {
      setIsNameValid(false);
    } else {
      setIsNameValid(true);
    }

    if (surname.length <= 2) {
      setIsSurnameValid(false);
    } else {
      setIsSurnameValid(true);
    }

    if (email.includes("@")) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }

    if (!selectedTime || selectedTime > currentTime) {
      setIsRegistrationDateValid(true);
    } else {
      setIsRegistrationDateValid(false);
      alert("Patikrinkite registracijos laiką, praėjusi data negalima");
    }
  }, [name, surname, email, registrationDate]);

  function handleSubmit(e) {
    e.preventDefault();
    if (
      isNameValid &&
      isEmailValid &&
      isSurnameValid &&
      isRegistrationDateValid
    )
      axios
        .post(`${endpoint}`, {
          name,
          surname,
          email,
          registrationDate,
        })
        .then(() => {
          axios
            .get(endpoint)
            .then(({ data }) => setClients(data))
            .catch(() => alert("klaida"));
          alert("pridejo");
          onClose();
        })
        .catch((error) => {
          alert("Ivyko klaida");
        });
  }

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <Label text={"Name"} />
      <Input
        startIcon={<i className="fa-solid fa-user"> </i>}
        endIcon={isNameValid ? <i className={"fa-solid fa-check"}></i> : null}
        type={"text"}
        onChange={(e) => setName(e.target.value)}
        placeholder={"Enter name"}
        value={name}
        isValid={isNameValid}
        placholder={"Įveskite vardą"}
        warningText={"Vardas privalomas"}
      />
      <Label text={"Pavardė"} htmlFor={"surname"} />
      <Input
        startIcon={<i className="fa-solid fa-user"> </i>}
        endIcon={
          isSurnameValid ? <i className={"fa-solid fa-check"}></i> : null
        }
        value={surname}
        isValid={isSurnameValid}
        type={"text"}
        id={"surname"}
        onChange={(e) => setSurname(e.target.value)}
        placholder={"Įveskite pavardę"}
        warningText={"Pavardė privaloma"}
      />
      <Label text={"El.paštas"} htmlFor={"email"} />
      <Input
        type={"email"}
        startIcon={<i className="fa-solid fa-envelope "></i>}
        endIcon={isEmailValid ? <i className={"fa-solid fa-check"}></i> : null}
        isValid={isEmailValid}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placholder={"Įveskite el. paštą"}
        warningText={"El. paštas privalomas"}
      />

      {/* <Input
        onChange={(e) => setRegistrationDate(e.target.value)}
        isValid={isRegistrationDateValid}
        endIcon={
          isRegistrationDateValid ? (
            <i className={"fa-solid fa-check"}></i>
          ) : null
        }
      ></Input> */}

      <Label text={"Registracijos laikas"} htmlFor={"registrationDate"} />
      <RegistrationDate
        placeholderText={"Pasirinkite vizito laiką"}
        registrationDate={registrationDate}
        setRegistrationDate={setRegistrationDate}
      />
      <Button
        type={"submit"}
        onClick={handleSubmit}
        buttonTitle={"Pridėti klientą"}
      />
    </form>
  );
}
