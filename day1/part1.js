const sum = (accumulator, current) => accumulator + current;

const data = require('fs')
    .readFileSync(0, "utf-8")
    .split(/[\n\r]+/)
    .map(Number)
    .reduce(sum, 0);

console.log(data);