const express = require("express");
const router = express.Router();

router.get("/search", async (req, res) => {
  try {
    console.log("server - index - get - properties");
    const queryParams = [];
    let queryString = `
    SELECT * FROM properties
    WHERE TRUE 
    `;

    const result = await db
      .query(queryString, queryParams)
      .then((properties) => {
        console.log(properties);
        res.send({ properties });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
