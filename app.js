const http = require("http");
const express = require("express"); //import express

const app = express(); //running express as a function

app.use((req, res, next) => {
  console.log("In the middleware");
  next(); //Allows the request to continue to the next middleware in line
}); //use => to add a new middleware function...it accepts array of request handlers

app.use((req, res, next) => {
  console.log("In another middleware");

  res.send("<h1>Hello from Express!</h1>");
  // send allows us to send a response
});
const server = http.createServer(app);

server.listen(5000);
