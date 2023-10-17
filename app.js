//const http = require("http");
const path = require("path");
const express = require("express"); //import express

const bodyParser = require("body-parser");

const app = express(); //running express as a function

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
//app.use((req, res, next) => {
//console.log("In the middleware");
//next(); //Allows the request to continue to the next middleware in line
//}); //use => to add a new middleware function...it accepts array of request handlers

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(5000);
