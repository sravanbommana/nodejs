const http = require('http');

const server = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'text/html');
  response.write('<html>');
  response.write('<head><title>My First Page</title></head>');
  response.write('<body>Hello User From Server</body');
  response.write('</html>');
  response.end();
});

server.listen(3000);
