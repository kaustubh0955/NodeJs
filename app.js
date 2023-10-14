const http = require("http");
const express = require("express"); //import express

const app = express(); //running express as a function

const server = http.createServer(app);

server.listen(5000);
