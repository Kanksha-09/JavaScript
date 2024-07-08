const marvel = ["Thor", "Iron-Man","SpiderMan"]
const dc = ["SuperMan","Flash","Batman"]
// marvel.push(dc)
// console.log(marvel);

// console.log(marvel[3][1]);


// const all = marvel.concat(dc)
// console.log(all);

const all = [...marvel,...dc];

// console.log(all);   // more preferable

const ano_arr = [1,2,3,[4,5,6],7,[6,7,[8,5]]]

const real_ano_arr = ano_arr.flat(Infinity)

console.log(real_ano_arr);

console.log(Array.isArray("Kanksha"));
console.log(Array.from("Kanksha"));
console.log(Array.from({name: "Kanksha"})); // interesting o/p => []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
