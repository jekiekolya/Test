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

// ####################################################################################################
// Test local server
// ####################################################################################################

// const BASE_URL = 'http://localhost:3000';
// const END_POINT = '/todo';

// class FetchRequest {
//   constructor() {}
//   getTodo() {
//     const response = fetch(`${BASE_URL}${END_POINT}`)
//       .then(res => res.json())
//       .then(console.log);
//   }
//   getTodoById(id) {
//     const response = fetch(`${BASE_URL}${END_POINT}/${id}`)
//       .then(res => res.json())
//       .then(res => console.log(res));
//   }

//   postTodo(user, title) {
//     const URL = `${BASE_URL}${END_POINT}`;
//     const body = {
//       userId: user,
//       title: title,
//       completed: false,
//     };

//     const options = {
//       method: 'POST',
//       body: JSON.stringify(body),
//       headers: { 'Content-Type': 'application/json; charset=utf-8' },
//     };

//     const response = fetch(`${URL}`, options).then(res => res.json());

//     response.then(res => console.log(res));
//   }

//   deleteTodo(id) {
//     const URL = `${BASE_URL}${END_POINT}/${id}`;
//     const options = {
//       method: 'DELETE',
//     };

//     fetch(`${URL}`, options)
//       .then(res => res.json())
//       .then(() => this.getTodo());
//   }

//   switchTodo(id) {
//     const URL = `${BASE_URL}${END_POINT}/${id}`;
//     const body = {
//       userId: 'BARAN',
//       title: 'Love js',
//     };
//     const options = {
//       method: 'PUT',
//       body: JSON.stringify(body),
//       headers: { 'Content-Type': 'application/json; charset=utf-8' },
//     };

//     fetch(`${URL}`, options)
//       .then(res => res.json())
//       .then(res => console.log(res));
//   }
//   updateTodo(id, status) {
//     const URL = `${BASE_URL}${END_POINT}/${id}`;
//     const body = {
//       completed: status,
//     };
//     const options = {
//       method: 'PATCH',
//       body: JSON.stringify(body),
//       headers: { 'Content-Type': 'application/json; charset=utf-8' },
//     };

//     fetch(`${URL}`, options)
//       .then(res => res.json())
//       .then(res => console.log(res));
//   }
// }

// const fetchRequest = new FetchRequest();

// fetchRequest.getTodo();
// fetchRequest.getTodoById(2));
// fetchRequest.postTodo(user, title);
// fetchRequest.deleteTodo(14);
// fetchRequest.switchTodo(12);
// fetchRequest.updateTodo(12, true);

// class Samurai {
//   constructor(name) {
//     this.name = name;
//   }

//   hello() {
//     alert(this.name);
//   }
// }

// let shogun = new Samurai('Dimych');
// console.log(shogun.__proto__.__proto__ === Object.prototype);
// console.log(shogun.__proto__ === Samurai.prototype);
// console.log(shogun.__proto__.constructor.__proto__ === Function.prototype);
// console.log(shogun.__proto__.__proto__.__proto__ === null);

//  -----------------------------------------------------------------------------
// Ex 1:
// > abc
// [ ‘abc’, ‘a.bc’, ‘ab.c’, ‘a.b.c’]

// > abcd
// [ ‘abcd’, ‘a.bcd’, ‘ab.cd’, ‘a.b.cd’ … ]

// function createArray(str) {
//   const resultArr = [];
//   resultArr.push(str);

//   for (let i = 1; i <= str.length - 1; i++) {
//     if (i >= 3) {
//       let newStr = str.split('').slice(0, i);
//       let newStr2 = str.slice(i, str.length);
//       newStr = newStr.join('.');
//       resultArr.push(newStr + newStr2);
//     }

//     let newStr = str.split('');

//     newStr.splice(i, 0, '.');
//     newStr = newStr.join('');
//     resultArr.push(newStr);
//   }

//   resultArr.push(str.split('').join('.'));
//   return resultArr;
// }

// console.log('createArray(adc)', createArray('abc'));
// console.log('createArray(abcde)', createArray('abcde'));

//  -----------------------------------------------------------------------------
// Ex 2:
// 1. Given unit test. Create chunk method that suits given unit test

// describe("Array Chunking", () => {

//   it("Should implement array chunking", () => {

//    assert.deepEqual(chunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
//    assert.deepEqual(chunk([1, 2, 3, 4], 3), [[1, 2, 3], [4]]);
//    assert.deepEqual(chunk([1, 2, 3, 4], 5), [[1, 2, 3, 4]]);
//    assert.deepEqual(chunk([1, 2, 3, 4, 5, 6], 2), [[1, 2], [3, 4], [5, 6]]);
//   });
// });

// function chunk(arr, size) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; ) {
//     newArr.push(arr.splice(i, size));
//     i = 0;
//   }

//   return newArr;
// }

// console.log('chunk([1, 2, 3, 4], 2', chunk([1, 2, 3, 4], 2));
// console.log('chunk([1, 2, 3, 4], 3', chunk([1, 2, 3, 4], 3));
// console.log('chunk([1, 2, 3, 4], 5', chunk([1, 2, 3, 4], 5));
// console.log('chunk([1, 2, 3, 4, 5, 6], 2', chunk([1, 2, 3, 4, 5, 6], 2));

//  -----------------------------------------------------------------------------
// Ex 3: Palindrome

// function isPalindrome(str) {
//   const newStr = str.split('').reverse().join('');

//   return newStr === str;
// }

// console.log('isPalindrome(add)', isPalindrome('add'));
// console.log('isPalindrome(ada)', isPalindrome('ada'));

//  -----------------------------------------------------------------------------
// Ex 3: FindShortestWord

// const findShort = str => {
//   const arr = str.split(' ');
//   const shortestWord = arr.reduce((acc, item) => {
//     if (acc.length > item.length) {
//       return item;
//     } else {
//       return acc;
//     }
//   }, arr[0]);

//   return shortestWord;
// };

// console.log('findShort(The Smallest word in sentence)', findShort('The Smallest word in sentence'));
// console.log('findShort(Just test string)', findShort('Just test string'));

//  -----------------------------------------------------------------------------
// Ex 4: toInitials

const toInitials = str => {
  const arr = str.toUpperCase().split(' ');
  const initials = arr.reduce((acc, item) => {
    return acc + `${item[0]}.`;
  }, '');

  return initials;
};

console.log('toInitials(Bill Gates)', toInitials('Bill Gates'));
