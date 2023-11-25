import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const endpoint = "http://localhost:3001/registration";

export default function Client({ client, setClients }) {
  const navigate = useNavigate();

  function handleDelete() {
    axios
      .delete(`${endpoint}/${client._id}`)
      .then(() => {
        setClients((prev) => prev.filter((p) => p._id !== client._id));
      })
      .catch(() => alert("Nepavyko ištrinti"));
  }

  function handleUpdate() {
    navigate(`/edit/${client._id}`);
  }

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.surname}</td>
      <td>{client.email}</td>
      <td>
        {new Date(client.registrationDate).toLocaleString(`lt-LT`, {
          year: `numeric`,
          month: `2-digit`,
          day: `2-digit`,
          hour: `2-digit`,
          minute: `2-digit`,
          hour12: false,
        })}
      </td>
      <td>
        <button onClick={handleDelete}>Ištrinti</button>
      </td>
      <td>
        <button onClick={handleUpdate}>Atnaujinti</button>
      </td>
    </tr>
  );
}
