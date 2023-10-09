//https://developers.google.com/maps/documentation/embed/get-started

const router = require("express").Router();
const db = require("../db");

// Default route to display all properties
router.get("/properties", async (req, res) => {
  try {
    const properties = await db.getAllProperties(); // Call getAllProperties with no filter criteria to get all properties
    res.send({ properties });
  } catch (error) {
    console.error("Error fetching all properties:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/property/:id", async (req, res) => {
  try {
    //console.log(req.params.id);
    const propertyId = req.params.id;
    const property = await db.getPropertyById(propertyId);

    if (!property) {
      return res.status(404).json({ error: "Property not found" });
    }

    res.json({ property });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/properties", async (req, res) => {
  try {
    const newProperty = req.body.property;

    if (!newProperty) {
      return res.status(400).json({ error: "Property data is required" });
    }

    const addedProperty = await db.addProperty(newProperty);

    res.status(201).json(addedProperty);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/properties/search", async (req, res) => {
  try {
    const { query, city, province, postcode } = req.query;
    const properties = await db.getAllProperties(
      query,
      city,
      province,
      postcode,
      20
    );
    res.send({ properties });
  } catch (error) {
    console.error("Error searching for properties:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Define a route to delete a property by ID

router.delete("/property/:id", async (req, res) => {
  try {
    const propertyId = req.params.id;
    // Call the deletePropertyById function from your db.js module
    const deletedProperty = await db.deletePropertyById(propertyId);

    if (!deletedProperty) {
      return res.status(404).json({ error: "Property not found" });
    }

    // Additional action: Redirect to a different page
    res.send("/properties");
  } catch (error) {
    console.error("Error deleting property:1", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
