const express = require("express")
const app = express();
const cors = require("cors");
const pool = require("./db")


app.use(cors());
app.use(express.json());

// ROUTES // 
app.post("/users", async(req, res) => {
  try {
    const name = req.body.name;
    const email  = req.body.email;
    const password = req.body.password;
    
    const newUser = await pool.query(
      "INSERT INTO users (name, email, password) VALUES($1, $2, $3) RETURNING *",
      [name, email, password]
    );

    res.json(newUser);
  } catch (error) {
    console.error(error.message);
  }
});


app.listen(9000, () => {
  console.log("server has started on port 9000");
});