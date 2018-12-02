const map_all = fn => (i, _, self) => self.map(j => fn(i,j));
const string_diff = (i, j) => i.split('').map((i, index) => i === j[index] ? i : '');
const exactly = (n, val) => i => i.filter(i => i == val).length === n;

const data = require('fs')
    .readFileSync(0, "utf-8")
    .split(/[\n\r]+/)
    .map(map_all(string_diff))
    .flat(1)
    .filter(exactly(1,''))
    [0]
    .join('');



console.log(data);