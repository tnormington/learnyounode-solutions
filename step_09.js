const http = require('http');
const bl = require('bl');

const urls = process.argv.slice(2);

let results = [];
let count = 0;

urls.forEach((url, i) => {
    // console.log('url: ', url);
    http.get(url, (response) => {
        response.pipe(bl((err, data) => {
            // console.log(data.toString());
            if(err) {
                return console.log(err);
            } else {
                // THIS IS A BUFFER
                results[i] = data.toString();
                count++;
                if(count === 3) {
                    // console.log(results.toString());
                    logResults();
                }
            }
        }));
    });
});


function logResults() {
    results.forEach((val) => {
        console.log(val);
    });
}