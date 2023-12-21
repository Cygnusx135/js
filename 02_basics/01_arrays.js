//Arrays

//elements in array
const myArr = [1, 2, 'three', true, { name: 'John' }, [1, 2, 3]];
const names = ['John', 'Jane', 'Joe', 'Jill'];

console.log(myArr[0]);
console.log(myArr[4].name);
console.log(names[0]);
console.log(names);

const myArr2 = new Array(1, 2, 3);
console.log(myArr2);

//Array methods
names.push('Jake', 'Jenny');
console.log(names);
names.pop();
console.log(names);
names.unshift('Jill');
console.log(names);
names.shift();
console.log(names);

const newArr = names.join('-_-');
console.log(newArr);

//slice and splice

console.log('A ', names);

const newArr2 = names.slice(1, 3);
console.log(newArr2);
console.log('B ', names);

const newArr3 = names.splice(1, 3);
console.log('C ', names);
console.log(newArr3);
