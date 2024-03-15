const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Mark = require("../models/Mark");

const { body, validationResult } = require("express-validator");

// Route 1 : Get all the marks using : GET "/api/marks/getuser" .login is required
router.get("/fetchallmarks", fetchuser, async (req, res) => {
  try {
    const marks = await Mark.find({ user: req.user.id });
    res.json(marks);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server errors occurred");
  }
});

// Route 2: Add a new mark using :POST "/api/marks/addmark" .login is required
// we need to validate marks also so that unwanted or irrelevant marks will not get stored
router.post(
  "/addmark",
  fetchuser,
  [
    body("Name", "Enter a valid Name").isLength({ min: 5 }),
    body("Email", "Email must be with 10 charcters minimum").isLength({
      min: 10,
    }),
  ],
  async (req, res) => {
    try {
      // destructuring concpept
      const {
        Name,
        Email,
        Phone_Number,
        Ideation,
        Execution,
        Presentation,
        Communication,
        Viva,
      } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      // this will return a promise
      const mark = new Mark({
        Name,
        Email,
        Phone_Number,
        Ideation,
        Execution,
        Presentation,
        Communication,
        Viva,
        user: req.user.id,
      });
      const savedmark = await mark.save();
      res.json([savedmark]);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server errors occurred");
    }
  }
);

// Route 3: update an existing Mark using  :PUT "/api/marks/updatemark" .login is required

router.put(
  "/updatemark/:id", // to verify the user
  fetchuser,
  async (req, res) => {
    //destructuting all the entries
    const {
      Name,
      Email,
      Phone_Number,
      Ideation,
        Execution,
        Presentation,
        Communication,
        Viva,
    } = req.body;
    try {
      //create new object mark
      const newmark = {};
      if (Name) {
        newmark.Name = Name;
      }
      if (Email) {
        newmark.Email = Email;
      }
      if (Phone_Number) {
        newmark.Phone_Number = Phone_Number;
      }
      if (Ideation) {
        newmark.Ideation = Ideation;
      }
      if (Execution) {
        newmark.Execution = Execution;
      }
      if (Presentation) {
        newmark.Presentation = Presentation;
      }
      if (Communication) {
        newmark.Communication= Communication;
      }
      if (Viva) {
        newmark.Viva= Viva;
      }


      // find the node to be updated and update it
      let mark = await Mark.findById(req.params.id);
      if (!mark) {
        return res.status(404).send("Not found");
      }
      // if the loged in user wants to change other user details
      if (mark.user.toString() !== req.user.id) {
        return res.status(401).send("Not allowed");
      }
      // find the id and passing newmark and new: true means that new content is created
      mark = await Mark.findByIdAndUpdate(
        req.params.id,
        { $set: newmark },
        { new: true }
      );
      res.json({ mark });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server errors occurred");
    }
  }
);

// Route 4:Delete an existing Mark using  :DELETE "/api/marks/deletemark" .login is required
router.delete(
  "/deletemark/:id", // to verify the user
  fetchuser,
  async (req, res) => {
    try {
      // find the node to be deleted and delete it
      let mark = await Mark.findById(req.params.id);
      if (!mark) {
        return res.status(404).send("Not found");
      }
      // ALLOW deletions if users owns this once
      if (mark.user.toString() !== req.user.id) {
        return res.status(401).send("Not allowed");
      }
      // find the id and passing newmark and new: true means that new content is created
      mark = await Mark.findByIdAndDelete(req.params.id);
      res.json({ Successfull: " the mark has been deleted ", mark: mark });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server errors occurred");
    }
  }
);

module.exports = router;
