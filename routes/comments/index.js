import express from "express";
const router = express.Router();

import commentsController from "../../controllers/comments/index.js";

// CREATE
router.post("/create", commentsController.create);

// LIST
router.get("/list", commentsController.list);

// GET COMMENTS BY TITLE
router.get("/", commentsController.getByTitle);

export const commentsRouter = router;
