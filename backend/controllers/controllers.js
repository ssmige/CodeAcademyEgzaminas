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
