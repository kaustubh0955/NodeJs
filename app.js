//const http = require("http");
const express = require("express"); //import express

const bodyParser = require("body-parser");

const app = express(); //running express as a function

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
//app.use((req, res, next) => {
//console.log("In the middleware");
//next(); //Allows the request to continue to the next middleware in line
//}); //use => to add a new middleware function...it accepts array of request handlers

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(5000);
