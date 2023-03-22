// const arr1 = new Array(); // creates an empty array
// const arr2 = new Array(3); // creates an array of length 3 with undefined values
// const arr3 = new Array(1, 2); // creates an array with the values [1, 2]
// const arr4 = new Array('asdasd'); // [ 'asdasd' ]
// const arr5 = new Array(() => {}); // [ƒ]
// const arr6 = new Array(null); // [null]

// console.log('arr4', arr6);

// console.log(Array.from('foo')); // ["f", "o", "o"]
// console.log(Array.from(5)); // []
// console.log(Array.from(() => {})); // []
// console.log(Array.from({ name: 'asd' })); // []

// // Array.from(arrayLike, (element, index) => { /* … */});
// console.log(Array.from([1, 2, 3], x => x + x)); // [2, 4, 6]
// console.log(Array.from([1, 2, 3], (x, i) => i)); // [0, 1, 2]

// const arr = ['a', 'b', 'c'];
// console.log(arr.at(1)); // 'b'
// console.log(arr.at(-1)); // 'c'
// console.log(arr.at(-2)); // 'b'
// console.log(arr.at(20)); // undefined

// const arr1 = () => {};
// const arr2 = [4, 5, 6];
// const newArr = arr1.concat(arr2); // TypeError: arr1.concat is not a function

// console.log('newArr', newArr);

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2)); // ["camel", "duck", "elephant"]
// console.log(animals.slice(2, 4)); // ["camel", "duck"]
// console.log(animals.slice(1, 5)); // ["bison", "camel", "duck", "elephant"]
// console.log(animals.slice(-2)); // ["duck", "elephant"]
// console.log(animals.slice(2, -1)); // ["camel", "duck"]
// console.log(animals.slice()); // ["ant", "bison", "camel", "duck", "elephant"]
// console.log(animals.slice(5, 1)); // []

// const array1 = [1, 2, 'a', '1a'];

// console.log(array1.toString()); // "1,2,a,1a"

console.log('new Date()', new Date([])); // Invalid Date
console.log('Date.now()', Date.now([])); // 1679517932540
