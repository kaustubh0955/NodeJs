const path = require("path");
const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();
const adminData = require("./admin"); //Adding a import by importing admin data and exporting its routes

router.get("/", (req, res, next) => {
  console.log("shop.js", adminData.products);
  res.sendFile(path.join(rootDir, "views", "shop.html"));
  // send allows us to send a response
});

module.exports = router;
