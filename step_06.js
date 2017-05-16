const processFiles = require('./step_6_module.js');

const dir = process.argv[2];
const extFilter = process.argv[3];

processFiles(dir, extFilter, (err, list) => {
    if(err) {
        console.log('error: ', err);
    } else {
        for(index in list) {
            console.log(list[index]);
        }
    }
})