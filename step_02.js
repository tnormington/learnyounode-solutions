let args = process.argv;

args = args.slice(2);

const result = args.reduce((total, currentVal) => {
    currentVal = Number(currentVal);
    total = Number(total);
    return total + currentVal;
});

console.log(result);