const fs = require('fs');

const path = require('path');

const dir = process.argv[2]

const extensionFilter = process.argv[3];

fs.readdir(dir, (err, list) => {
    if(err) {
        return console.log('error: ', err);
    } else {
        processList(list);
    }
});

function processList(list) {
    for(let file of list) {
        let extension = path.extname(file);
        if(extension.slice(1) === extensionFilter) {
            console.log(file);
        }
    }
}