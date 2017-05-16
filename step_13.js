const http = require('http');
const url = require('url');

const port = process.argv[2];

const server = http.createServer((request, response) => {
    // console.log(request);
    let route = url.parse(request.url, true);
    let iso = route.query.iso;
    let date = new Date(iso);

    response.writeHead(200, { 'Content-Type': 'application/json' });

    if(route.pathname === '/api/parsetime') {

        let dateObject = {};

        dateObject.hour = date.getHours();
        dateObject.minute = date.getMinutes();
        dateObject.second = date.getSeconds();

        response.end(JSON.stringify(dateObject));
        // console.log(dateObject);
    }

    if(route.pathname === '/api/unixtime') {

        // console.log(iso);


        let unixtime = {
            unixtime: date.getTime()
        };
        response.end(JSON.stringify(unixtime));
    }


});

server.listen(port);