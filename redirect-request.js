const http = require('http');

const server = http.createServer((request, response) => {
  const url = request.url;
  response.setHeader("Content-Type", "text/html")
  if(url === '/') {
    response.write("<html><body><h1>Welcome To Home</h1></body></html>");
    // redirecting request
  } else if(url === "/message") {
    response.statusCode = 302;
    response.setHeader('Location', '/');
    return response.end();
  }
  response.end();
});

server.listen(3000);

