import Client from "../models/Client.js";

export async function addNewClient(req, res) {
  const { name, surname, email, phoneNumber, registrationDate } = req.body;

  if (!name || !surname || !phoneNumber) {
    return res
      .status(400)
      .json({ message: "Name, surname and phone number required" });
  }

  try {
    const client = new Client({
      name,
      surname,
      email,
      phoneNumber,
      registrationDate,
    });

    await client.save();

    res.json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getAllClients(req, res) {
  try {
    const clients = await Client.find({}, { __v: 0 });
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getClientById(req, res) {
  const { id } = req.params;

  try {
    const client = await Client.findById(id);

    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }
    res.json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function deleteClient(req, res) {
  const { id } = req.params;
  try {
    const client = await Client.findById(id);

    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }

    await Client.findByIdAndDelete(id);

    res.status(204).json({ message: "Client deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateClient(req, res) {
  const { id } = req.params;
  const { name, surname, email, phoneNumber, registrationDate } = req.body;

  if (!name || !surname || !phoneNumber) {
    return res
      .status(404)
      .json({ message: "Name, surname and phone number is required" });
  }

  try {
    const client = await Client.findById(id);

    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }

    client.name = name;
    client.surname = surname;
    client.email = email;
    client.phoneNumber = phoneNumber;
    client.registrationDate = registrationDate;

    await client.save();

    res.json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
