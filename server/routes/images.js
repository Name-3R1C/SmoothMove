const router = require("express").Router();
const db = require("../db");

// Default route to display all properties
router.post("/images", async (req, res) => {
  // console.log('route - image');
  // console.log(req.body);

  try {
    const propertyID = req.body.propertyID;
    const url = req.body.url;
    if (!propertyID || !url) {
      return res.status(400).json({ error: "propertyID and URL data is required" });
    }

    const result = await db.addImage({ propertyID, url });

    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
