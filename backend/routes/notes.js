const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Note");

const { body, validationResult } = require("express-validator");

// Route 1 : Get all the notes using : GET "/api/notes/getuser" .login is required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json([notes]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server errors occurred");
  }
});

// Route 2: Add a new note using :POST "/api/notes/addnote" .login is required
// we need to validate notes also so that unwanted or irrelevant notes will not get stored
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 5 }),
    body(
      "description",
      "Description must be with 10 charcters minimum"
    ).isLength({
      min: 10,
    }),
  ],
  async (req, res) => {
    try {
      // destructuring concpept
      const { title, description, tag } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      // this will return a promise
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save();
      res.json([savedNote]);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server errors occurred");
    }
  }
);

// Route 3: update an existing Note using  :PUT "/api/notes/updatenote" .login is required

router.put(
  "/updatenote/:id", // to verify the user
  fetchuser,
  async (req, res) => {
    //destructuting all the entries
    const { title, description, tag } = req.body;
    try {
      //create new object note
      const newNote = {};
      if (title) {
        newNote.title = title;
      }
      if (description) {
        newNote.description = description;
      }
      if (tag) {
        newNote.tag = tag;
      }
      // find the node to be updated and update it
      let note = await Note.findById(req.params.id);
      if (!note) {
        return res.status(404).send("Not found");
      }
      // if the loged in user wants to change other user details
      if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Not allowed");
      }
      // find the id and passing newNote and new: true means that new content is created
      note = await Note.findByIdAndUpdate(
        req.params.id,
        { $set: newNote },
        { new: true }
      );
      res.json({ note });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server errors occurred");
    }
  }
);

// Route 4:Delete an existing Note using  :DELETE "/api/notes/deletenote" .login is required
router.delete(
  "/deletenote/:id", // to verify the user
  fetchuser,
  async (req, res) => {
    try {
      // find the node to be deleted and delete it
      let note = await Note.findById(req.params.id);
      if (!note) {
        return res.status(404).send("Not found");
      }
      // ALLOW deletions if users owns this once
      if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Not allowed");
      }
      // find the id and passing newNote and new: true means that new content is created
      note = await Note.findByIdAndDelete(req.params.id);
      res.json({ Successfull: " the note has been deleted ", note: note });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server errors occurred");
    }
  }
);

module.exports = router;
