const http = require("http");

function rqListener(req, res) {}

//http.createServer(rqListener);
//http.createServer(function(req,res){
//});
//next gen js function(arrow)
const server = http.createServer((req, res) => {
  console.log(req);
});
server.listen(3000);
