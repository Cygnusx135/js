// var c = 400;
let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  //   var c = 30;
}
// var c = 300;
// console.log(a);
// console.log(b);
// console.log(c);

//nested scope in function
function one() {
  const username = 'Hari';

  function two() {
    const website = 'youtube';
    console.log(username);
  }
  //   console.log(website);
  two();
}

// one();

//nested scope in conditionals

if (true) {
  const username = 'Hari';
  if (true) {
    const website = ' youtube';
    console.log(username + website);
  }
  //   console.log(website);
}

// console.log(username);

//*******************//
//function declaration (can be called before it is defined)
console.log(addOne(10));
function addOne(number) {
  return number + 1;
}

//function expression (can be called after it is defined)
// console.log(addTwo(10));
const addTwo = function (number) {
  return number + 2;
};
console.log(addTwo(10));
