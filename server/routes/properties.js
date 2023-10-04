const router = require("express").Router();
const db = require("../db");
const database = require("../db");

// router.get("/properties", async (req, res) => {
//   try {
//     console.log("server - index - get - properties");

//     await db
//       .query(
//         `
//     SELECT * FROM properties
//     WHERE TRUE
//     `
//       )
//       .then((properties) => {
//         console.log(properties);
//         res.send({ properties });
//       });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Server error" });
//   }
// });

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

// router.get("/property-detail", async (req, res) => {
//   try {
//     console.log("server - index - get - property-detail");
//     const queryParams = [];
//     let queryString = `
//     SELECT * FROM properties
//     WHERE TRUE
//     `;

//     if (req.query && Object.keys(req.query).length > 0) {
//       queryParams.push(`${req.query.id}`);
//       queryString += `AND id = $${queryParams.length} `;
//     }

//     await db.query(queryString, queryParams).then((properties) => {
//       console.log(properties);
//       res.send({ properties });
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Server error" });
//   }
// });
router.get("/property/:id", async (req, res) => {
  try {
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
    const properties = await database.getAllProperties(
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

module.exports = router;
