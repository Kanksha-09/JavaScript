// Immediately Invoked Function Expression (IIFE)

// (function one(){
//     console.log(`DB CONNECTED`);
// })(); // here semicolon is necessary
// //to remove global scope pollution in there there is golbal scope variable pollution

// one()

( function two(){
    console.log(`DB CONNECTED TWO`);
}) ();

((name) => {
    console.log(`DB CONNECTED THREE, ${name}`);
} ) ('Kanksha')
