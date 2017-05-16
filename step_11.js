const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const file = process.argv[3];

server = http.createServer((request, response) => {
    let data = fs.createReadStream(file);

    data.pipe(response);
    // data.pipe()

    // response.end('HELLO WORLD');
});

server.listen(port);