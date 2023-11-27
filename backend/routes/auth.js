const express = require("express");
const router = express.Router();
const User = require("../models/User");

const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET='ARUNSAH';
//create a User using :POST "/api/auth/createuser"  .Doesn't require Auth

router.post(
  "/createuser",
  [
    body("email", "Enter a valid email").isEmail(),
    body("name", "Enter a valid name").isLength({ min: 5 }),
    body("password", "Password must with 8 charcters minimum").isLength({
      min: 8,
    }),
  ],
  async (req, res) => {
    // if there are errors return bad request and the errors
    // console.log(req.body);
    // const user=User(req.body);
    // user.save();
    // res.send(req.body)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // check whether the user with email exists already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exists" });
      }
      // to generate salt
      const salt=await bcrypt.genSalt(10);
      const secPass= await bcrypt.hash(req.body.password,salt);
      //create a new user
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });
      //   .then((user) => res.json(user))
      //   .catch((err) => {
      //     console.log(err);
      //     res.json({ error: "Please enter a unique value for Email",message:err.message });
      //   });
      const data={
        user:{
            id:user.id,
        }
      }
      const authtoken=jwt.sign(data,JWT_SECRET);
    //   console.log(jwtData); to know the tokens
      res.json({authtoken});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some errors occurred");
    }
  }
);

module.exports = router;
