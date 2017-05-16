const fs = require('fs');

const file = process.argv[2];

const fileContents = fs.readFileSync(file).toString();

// console.log(fileContents);

let fileContentsArray = fileContents.split('\n');

console.log(fileContentsArray.length-1);
