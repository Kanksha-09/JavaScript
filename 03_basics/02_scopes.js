var c = 300  // not suitable to use var in if and else conditions
let a = 20

if (true) {
    let a =10
    const b = 20
    // c= 300 // avoid using this 
    var c = 30  // var is global
}

console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username = "kanksha"

    function two(){
        const website = "youtube";
        console.log(username)
    }
    // console.log(website); // can't because website is declared inside

    // two()
    console.log("heyyy");
}

// one()

if (true){
    const username = "kanks"
    if(true){
        const website = " youtube"
        console.log(username + website);
    }
}
// console.log(username);

// ++++++++++++++Interesting+++++++++++++

//console.log(addone(3)); // no error

function addone (num){
    return num + 1
}
console.log(addone(3));


// console.log(addtwo(4)); // error cuz we have declared it in variable function form 

const addtwo = function(num){
    return num+2
}
console.log(addtwo(4));