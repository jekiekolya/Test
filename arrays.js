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

// console.log('new Date()', new Date([])); // Invalid Date
// console.log('Date.now()', Date.now([])); // 1679517932540

// console.log('Date.parse(asdas)', Date.parse('asdas')); // NaN
// console.log('Date.parse([])', Date.parse([])); // NaN
// console.log('Date.parse({})', Date.parse({})); // NaN
// console.log('Date.parse(2023-03-22T20:45:32.533Z)', Date.parse('2023-03-22T20:45:32.533Z')); // 1679517932533
// console.log('Date.parse(0)', Date.parse('0')); // 946677600000
// console.log('Date.parse(0)', Date.parse('2023-03-22')); // 1679443200000

// const today1 = new Date();
// const sec1 = today1.getTime(); // 1679521113800

// const xmas95 = new Date('December 25, 1995 23:15:30');
// const sec = xmas95.getTime(); // 819926130000

// console.log('sec1', sec1);
// console.log(sec); // 23

// const theBigDay = new Date();
// theBigDay.setMonth(6); // 2023-07-22T20:45:36.236Z

// //Watch out for end of month transitions
// const endOfMonth = new Date(2016, 7, 31);
// endOfMonth.setMonth(1); // 2016-03-01T22:00:00.000Z

// console.log(endOfMonth); //Wed Mar 02 2016 00:00:00
// console.log('theBigDay', theBigDay);

// const theBigDay = new Date(); // 2023-03-22T22:34:46.507Z - obj
// console.log('theBigDay', theBigDay);
// theBigDay.toUTCString(); // Wed, 22 Mar 2023 22:34:46 GMT - string

// console.log(theBigDay.toUTCString());

// const theBigDay = new Date('July 1, 1999'); // 1999-06-30T21:00:00.000Z
// const sameAsBigDay = new Date(); // 2023-03-22T21:57:07.354Z
// sameAsBigDay.setTime('July 1, 1999'); //  Invalid Date

// console.log('theBigDay', theBigDay);
// console.log('sameAsBigDay', sameAsBigDay);

const date = new Date('2023-03-23T12:34:56.789Z');
const formatter = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  day: 'numeric',
  timeZone: 'America/New_York',
});
const formattedDate = formatter.format(date); // 23 Thursday

console.log(formattedDate);
// Output: "Thursday, March 23, 2023, 8:34:56 AM"
