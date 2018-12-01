const data = require('fs')
    .readFileSync(0, "utf-8")
    .split(/[\n\r]+/)
    .map(Number);

const seen = new Set;
let pointer = 0, value = 0;

for(;;){
    if(seen.has(value += data[pointer])) break;
    seen.add(value);
    pointer = (pointer + 1) % data.length;
}

console.log(value);