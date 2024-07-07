const name = "kanksha "
const repoCount = 12

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name}and my repo count is ${repoCount}`);
// Use backticks for easy reference

const gameName = new String('kanksha')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(4));
console.log(gameName.indexOf('s'));

const newStringg = gameName.substring(0, 4) ;
console.log(newStringg);

const anotherString = gameName.slice(-6, -2);
console.log(anotherString);

const stringOne = "   kanksha   "
console.log(stringOne);
console.log(stringOne.trim());

const url = "https://kanksha.com"

console.log(url.replace('ank','aank'));

console.log(url.includes('ank'));

console.log(url.split('s'));
