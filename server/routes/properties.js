const router = require("express").Router();
const db = require("../db")

router.get('/properties', async (req, res) => {
  try {
    console.log("server - index - getProperties");
    db.query(
      `
      SELECT * FROM properties
      `
    )
    .then((properties) => {
      res.send({properties})
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;