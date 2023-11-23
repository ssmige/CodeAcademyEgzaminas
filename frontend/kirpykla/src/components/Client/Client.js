import React from "react";

export default function Client({ client }) {
  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.surname}</td>
      <td>{client.email}</td>
      <td>{client.phoneNumber}</td>
      <td>{client.registrationDate}</td>
    </tr>
  );
}
