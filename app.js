const http = require("http");
const routes = require("./routes");
//const { error } = require("console");
//function rqListener(req, res) {}

//http.createServer(rqListener);
//http.createServer(function(req,res){
//});
//next gen js function(arrow)
console.log(routes.someText);
const server = http.createServer(routes.handler);
//console.log(req.url, req.method, req.headers);
// process.exit();
//const url = req.url; //requesting a url
//const method = req.method; //requesting a POST request using method
server.listen(5000);
