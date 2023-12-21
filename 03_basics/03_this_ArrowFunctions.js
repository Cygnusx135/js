const user = {
  name: 'Hari',
  age: 21,
  email: 'hari@google.com',
  welcomeMessage: function () {
    console.log(`Welcome back, ${this.name}`);
    // console.log(this);
  },
};

// user.welcomeMessage();
// user.name = 'Yua';
// user.welcomeMessage();

// console.log(this);

// function chai() {
//   let username = 'yuya';
//   console.log(this.username);
// }

// chai();

// const chai = () => {
//   let username = 'yuya';
//   console.log(this);
// };
// chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

//implicit return
const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(1, 2));

const userName = () => ({ username: 'yuya' });
console.log(userName());
