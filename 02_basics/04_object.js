const googleUser = new Object(); //singleton object
const googleUser2 = {}; //not singleton

googleUser2.name = 'Hari';
googleUser2.age = 21;
googleUser2.isLoggedIn = false;

// console.log(googleUser2);

const regularUser = {
  email: 'reg@yahoo.vom',
  fullname: {
    userfullname: {
      firstname: 'yuya',
      lastname: 'lumen',
    },
  },
};

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {
  name: 'yuya',
  age: 21,
};
const obj2 = {
  email: 'yua@lemon.jom',
  isLoggedIn: true,
};

const obj3 = { ...obj1, ...obj2 };
// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

const users = [
  {
    id: 1,
    name: 'yuya',
    age: 21,
    email: 'yua@lemon.yom',
  },
  {
    id: 2,
    name: 'jubu',
    age: 24,
    email: 'jubu@juzan.jom',
  },
];

console.log(users[0].email);
console.log(Object.keys(users[0]));
console.log(Object.values(users[0]));
console.log(Object.entries(users[1]));

console.log(users[0].hasOwnProperty('email'));
console.log(users[1].hasOwnProperty('gmail'));
