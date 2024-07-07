const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.6789; // => It rounds off the number

// const otherNumber = 123.6789; // => 124
// const otherNumber = 1123.6789; // => 1.12e+3

console.log(otherNumber.toPrecision(4)); // => 23.68

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // => 1,000,000
console.log(hundreds.toLocaleString('en-IN')); // => 10,00,000

// ************** Maths ***************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(-4.6)); // => just rounds off -4.3 => -4
// console.log(Math.ceil(-4.6)); // => upper value -4.6 => -4
// console.log(Math.floor(-4.3)); // => lower value -4.3 => -5
// console.log(Math.min(4,3,5,7));
// console.log(Math.max(4,3,5,7));

console.log(Math.random()); // value between 0 and 1
console.log(Math.floor(Math.random()*10)+1); // value between 0 and 1

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min);
