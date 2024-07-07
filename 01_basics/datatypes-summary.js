// Primitive Type

// 7 types: they are all call by value:
// String, NUmber, Boolean, null, undefined, Symbol, BigInt

// Reference Type (Non primitive)
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

// ********************************

// Stack => (Primitive)  ,   Heap => (NOn-Primitive)

let myName = "Knaksha Pharate"

let anotherName = myName
anotherName = "xyzabc"

console.log(myName); //=> Kanksha Pharate
console.log(anotherName); //=> xyzabc

// The reason is because we are making the changes in the primitive datatype variables which uses stack

let userOne = {
    email : "UserOne@gmail.com",
    upi : "userOne@ybl"
}

let userTwo = userOne;

userTwo.email = "userTwo@gmail.com";

console.log(userOne); // => here the email will change to userTwo@gmail.com

console.log(userTwo); // => here too the email will be userTwo@gmail.com

// Here the reason is because we use Non Primitive datatypes which uses heap