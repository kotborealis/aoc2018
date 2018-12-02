const duplicates = (map, current) => (map[current] ? map[current]++ : map[current] = 1) && map;
const unique = (value, index, self) => self.indexOf(value) === index;
const sort_numbers = (a, b) => a - b;

const data = require('fs')
    .readFileSync(0, "utf-8")
    .split(/[\n\r]+/)
    .map(id => id.split(''))
    .map(id => id.reduce(duplicates, {}))
    .map(Object.values.bind(null))
    .map(i => i.filter(i => i > 1 && i < 4))
    .map(i => i.filter(unique))
    .flat()
    .sort(sort_numbers);

const value = data.indexOf(3) * (data.length - data.indexOf(3));

console.log(value);