const path = require("path");
const express = require("express");

const rootDir = require("../util/path");

const adminData = require("./admin"); //Adding a import by importing admin data and exporting its routes
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("shop");
  // send allows us to send a response
});

module.exports = router;
