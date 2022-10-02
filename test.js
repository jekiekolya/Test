'use strict';

// Замикання
// {function foo1(x) {
//   let y = 3;
//   function foo2(p) {
//     console.log(p + y + x);
//   }

//   return foo2;
// }

// let resPlus6 = foo1(3);

// resPlus6(100);

// console.dir(resPlus6);}

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign({ ...target });

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// expected output: true
