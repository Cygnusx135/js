const marvel_heroes = [
  'Iron Man',
  'Captain America',
  'Hulk',
  'Thor',
  'Black Widow',
  'Spider-Man',
];
const dc_heroes = [
  'Batman',
  'Superman',
  'Wonder Woman',
  'Flash',
  'Green Lantern',
  'The Flash',
];

// marvel_heroes.push(dc_heroes);  //items do not mix in the array, dc heroes comes as separate array
// console.log(marvel_heroes);

// marvel_heroes.push('Wolverine');
// console.log(marvel_heroes);

// marvel_heroes.push(...dc_heroes);  //items gets mixed with the array //(...)spread operator
// console.log(marvel_heroes);

const heroes = marvel_heroes.concat(dc_heroes);
console.log(heroes);

const anotherArray = [1, 2, 3, [4, 5], 6, 7, [8, 9, [4, 5]]];

const realArray = anotherArray.flat(Infinity);
console.log(realArray);

console.log(Array.isArray(anotherArray));
console.log(Array.from('realArray'));
console.log(Array.from({ name: 'John' }));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
