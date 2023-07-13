require("./config/db");

const express = require("express");
const bodyparser = express.jason;
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyparser());

module.exports = app;
