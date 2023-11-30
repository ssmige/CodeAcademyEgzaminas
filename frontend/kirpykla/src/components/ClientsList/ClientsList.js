import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Client from "../Client/Client";
import Modal from "../Modal/Modal";
import NewClient from "../NewClient/NewClient";
import Button from "../Button/Button";

import mainStyles from "../MainPage/MainPage.module.css";
import tableStyles from "./ClientsList.module.css";
const endpoint = "http://localhost:3001/registration";

export default function ClientsList() {
  const [clients, setClients] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  function handleButtonNewClient() {
    setIsModalOpen(true);
  }
  function handleCancel() {
    setIsModalOpen(false);
  }
  function handleBack() {
    navigate("/");
  }
  useEffect(() => {
    axios
      .get(endpoint)
      .then(({ data }) => setClients(data))

      .catch(() => alert("klaida"));
  }, []);

  return (
    <div className={mainStyles.size}>
      <div className={mainStyles.background}></div>
      <body className={tableStyles.listContainer}>
        <header className={tableStyles.listHeader}>
          <Button onClick={handleBack} buttonTitle={"Grįžti"} />
          <h1 className={tableStyles.header}>Klientų sąrašas</h1>
          <Button
            onClick={handleButtonNewClient}
            buttonTitle={"Įvesti naują klientą"}
          />
        </header>
        <table className={tableStyles.tableContainer}>
          <thead className={tableStyles.tableHead}>
            <tr className={tableStyles.tableTr}>
              <th>Vardas</th>
              <th>Pavardė</th>
              <th>El.paštas</th>
              <th>Registracijos laikas</th>
              <th>Ištrinti</th>
              <th>Atnaujinti</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => {
              return (
                <Client
                  setClients={setClients}
                  client={client}
                  key={client._id}
                />
              );
            })}
          </tbody>
        </table>
        <Modal
          isOpen={isModalOpen}
          title={"Naujas klientas"}
          onClose={handleCancel}
          modalButtonLabel={"Atšaukti"}
        >
          <NewClient onClose={handleCancel} setClients={setClients} />
        </Modal>
      </body>
    </div>
  );
}
