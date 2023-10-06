const router = require("express").Router();
const db = require("../db");
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
  try {
    console.log("server - route - user");
    const firstName = req.body.user.firstName;
    const lastName = req.body.user.lastName;
    const email = req.body.user.email;
    const password = req.body.user.password;
    const hashedPassword = bcrypt.hashSync(password, 10);

    if (!email || !password) {
      return res.status(400).send("Please provide an E-mail and password");
    }

    const userExists = await db.getUserByEmail(email);
    if (userExists) {
      console.log('userExist----', userExists);
      return res.status(409).send("E-mail already registed");
    }
    
    const addedUser = await db.addUser({firstName, lastName, email, hashedPassword});
    res.status(201).json('Added New User');

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error - register" });
  }
});

module.exports = router;