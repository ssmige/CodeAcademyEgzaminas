import express from "express";
import { addNewClient } from "../controllers/controllers.js";

const router = express.Router();

// router.get("./registration");

router.post("/registration", addNewClient);

// router.delete("./registration/:id");

// router.put("./registration/:id");

export default router;
