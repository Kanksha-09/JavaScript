//arrays

const myArr = [0, 1, 2, 3, 4, 5, true, "kanksha"];

const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr2[0]);

//Array Methods

// myArr2.push(5)
// myArr2.push(6)
// console.log(myArr2);

// myArr2.pop()
// myArr2.unshift(0);
// console.log(myArr2);
// myArr2.shift();
// console.log(myArr2);
// console.log(myArr2.includes(4));
// console.log(myArr2.indexOf(4));

// const newArray = myArr.join();

// console.log(myArr);
// console.log(newArray);
// console.log(typeof newArray); // String

// slice, splice

console.log("A ", myArr2);

const myn1 = myArr2.slice(1,3); // excludes last index
console.log(myn1); // => [2,3] excludes the last index while slicing so numbers at index 1 and 2 are returned

console.log("B ", myArr2);
const myn2 = myArr2.splice(1,3); // includes last index but it also removes the sliced part out of the Array hence array is manipulated

console.log("C ", myArr2);
console.log(myn2); // => [2,3,4] includes the last index so numbers at index 1,2 and 3 are returned 

// in C array the output will be [1] therefore the original array will be changed i.e. now the original array will be only [1]