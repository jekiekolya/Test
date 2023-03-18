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

// const toInitials = str => {
//   const arr = str.toUpperCase().split(' ');
//   const initials = arr.reduce((acc, item) => {
//     return acc + `${item[0]}.`;
//   }, '');

//   return initials;
// };

// console.log('toInitials(Bill Gates)', toInitials('Bill Gates'));

// ======================================================================
// EX-1: Palindrome

// function isPalindrome(str) {
//   const newString = str.split('').reverse().join('');

//   return str === newString;
// }

// console.log('isPalindrome(add)', isPalindrome('add'));
// console.log('isPalindrome(ada)', isPalindrome('ada'));

// ======================================================================
// EX-2: Find the shortest word

// const findShort = str => {
//   const arr = str.split(' ');

//   const shortestWord = arr.reduce((acc, item) => {
//     if (acc.length > item.length) {
//       return item;
//     }
//     return acc;
//   }, arr[0]);

//   return shortestWord;
// };

// OR

// const findShort = str => {
//   const shortestWord = str.split(' ').sort((a, b) => a.length - b.length)[0];

//   return shortestWord;
// };

// console.log('findShort(The Smallest word in sentence)', findShort('The Smallest word in sentence'));
// console.log('findShort(Just test string)', findShort('Just test string'));

// ======================================================================
// EX-3: Get initials

// const toInitials = str => {
//   const newStr = str
//     .toUpperCase()
//     .split(' ')
//     .map(word => word[0] + '.')
//     .join('');

//   return newStr;
// };

// console.log('toInitials(Bill Gates)', toInitials('Bill Gates'));

// ======================================================================
// EX-4: Get Sum

// const getSumDigits = num => {
//   // let str;

//   // if (num > 0) {
//   //   str = num.toString();
//   // } else {
//   //   str = (num * -1).toString();
//   // }

//   const str = Math.abs(num).toString();

//   const sum = str.split('').reduce((acc, item) => {
//     return acc + item * 1;
//   }, 0);

//   return sum;
// };

// console.log('getSumDigits(99)', getSumDigits(99));
// console.log('getSumDigits(-32)', getSumDigits(-32));

// ======================================================================
// EX-5: Get max and min number

// const getMaxAndMin = arr => {
//   const max = Math.max(...arr);
//   const min = Math.min(...arr);

//   return [min, max];
// };

// console.log('getMaxAndMin([2,9,10,25,47,4,1])', getMaxAndMin([2, 9, 10, 25, 47, 4, 1]));
// console.log('getMaxAndMin([2,1])', getMaxAndMin([2, 1]));
// console.log('getMaxAndMin([1])', getMaxAndMin([1]));

// ======================================================================
// EX-5: Get code

// const getCode = str => {
//   const arr = str.split('');

//   const code = arr
//     .map((item, index) => {
//       const newStr = item.padEnd(index + 1, item);
//       return newStr.charAt(0).toUpperCase() + newStr.slice(1).toLowerCase();
//     })
//     .join('-');

//   return code;
// };

// console.log('getCode(cwAt)', getCode('cwAt'));

// ======================================================================
// EX-6: Get capitals index of a string

// const getCapitalsIndex = str => {
//   const capitalsStr = str.toUpperCase();
//   const arr = str.split('');

//   const arrIndexes = [];
//   arr.forEach((item, index) => {
//     if (item === capitalsStr[index]) {
//       arrIndexes.push(index);
//     }
//   });

//   return arrIndexes;
// };

// console.log('getCapitalsIndex(CodEWaRs)', getCapitalsIndex('CodEWaRs'));
// console.log('getCapitalsIndex(justForTest)', getCapitalsIndex('justForTest'));

// ======================================================================
// EX-7: get array of numbers

// const getArrayOfNumbers = number => {
//   const arr = [];

//   for (let i = 1; i <= number; i++) {
//     if (i % 5 === 0 && i % 3 === 0) {
//       arr.push('foobar');
//     } else if (i % 5 === 0) {
//       arr.push('bar');
//     } else if (i % 3 === 0) {
//       arr.push('foo');
//     } else {
//       arr.push(i);
//     }
//   }

//   return arr;
// };

// console.log('getArrayOfNumbers(15)', getArrayOfNumbers(15));

// ======================================================================
// EX-8: get unique arr of numbers

// const getUniqueArrOfNumbers = (...arr) => {
//   const arrNumbers = arr.flat().sort((a, b) => a - b);

//   const uniqueArr = new Set(arrNumbers);
//   return [...uniqueArr];
// };

// console.log(
//   'getUniqueArrOfNumbers([1, 2, 3], [4, 1, 5], [6, 7, 8, 5])',
//   getUniqueArrOfNumbers([1, 2, 3], [4, 1, 5], [6, 7, 8, 5])
// );

// console.log(
//   'getUniqueArrOfNumbers([1], [2], [3,2,2],[4,1,1,2])',
//   getUniqueArrOfNumbers([1], [2], [3, 2, 2], [4, 1, 1, 2])
// );

// ======================================================================
// EX-9: create phone number

// const createPhoneNumber = number => {
//   const str = number.toString();

//   return `(${str.slice(0, 3)}) ${str.slice(3, 6)}-${str.slice(6)}`;
// };

// console.log('createPhoneNumber(123456789)', createPhoneNumber(123456789));
// console.log('createPhoneNumber(555095611)', createPhoneNumber(555095611));

// ======================================================================
// EX-10: get vowels count

// const getVowelsCount = str => {
//   const arrVowelsLetters = ['a', 'e', 'i', 'o', 'u'];

//   const arr = str.split('');

//   const vowelsCount = arr.reduce((acc, item) => {
//     if (arrVowelsLetters.includes(item)) {
//       return (acc += 1);
//     } else {
//       return acc;
//     }
//   }, 0);

//   return vowelsCount;
// };

// console.log('getVowelsCount(hello)', getVowelsCount('hello'));
// console.log('getVowelsCount(hello world)', getVowelsCount('hello world'));

// ======================================================================
// EX-10: get capital case

// const getCapitalCase = str => {
//   const arr = str.split(' ');

//   const capitalCase = arr
//     .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
//     .join(' ');

//   return capitalCase;
// };

// console.log(getCapitalCase('hello, world and this is a test'));

// const arr = [
//   { value: 1 },
//   { value: 2 },
//   5,
//   6,
//   7,
//   'test',
//   'test2',
//   'test3',
//   'test4',
//   false,
//   null,
//   undefined,
//   [123],
//   [456],
// ];

// Згрупуйте масив по типам данних

// Очікуваний результат

// {
//   object: [ { value: 1 }, { value: 2 } ],

//   null: [ null ],
// }

// ----------------------------------------------------------------

// const getObjWithTypes = arr => {
//   const objWithTypes = {
//     object: [],
//     number: [],
//     string: [],
//     boolean: [],
//     null: [],
//     undefined: [],
//     Array: [],
//   };

//   arr.forEach(element => {
//     if (typeof element === 'number') {
//       objWithTypes.number.push(element);
//     } else if (typeof element === 'undefined') {
//       objWithTypes.undefined.push(element);
//     } else if (typeof element === 'string') {
//       objWithTypes.string.push(element);
//     } else if (typeof element === 'boolean') {
//       objWithTypes.boolean.push(element);
//     } else if (Array.isArray(element)) {
//       objWithTypes.Array.push(element);
//     } else if (element === null) {
//       objWithTypes.null.push(element);
//     } else {
//       objWithTypes.object.push(element);
//     }
//   });

//   return objWithTypes;
// };

// console.log(
//   'getObjWithTypes()',
//   getObjWithTypes([
//     { value: 1 },
//     { value: 2 },
//     5,
//     6,
//     7,
//     'test',
//     'test2',
//     'test3',
//     'test4',
//     false,
//     null,
//     undefined,
//     [123],
//     [456],
//   ])
// );

// const text =
//   'Hello Mike. Here is my phone number +38 (098) 330-00-03, my wife phone number 068-339-09-09 and my sun number 0683390791. Please use same country code +38 to have opportunity to call me';
// // ['38 (098) 330-00-03', '068-339-09-09', '0683390791'];

// const getPhoneNumbers = text => {
//   const regex = /(\d{2}\s)?(\(?\d{3}\)?[\s-]?)?\d{3}[-]?\d{2}[-]?\d{2}/g;

//   const matches = text.match(regex);

//   return matches;
// };

// console.log('getPhoneNumbers(text)', getPhoneNumbers(text));

/* {
 value1: {
   value2: {
     value3: {
       value4: {
         value5: 'Random string',
        },
      },
    },
  },
} */

// function getNestedObject(keys, value) {
//   const arr = keys.split('.');

//   const obj = {};

//   obj[arr[0]] = { [arr[1]]: { [arr[2]]: { [arr[3]]: { [arr[4]]: value } } } };

//   return obj;
// }

// const result = getNestedObject('value1.value2.value3.value4.value5', 'Random string');

// console.log(result);

// --------------------------- DELETE ------------------------
// const person = { name: 'Mike', age: 30 };
// console.log(person);
// delete person.age;
// console.log(person); // {name: 'Mike'}

// const numArr = [1, 2, 3, 4, 5];
// console.log(numArr);
// delete numArr[2];
// console.log(numArr); // [1, 2, empty, 4, 5]
// console.log(numArr[2]); // undefined

// --------------------------- Types ------------------------
// const myClass = class MyClass {
//   constructor() {}
// };

// console.log(myClass.toString());
// console.log('typeof (1n)', typeof 1n); // typeof (1n) bigint
// const bigNum = BigInt(123456);
// console.log('bigNum', bigNum); //bigNum 123456n

// const mySymbol = Symbol(myClass);
// console.log(mySymbol, typeof Symbol('mySymbol')); // symbol
// console.log(mySymbol instanceof Symbol); // false

// const myObj = new Object();
// const myArr = new Array();

// console.log('myObj', myObj);
// console.log('myArr', myArr);

// --------------------------- new Map ------------------------

// const myMap = new Map();
// myMap.set([1, 2], [3, 4]);
// myMap.set({ key: 'key' }, 'Value');
// myMap.set(class MyClass {}, 'Value');
// myMap.set(12, '1');
// myMap.set(12, '1');

// console.log('myMap.get(12)', myMap.get(12));

// console.log('myMap', myMap);
// console.log('myMap.size', myMap.size);

// --------------------------- new Set ------------------------

// const mySet = new Set();
// mySet.add(1);
// mySet.add(2);
// mySet.add(2);
// mySet.add(2);

// mySet.size; // 2
// console.log('mySet.has(3)', mySet.has(3)); // false
// console.log('mySet', mySet);

// const unique = new Set([1, 2, 3, 3, 4]);
// console.log('Array.isArray(unique)', Array.isArray(unique)); // false
// console.log('unique', unique); // Set(4) {1, 2, 3, 4}
// console.log('unique instanceof Set', unique instanceof Set); // true

// --------------------------- new WeakMap ------------------------

// const myWeakMap = new WeakMap();

// myWeakMap.set(function asd() {}, 1); // WeakMap {{}: 1}
// //  Only object keys (references)

// console.log('myWeakMap', myWeakMap);

// --------------------------- new WeakSet ------------------------
// const myWeakSet = new WeakSet();

// myWeakSet.add({});
// //  Only object (references)

// console.log('myWeakSet', myWeakSet);

// --------------------------- Class ------------------------
// class MyClass {}
// function myFunction() {}
// const myNewFunction = function () {};
// console.dir(MyClass.toString()); // {constructor: f}
// console.dir(myFunction.toString()); // {constructor: f}

// function isClass(obj) {
//   return 'class' === obj.toString().split(' ')[0];
// }

// console.log('isClass(MyClass)', isClass(MyClass));

// console.log('isClass(myFunction)', isClass(myFunction));

// const myArr = [1, 2, 3, 4, 5];

// for (const key in myArr) {
//   console.log('key', key);
//   console.log('value', myArr[key]);
// }

// console.log(isNaN('NaN'));
// console.log(Number.isNaN('NaN'));

// const numObj = 77.1234;
// console.log(numObj.toPrecision()); // "77.1234"
// console.log(numObj.toPrecision(1)); // "8e+1"
// console.log(numObj.toPrecision(2)); // "77"
// console.log(numObj.toPrecision(5)); // "77.123"
// console.log(numObj.toPrecision(10)); // "77.12340000"

// const num4 = ['age', 2, {}];
// console.log(num4.toString()); // "NaN"

// ---------------------------------------- .at ----------------------------------------

// const str = 'hello world';
// console.log(str.charCodeAt(1)); // "101"
// console.log(str.charCodeAt(4)); // "111"
// // In the example above, the Unicode value for the character "e" at index 1 is 101.

// console.log(str.charCodeAt(5)); // "32"
// console.log(str.charCodeAt(20)); // "NaN"
// console.log(str.charCodeAt(-1)); // "NaN"
// console.log(str.charCodeAt(-2)); // "NaN"

// --------------------------------------- .concat --------------------------------------
// function con(str) {
//   result = str;
//   return result;
// }

// const str1 = 'Hello';
// const str2 = 'World';
// const str3 = '!';
// const result = str1.concat(', ', str2, str3);
// console.log(result); // Output: "Hello, World!"

// --------------------------------------- .endsWith --------------------------------------

// const str = 'Hello, World!';
// console.log(str.endsWith('World!')); // Output: true
// console.log(str.endsWith('!')); // Output: true
// console.log(str.endsWith('World!', 20)); // Output: true
// console.log(str.endsWith('World!', 13)); // Output: true
// console.log(str.endsWith('World!', 12)); // Output: false

// const str2 = 'as null';

// console.log(str2.endsWith(null)); // true
// console.log(str2.endsWith('to b2')); // false
// console.log(str2.endsWith('to b2', 19)); // true

// --------------------------------------- .includes --------------------------------------

// const str = 'Hello, World!';
// console.log(str.lastIndexOf('World')); // Output: 7
// console.log(str.lastIndexOf('!')); // Output: 12
// console.log(str.lastIndexOf('hello')); // Output: -1

// console.log(str.lastIndexOf(',')); // Output: 5
// console.log(str.lastIndexOf('Hello')); // Output: 0
// console.log(str.lastIndexOf('Hello', 2)); // Output: 0

// console.log(str.lastIndexOf('l', 0)); // Output: -1
// console.log(str.indexOf('l', 0)); // Output: 2
// console.log(str.lastIndexOf('l')); // Output: 10
// console.log(str.indexOf('l')); // Output: 2

// --------------------------------------- .match --------------------------------------
// const str = 'The quick brown fox jumps over the lazy dog';
// const matches = [...str.matchAll(/o/g)];
// console.log(matches);

// --------------------------------------- .padEnd --------------------------------------
// const str = 'Hello';
// console.log(str.padEnd(10)); // Output: "Hello     "
// console.log(str.padEnd(10, '-')); // Output: "Hello-----"

// --------------------------------------- .replace --------------------------------------
// const str = 'The quick brown fox jumps over the lazy dog.';
// const newStr = str.replace(/the/gi, 'a');
// console.log(newStr); // Output: "a quick brown fox jumps over a lazy dog."

// --------------------------------------- .search --------------------------------------
// const str = 'The quick brown fox jumps over the lazy dog.';
// const index = str.search(/brown/g);
// console.log(index); // Output: 10

// const str = 'The quick brown fox jumps over the lazy dog.';
// const singleElementArray = str.split('', 2);
// console.log(singleElementArray);

const str = 'hello world';
const sliceResult = str.slice(3, 7); // 'lo w'
const substringResult = str.substring(7, 3); // 'lo w' Автоматично поміняє індекси місцями

console.log('sliceResult', sliceResult);
console.log('substringResult', substringResult);
