//dates

let myDate = new Date()
console.log(myDate.toString()); // more effective
console.log(myDate.toJSON());

console.log(typeof myDate); // => object

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());

let MyCreatedDate = new Date()
console.log(MyCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate.getMonth()+1); // we have added 1 cuz the month starts from 0
console.log(newDate.getDay());

console.log(`${newDate.getDate()} and the time`);

newDate.toLocaleDateString('default', {
    weekday: "long"
})