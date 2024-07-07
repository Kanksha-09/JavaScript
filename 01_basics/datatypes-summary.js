// Primitive and reference type

// 7 types: they are all call by value:
// String, NUmber, Boolean, null, undefined, Symbol, BigInt

// Reference type (Non primitive)
//Array, objects, Functions

const score = 190;
const scoreVal = 190.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123');

console.log(id);
console.log(anotherId);
console.log(id === anotherId);

const bigNumber = 12345678909843n;
const heros = ["Shaktimaan", "Naagraj", "Doga"];

let myObj = {
name: "kanksha",
age: 20
}

console.log(typeof myObj); // => object
console.log(typeof outsideTemp); // => object as null will return object