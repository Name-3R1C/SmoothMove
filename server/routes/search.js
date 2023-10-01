const express = require("express");
const router = express.Router();

router.get("/search", async (req, res) => {
  try {
    // Extract the search query from the request query parameters
    //const query = req.query.query;
    console.log("server - index - get - properties");
    const queryParams = [];
    let queryString = `
    SELECT * FROM properties
    WHERE TRUE 
    `;

    /*
      if (options.city) {
    queryParams.push(`%${options.city}%`);
    queryString += ` AND city LIKE $${queryParams.length} `;
  }
  if (options.owner_id) {
    queryParams.push(options.owner_id);
    queryString += ` AND properties.owner_id = $${queryParams.length}`;
  }
  if (options.minimum_price_per_night) {
    //console.log("minimum", options.minimum_price_per_night);
    queryParams.push(options.minimum_price_per_night * 100); // Convert dollars to cents
    queryString += ` AND cost_per_night >= $${queryParams.length}`;
  }

  if (options.maximum_price_per_night) {
    queryParams.push(options.maximum_price_per_night * 100); // Convert dollars to cents
    queryString += ` AND cost_per_night <= $${queryParams.length}`;
  }
  queryString += `
    GROUP BY properties.id
  `;

    */
    // Perform the search logic here (e.g., query your database)
    // Replace the following line with your actual search logic
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

/*
router.get('/properties', async (req, res) => {


    if (req.query && Object.keys(req.query).length > 0) {
      queryParams.push(`${req.query.id}`);
      queryString += `AND id = $${queryParams.length} `;
    }

    const result = await db.query(queryString, queryParams)
      .then((properties) => {
        console.log(properties);
        res.send({properties})
      })
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});
*/

module.exports = router;
