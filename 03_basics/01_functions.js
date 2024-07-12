function saymyname(){
    console.log("Kanksha");
}

// saymyname()

// function addnos(no1,no2){
//     console.log( no1+no2);
// }

function addnos(no1,no2){
    // let result = no1+no2
    // return result;

    return no1+no2;
}

// addnos(3,4)
// addnos(3,null)
// addnos(3,"a")

const result=addnos(3,5)
// console.log(result);

// function loginUser(username = "sam"){ //default value is sam
//     if(!username){
//         console.log("Please enter a valid name");
//         return
//     }
//     return `${username} just logged in`
// }
function loginUser(username){
    if(!username){
        console.log("Please enter a valid name");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUser("Kanksha"));

// console.log(loginUser()); // => o/p= undefined just logged in

function calculatCartPrice(val1,val2, ...num1){
    return num1;
}

console.log(calculatCartPrice(2,4,5));

const user ={
    username:"kanksha",
    price: "infinity"
}

function handleObj(anyobj){
    console.log(`Username is ${anyobj.username} and the price is ${anyobj.price}`);
}

handleObj(user)
handleObj({
    username:"sam",
    price:789
})

const myarr = [200,400,600,800]
function returnSecVal(getarr){
    return getarr[1];
}

console.log(returnSecVal(myarr));

// console.log(returnSecVal( [200,400,600,800]));
