//singleton - made with constructor
//Object.create

//OBJECT LITERALS
const mySym = Symbol('key1');

const user = {
  name: 'Hari',
  fullName: 'Hari Kiran',
  age: 21,
  [mySym]: 'myKey',
  location: 'Bangalore',
  email: 'hari@google.com',
  isLoggedIn: false,
  lastLoginDays: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
};

// console.log(user.name.toUpperCase());
// console.log(user['email']);
// console.log(user.fullName);
// console.log(user['fullName']);
// console.log(typeof user[mySym]);

user.isLoggedIn = true;
console.log(user.isLoggedIn);
// Object.freeze(user);
user.isLoggedIn = false;
console.log(user);

user.greeting = function () {
  console.log(`Hello ${this.name}`);
};

console.log(user.greeting());
