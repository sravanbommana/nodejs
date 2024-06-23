const http = require('http');

const server = http.createServer((request, response) => {
 // This will terminate process 
 process.exit();
});

server.listen(3000);