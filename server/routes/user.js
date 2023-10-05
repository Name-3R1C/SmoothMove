const router = require("express").Router();
const db = require("../db");
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
  try {
    console.log("server - route - user");
    const name = req.body.user.name;
    const email = req.body.user.email;
    const password = req.body.user.password;
    const hashedPassword = bcrypt.hashSync(password, 10);

    if (!email || !password) {
      return res.status(400).send("Please provide an E-mail and password");
    }

    const addedUser = await db.addUser({name, email, hashedPassword})
    res.status(201).json(addedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error - register" });
  }
});

module.exports = router;