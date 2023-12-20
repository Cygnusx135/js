const name1 = 'hari';
const repCount = 10;
console.log(name1 + ' is ' + repCount + ' times repeated');

//String interpolation
console.log(`${name1.toUpperCase()} is ${repCount} times repeated`);

const gameName = new String('Super Mario');
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.charAt(3));
console.log(gameName.charCodeAt(3)); //gets unicode
console.log(gameName.indexOf('M'));
console.log(gameName.concat(' 64'));

const newString = gameName.substring(0, 6);
console.log(newString);

const url = 'https://www.google%20.com';
console.log(url.replace('%20', ''));
console.log(url.includes('google'));
