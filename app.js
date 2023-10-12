const http = require("http");
const fs = require("fs");
const { error } = require("console");
//function rqListener(req, res) {}

//http.createServer(rqListener);
//http.createServer(function(req,res){
//});
//next gen js function(arrow)
const server = http.createServer((req, res) => {
  //console.log(req.url, req.method, req.headers);
  // process.exit();

  const url = req.url; //requesting a url
  const method = req.method; //requesting a POST request using method
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title><head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="MESSAGE"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = []; //a body should be a empty array
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString(); //buffer
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html"); //setting a new header
  res.write("<html>");
  res.write("<head><title>My First Page</title><head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  res.end();
});
server.listen(5000);
