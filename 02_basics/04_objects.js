//const tinderUser = new Object() //Singleton Object

const tinderUser = {}; //non-singleton object

tinderUser.id="123abc";
tinderUser.name="Lappy";
tinderUser.isLoggedIn=false;

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname: {
            firstname:"kanksha",
            lastname:"pharate"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1:"a", 2: "b"
}
const obj2 = {
    3:"a", 4: "b"
}
const obj4 = { 5:"w",4:"r"}

//const obj3 = { obj1, obj2}
//const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "k@gmail.com"
    },
    {
        id: 1,
        email: "k@gmail.com"
    },
    {
        id: 1,
        email: "k@gmail.com"
    }
]

users[1].email;
//console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedin'));

const course ={
    coursename: "js demo",
    price: "999",
    courseTime: "19 hours"
}

// course.courseTime

const {courseTime: ctime} = course
// console.log(courseTime);
console.log(ctime);

// {
//     "name": "himanshu",
//     "coursename": "js demo"
// }  //Json syntax not js