import express from "express";
const router = express.Router();

import commentsController from "../../controllers/comments/index.js";

// CREATE
router.post("/create", commentsController.create);

export const commentsRouter = router;
