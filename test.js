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
// console.log(shogun);
// console.log(shogun.__proto__.constructor.__proto__ === Function.prototype);
// console.log(shogun.__proto__.__proto__.__proto__ === null);

var isAnagram = function (test, original) {
  if (test.length !== original.length) {
    return false;
  }

  const arrTest = test.toLowerCase().split('');
  const arrOriginal = original.toLowerCase().split('');

  for (const item of arrTest) {
    const index = arrOriginal.indexOf(item);
    if (index !== -1) {
      arrOriginal.splice(index, 1);
    }
  }

  return arrOriginal.length === 0;
};
console.log(isAnagram('dumble', 'bumble'));
