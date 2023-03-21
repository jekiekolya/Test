// const person = {
//   greet() {
//     console.log(`Hello, my name is ${this.name}`);
//   },
// };

// const john = Object.create(new Number(1));
// const john2 = Object.create({});
// const john3 = Object.create(1);
// const john4 = Object.create([1]);
// john.age = 1;
// john.name = 'John';
// console.log('john', john);
// console.dir(john);

// const john = Object.create(person, {
//   name: {
//     value: 'John',
//     writable: true,
//     enumerable: true,
//     configurable: true,
//   },
//   age: {
//     value: 30,
//     writable: false,
//     enumerable: true,
//     configurable: false,
//   },
// });

const person = {
  name: 'John',
  age: 30,
  gender: 'male',
};

const details = {
  occupation: 'engineer',
  location: 'New York',
};

const personDetails = Object.assign({}, person, details);

console.log(personDetails);
