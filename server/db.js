const { Pool } = require("pg");

const pool = new Pool({
  user: "vagrant",
  password: "123",
  host: "localhost",
  port: "5432",
  database: "smoothmove",
});
const queryDatabase = (sql, params) => {
  return new Promise((resolve, reject) => {
    pool
      .query(sql, params)
      .then((result) => resolve(result.rows))
      .catch((err) => {
        console.error("Error:", err.message);
        reject(err);
      });
  });
};

const getAllProperties = (query, city, province, postcode, limit = 10) => {
  const queryParams = [];
  let queryString = `
    SELECT * FROM properties
    WHERE 1=1
  `;

  if (query) {
    queryParams.push(`%${query}%`);
    queryString += ` AND (title LIKE $${queryParams.length} OR description LIKE $${queryParams.length}) `;
  }

  if (city) {
    queryParams.push(`%${city}%`);
    queryString += ` AND city LIKE $${queryParams.length} `;
  }

  if (province) {
    queryParams.push(`%${province}%`);
    queryString += ` AND province LIKE $${queryParams.length} `;
  }

  if (postcode) {
    queryParams.push(`%${postcode}%`);
    queryString += ` AND post_code LIKE $${queryParams.length} `;
  }

  console.log(queryString);
  return queryDatabase(queryString, queryParams);
};

module.exports = { pool, getAllProperties };
