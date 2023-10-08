const router = require("express").Router();
const db = require("../db");
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
  try {
    console.log("server - user - register");
    const firstName = req.body.user.firstName;
    const lastName = req.body.user.lastName;
    const email = req.body.user.email;
    const password = req.body.user.password;
    const hashedPassword = bcrypt.hashSync(password, 10);

    if (!firstName || !lastName) {
      return res.send("Please provide an First and Last name");
    }
    if (!email || !password) {
      return res.send("Please provide an E-mail and password");
    }

    const userExists = await db.getUserByEmail(email);
    if (userExists) {
      return res.send("E-mail already registed");
    }
    
    const addedUser = await db.addUser({firstName, lastName, email, hashedPassword});
    console.log('addedUser----- ', addedUser.id);
    res.status(201).json({ userID:addedUser.id, firstName:firstName});

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error - register" });
  }
});

router.post("/signin", async (req, res) => {
  try {
    console.log("server - user - signin");
    const email = req.body.user.email;
    const password = req.body.user.password;

    if (!email || !password) {
      return res.send("Please provide an E-mail and password");
    }

    const user = await db.getUserByEmail(email);
    console.log('user info ', user);

    if (!user) {
      return res.send("E-mail does not exist");
    }

    if (!bcrypt.compareSync(password, user.password)) {
      console.log("Password does not match")
      return res.send("Password does not match");
    }

    res.status(201).json({ userID:user.id, firstName:user.first_name});

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error - register" });
  }
});

module.exports = router;