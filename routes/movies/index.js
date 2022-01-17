import express from "express";
const router = express.Router();

import moviesController from "../../controllers/movies/index.js";

// LIST
router.get("/list", moviesController.list);

export const moviesRouter = router;
