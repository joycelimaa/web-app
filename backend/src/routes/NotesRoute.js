import express from "express";
import NotesController from "../controller/NotesController.js";
import checkToken from "../utils/jwt/verify-token.js";

const notesRoutes = express.Router();

notesRoutes.post("/create", NotesController.createNotes)
notesRoutes.put("/:id", NotesController.updateNotes)
notesRoutes.get("/:userId/:notesId", checkToken, NotesController.findNotes)
notesRoutes.get("/:userId", checkToken, NotesController.findAllNotes)
notesRoutes.delete("/:userId/:notesId", checkToken, NotesController.deleteNotes)

export { notesRoutes as default};