import Notes from "../model/Notes.js";
import getToken from "../utils/jwt/get-token.js";
import getUserByToken from "../utils/jwt/get-user-by-token.js";

class NotesController {
  
  async createNotes(req, res) {
    const { description } = req.body;
    const token = getToken(req);

    try {
      const user = await getUserByToken(token);
      
      if (!description) {
        return res.status(422).json({ message: "Description is mandatory!" });
      }

      const newNote = await Notes.create({
        description,
        userId: user.id, 
      });

      res.status(201).json(newNote);
    } catch (error) {
      console.error("Error creating note:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async updateNotes(req, res) {
    const { description } = req.body;
    const token = getToken(req);

    try {
      const user = await getUserByToken(token);
      const note = await Notes.findOne({ where: { id_notes: req.params.id, userId: user.id } });

      if (!note) {
        return res.status(404).json({ message: "Note not found!" });
      }

      await note.update({ description: description || note.description });

      res.status(200).json(note);
    } catch (error) {
      console.error("Error updating note:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async deleteNotes(req, res) {
    const token = getToken(req);

    try {
      const user = await getUserByToken(token);
      const note = await Notes.findOne({ where: { id_notes: req.params.notesId, userId: user.id } });

      if (!note) {
        return res.status(404).json({ message: "Note not found!" });
      }

      await Notes.destroy({
         where: { 
            id_notes: req.params.notesId, 
            userId: user.id 
        } 
      });

      res.status(200).json({ message: "Note deleted successfully!" });
    } catch (error) {
      console.error("Error deleting note:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async findNotes(req, res) {
    const token = getToken(req);

    try {
      const user = await getUserByToken(token);
      const note = await Notes.findOne({ where: { id_notes: req.params.notesId, userId: user.id } });

      if (!note) {
        return res.status(404).json({ message: "Note not found!" });
      }

      res.status(200).json(note);
    } catch (error) {
      console.error("Error finding note:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async findAllNotes(req, res) {
    const token = getToken(req);

    try {
      const user = await getUserByToken(token);
      const notes = await Notes.findAll({ where: { userId: user.id } });
      
      res.status(200).json(notes);
    } catch (error) {
      console.error("Error finding notes:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

export default new NotesController();
