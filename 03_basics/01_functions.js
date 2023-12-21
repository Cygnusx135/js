function sayMyName() {
  console.log('H');
  console.log('A');
  console.log('R');
  console.log('I');
}

// sayMyName();

// function addSum(a, b) {
//   console.log(a + b);
// }

// const result = addSum(1, 3);
// console.log(result); //undefined

function addSum(a, b) {
  //   let result = a + b;
  //   return result;
  return a + b;
}
const result = addSum(1, 3);
console.log(result);

////////////////////////
function loginUserMessage(username) {
  if (username === undefined) {
    return 'You must provide a username';
  } else {
    return `Welcome back, ${username}`;
  }
}

console.log(loginUserMessage('Hari'));

////////////////////////
function calculateCartTotal(...price) {
  return price;
}

console.log(calculateCartTotal(10, 20, 30));

///////////////////

const item = {
  name: 'Phone',
  price: 1000,
};

function handleObject(obj) {
  console.log(`Item name is ${obj.name} and price is ${obj.price}`);
}

handleObject(item);
// handleObject({
//   name: 'chair',
//   price: 3000,
// });
