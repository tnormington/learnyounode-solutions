const net = require('net');

const port = process.argv[2];

const server = net.createServer((socket) => {
    let date = new Date();
    let data = '';
    data += date.getFullYear();
    data += '-';
    if(date.getMonth() < 10) {
        data += '0';
    }
    data += (date.getMonth() + 1);
    data += '-';
    if(date.getDate() < 10) {
        data += '0';
    }
    data += date.getDate();
    data += ' ';
    data += date.getHours();
    data += ':';
    data += date.getMinutes();
    data += '\n';


    socket.end(data);


}).on('error', (err) => {
    throw err;
});

server.listen(port);