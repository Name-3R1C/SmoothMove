const { Pool } = require("pg");

// Create a new pool for connecting to the PostgreSQL database
// const pool = new Pool({
//   user: process.env.development.PGUSER,
//   password: process.env.development.PGPASSWORD,
//   host: process.env.development.PGHOST,
//   database: process.env.development.PGDATABASE,
// });
// const queryDatabase = (sql, params) => {
//   return new Promise((resolve, reject) => {
//     pool
//       .query(sql, params)
//       .then((result) => resolve(result.rows))
//       .catch((err) => {
//         console.error("Error:", err.message);
//         reject(err);
//       });
//   });
// };
// /**
//  * Get all properties based on query options.
//  * @param {object} options - An object containing query options.
//  * @param {number} limit - The maximum number of properties to retrieve.
//  * @returns {Promise} A promise that resolves to an array of properties.
//  */
// const getAllProperties = (options, limit = 10) => {
//   const queryParams = [];
//   let queryString = `
//   SELECT * FROM properties
//   WHERE 1=1
//   `;
//   if (options.city) {
//     queryParams.push(`%${options.city}%`);
//     queryString += ` AND city LIKE $${queryParams.length} `;
//   }
//   if (options.owner_id) {
//     queryParams.push(options.owner_id);
//     queryString += ` AND properties.owner_id = $${queryParams.length}`;
//   }
//   if (options.minimum_price_per_night) {
//     //console.log("minimum", options.minimum_price_per_night);
//     queryParams.push(options.minimum_price_per_night * 100); // Convert dollars to cents
//     queryString += ` AND cost_per_night >= $${queryParams.length}`;
//   }

//   if (options.maximum_price_per_night) {
//     queryParams.push(options.maximum_price_per_night * 100); // Convert dollars to cents
//     queryString += ` AND cost_per_night <= $${queryParams.length}`;
//   }
//   queryString += `
//     GROUP BY properties.id
//   `;

//   if (options.minimum_rating) {
//     queryParams.push(parseInt(options.minimum_rating));
//     queryString += ` HAVING avg(property_reviews.rating) >= $${queryParams.length}`;
//   }
//   queryParams.push(limit);
//   queryString += `
//     ORDER BY cost_per_night
//     LIMIT $${queryParams.length};
//   `;

//   return queryDatabase(queryString, queryParams);
// };

// module.exports = {
//   getAllProperties,
// };
