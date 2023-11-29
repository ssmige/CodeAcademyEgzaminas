import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Client from "../Client/Client";
import Modal from "../Modal/Modal";
import NewClient from "../NewClient/NewClient";
import Button from "../Button/Button";

const endpoint = "http://localhost:3001/registration";

export default function ClientsList() {
  const [clients, setClients] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isNewClientAdded, setIsNewClientAdded] = useState(false);

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
    if (isNewClientAdded) {
      setIsNewClientAdded(true);
      setIsModalOpen(false);
    }
    axios
      .get(endpoint)
      .then(({ data }) => setClients(data))

      .catch(() => alert("klaida"));
  }, [isNewClientAdded]);

  return (
    <div>
      <Button onClick={handleBack} buttonTitle={"Grįžti"} />
      <Button
        onClick={handleButtonNewClient}
        buttonTitle={"Įvesti naują klientą"}
      />

      <table>
        <thead>
          <tr>
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
        <NewClient onClose={handleCancel} />
      </Modal>
    </div>
  );
}
