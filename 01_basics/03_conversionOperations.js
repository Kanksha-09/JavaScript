//let score = "33"

let score = "33ab"

//let score = null // => 0
// let score = undefined // =>NaN

// true => 1 and false => 0

console.log(typeof score);
console.log(typeof (score));

let valInNo = Number(score)
console.log(typeof valInNo);
console.log(valInNo);



let isLoggedIn = "kanksha"
let boolIsLoggedIn = Boolean(isLoggedIn)
console.log(boolIsLoggedIn);
// 1 => true ; 0 => false 
// "" => false 
// kanksha => true

// ****************** Operations **********

let value = 3
let negValue = -value
console.log(negValue);

let str1 = "hello"
let str2 = " kanksha"

let str3 = str1 + str2
console.log(str3)

console.log(+true);