// singleton
// Object.create

//object literals

const mySym = Symbol("key1"); //Symbol representation


const JsUser = {
    name: "Kanksha",
    "full name": "Kanksha Pharate",
    [mySym]:"myKey1", // => now this is used as a symbol as it is declared in square brackets
    age: 20,
    location:"Pune",
    email:"krp45@gmail.com",
    isLoggedIn: false,
    lastLogInDays: ["monday","saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]); //=> this is the only valid way
// console.log(JsUser[mySym]); //=> myKey1

JsUser.email="kanksha@gmail.com";
//Object.freeze(JsUser)// => because of this the values won't be changed

JsUser.email="kanksha@gml.com";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());