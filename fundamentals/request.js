const http = require('http');

const server = http.createServer((request, response) => {
  console.log("url", request.url);
  console.log("headers", request.headers);
  console.log("method", request.method);
});

server.listen(3000);