import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import RegistrationDate from "../RegistrationDate/RegistrationDate";

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
        navigate("/");
      })
      .catch(() => alert("Ivyko klaida"));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Vardas</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="surname">Pavardė</label>
        <input
          id="surname"
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <br />
        <label htmlFor="email">El.paštas</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <RegistrationDate
          registrationDate={registrationDate}
          setRegistrationDate={setRegistrationDate}
        />
        <br />
        <button type="submit">Išsaugoti</button>
      </form>
    </div>
  );
}
