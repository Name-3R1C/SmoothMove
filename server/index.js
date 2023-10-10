const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.DB_PORT || 8001;

const ENV = process.env.NODE_ENV || "development";
const PATH = path.resolve(__dirname, "./.env." + ENV);

require("dotenv").config({ path: PATH });

const bodyparser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(bodyparser.json());

// ROUTES //
const properties = require("./routes/properties");
const user = require("./routes/user");
const images = require("./routes/images");

app.use("/api", properties);
app.use("/api", user);
app.use("/api", images);

app.listen(PORT, () => {
  console.log(`server has started on port ${PORT}`);
});