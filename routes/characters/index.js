import express from "express";
const router = express.Router();

import charactersController from "../../controllers/characters/index.js";

// LIST
router.get("/list", charactersController.list);

export const charactersRouter = router;
