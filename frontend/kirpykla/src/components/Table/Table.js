import React from "react";

export default function Table({ name, surname, email, registrationDate }) {
  return (
    <div>
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
          {/* {clients.map((client) => {
              return (
                <Client
                  setClients={setClients}
                  client={client}
                  key={client._id}
                />
              );
            })} */}
        </tbody>
      </table>
    </div>
  );
}
