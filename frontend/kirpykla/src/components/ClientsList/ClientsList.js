import React, { useState, useEffect } from "react";
import axios from "axios";
import Client from "../Client/Client";

const endpoint = "http://localhost:3001/registration";

export default function ClientsList() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios
      .get(endpoint)
      .then(({ data }) => setClients(data))
      .catch(() => alert("klaida"));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Vardas</th>
            <th>Pavardė</th>
            <th>El.paštas</th>
            <th>Tel. numeris</th>
            <th>Registracijos laikas</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => {
            return <Client client={client} key={client._id} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
