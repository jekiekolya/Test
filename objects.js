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

// const person = {
//   name: 'John',
//   age: 30,
//   gender: 'male',
//   greet() {
//     console.log(`Hello, my name is ${this.name}`);
//   },
// };

// const details = {
//   occupation: 'engineer',
//   location: 'New York',
// };

// const personDetails = Object.assign(
//   { occupation1: 'engineer', location1: 'New York' },
//   person,
//   details
// );
// const personDetails2 = Object.assign([], person, details);
// const personDetails3 = Object.assign(new String(), person, details);

// console.log(personDetails);
// const details = {
//   occupation: 'engineer',
//   location: 'New York',
// };

// const person = Object.create(details);

// const values = Object.values(person); // ["name", "age", "gender"]
// const values1 = Object.values('asdas'); // [ 'a', 's', 'd', 'a', 's' ]
// const values2 = Object.values(new Number('15')); // []
// const values3 = Object.values(() => {}); // []

// console.log(values3); // Output: ["name", "age", "gender"]

// const entries = [
//   ['name', 'John'],
//   ['age', 30],
//   ['gender', 'male'],
// ];

// const person = Object.fromEntries(entries);

// console.log(person); // Output: { name: 'John', age: 30, gender: 'male' }

// console.log(Object.is(1, 1)); // Output: true
// console.log(Object.is(1, '1')); // Output: false

// console.log(Object.is(NaN, NaN)); // Output: true
// console.log(NaN === NaN); // Output: false

// console.log(Object.is(0, -0)); // Output: false
// console.log(0 === -0); // Output: true

// console.log(Object.is([], [])); // Output: false
// console.log(Object.is(null, null)); // Output: true

// const obj = {};
// console.log(Object.is(obj, {})); // Output: false
console.log(parseInt('08'));
