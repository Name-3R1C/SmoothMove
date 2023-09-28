const router = require("express").Router();
const db = require("../db")

router.get('/properties', async (req, res) => {
  try {
    console.log("server - index - properties");
    db.query(
      `
      SELECT * FROM properties
      `
    )
    .then((properties) => {
      console.log(res.rows);
      res.send({properties})
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;