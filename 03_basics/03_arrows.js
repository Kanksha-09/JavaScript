const user ={
    username: "Kanksha",
    price: 999,

    welcomeMsg: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}


// user.welcomeMsg();
// user.username = "sally"
// user.welcomeMsg()

// console.log(this);

function one(){
    let username = "Kanks"
    console.log(this.username); // o/p: undefined this keyword works only in the object declaration and not in the regular func delaration
}
// one()


// const three = function () {
//     let username = "Kanks"
//     console.log(this.username); // o/p: undefined this keyword works only in the object declaration and not in the regular func delaration
// }

const three = () => {
    let username = "Kanks";
    console.log(this);
    //console.log(this.username); // o/p: undefined this keyword works only in the object declaration and not in the regular func delaration
}

// three()


// const addtwo = (num1,num2)=>{
//     return num1+num2
// }  // explicitly return

// const addtwo = (num1,num2) =>  (num1+num2) // implicit function 

const addtwo = (num1,num2) => ({username:"kanksha"})  // object return 

console.log(addtwo(4,5));

// const myarr = [2,4,6,8]

// myarr.forEach()