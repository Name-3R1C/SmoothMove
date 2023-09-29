const router = require("express").Router();
const db = require("../db")

router.get('/properties', async (req, res) => {
  try {
    console.log("server - index - get - properties");
    const queryParams = [];
    let queryString = `
    SELECT * FROM properties
    WHERE TRUE 
    `;
    
    if (req.query) {
      console.log(req.query.id);
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

router.post('/properties', async (req, res) => {
  try {
    console.log("server - index - post - properties");
    const queryParams = [
      req.body.property.owner_id,
      req.body.property.title, 
      req.body.property.description,
      req.body.property.thumbnail_photo_url,
      req.body.property.cover_photo_url,
      req.body.property.cost_per_month,
      req.body.property.street,
      req.body.property.city,
      req.body.property.province,
      req.body.property.post_code,
      req.body.property.country,
      parseInt(req.body.property.area),
      parseInt(req.body.property.number_of_bathrooms),
      parseInt(req.body.property.number_of_bedrooms)
    ];
    console.log('queryParams', queryParams);

    const result = await db.query(`
    INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_month, street, city, province, post_code, country, area, number_of_bathrooms, number_of_bedrooms)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *;
    `, queryParams);

    res.json("new property - submitted");

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;