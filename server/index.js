// evn setup
const PORT = process.env.PORT || 8001;
const path = require("path");
const ENV = process.env.NODE_ENV || "development";
const PATH = path.resolve(__dirname, "../.env." + ENV);

require("dotenv").config({ path: PATH });

module.exports = ENV; 

const express = require("express")
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");

// ROUTES // 
const properties = require("./routes/properties");

app.use(cors());
app.use(express.json());
app.use(bodyparser.json());
app.use("/api", properties);

app.listen(PORT, () => {
  console.log(`server has started on port ${PORT}`);
});