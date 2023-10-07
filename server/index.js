// evn setup
//require("dotenv").config();

const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.DB_PORT || 8001;

const ENV = process.env.NODE_ENV || "development";
const PATH = path.resolve(__dirname, "./.env." + ENV);

require("dotenv").config({ path: PATH });
//app.use(express.static(path.join(__dirname, ".env")));
//module.exports = ENV;
console.log("path", PATH);
console.log("index process", process.env);
const bodyparser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(bodyparser.json());

// ROUTES //
const properties = require("./routes/properties");
const user = require("./routes/user");

app.use("/api", properties);
app.use("/api", user);

app.listen(PORT, () => {
  console.log(`server has started on port ${PORT}`);
});
// require("dotenv").config();

// const path = require("path");
// const express = require("express");

// const app = express();
// const PORT = process.env.DB_PORT || 8001;

// const bodyparser = require("body-parser");
// const cors = require("cors");
// app.use(cors());
// app.use(express.json());
// app.use(bodyparser.json());

// // ROUTES //
// const properties = require("./routes/properties");
// const user = require("./routes/user");

// app.use("/api", properties);
// app.use("/api", user);

// app.listen(PORT, () => {
//   console.log(`Server has started on port ${PORT}`);
// });
