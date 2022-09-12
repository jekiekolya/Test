'use strict';

const bankSystem = {
  privat: 1000,
  mono: 1500,

  getSum() {
    const nameBank = prompt('Name bank');

    return this[nameBank];
  },

  addCard() {
    const newCard = prompt('Add name bank');
    this[newCard] = 0;
    console.log(this);
  },
};
let a = [1, 2, 3, 4];
a.concat([1, 2, 3, 4]);
const result = _.add(2, 3);
console.log(result); // 5
