const http = require('http');
const bl = require('bl');
const url = process.argv[2];

http.get(url, (response) => {
    let results;
    // response.on('data', (data) => {
    //     results += data;
    // });

    response.pipe(bl((err, data) => {
        if(err) {
            return console.log('error: ', err);
        } else {
            results = data;
        }
    }))

    response.on('end', () => {
        console.log(results.length);
        console.log(results.toString());
    })
});