import express from "express";
import {
  addNewClient,
  deleteClient,
  getAllClients,
  getClientById,
  updateClient,
} from "../controllers/controllers.js";

const router = express.Router();

router.get("/registration", getAllClients);

router.get("/registration/:id", getClientById);

router.post("/registration", addNewClient);

router.delete("/registration/:id", deleteClient);

router.put("/registration/:id", updateClient);

export default router;
