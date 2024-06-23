const http = require('http');

const server = http.createServer((request, response) => {
  const url = request.url;
  response.setHeader("Content-Type", "text/html")
  if(url === '/') {
    response.write("<html><body><h1>Welcome To Home</h1></body></html>");
  } else if(url === "/message") {
    response.write("<html><body><h1>Welcome To Messages</h1></body></html>");
  }
  response.end();
});

server.listen(3000);

