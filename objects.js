const person = {
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

const john = Object.create(person);
john.name = 'John';

john.greet(); // Output: Hello, my name is John
