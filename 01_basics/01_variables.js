const accountId = 14457;
let accountEmail = "kanksha@gmail.com";
var accountPass = "12345";
/* prefer not to use var
because of the issue in block scope and functional scope */

accountCity = "Pune";  //not preferable

// accountId = 2     //not allowed redeclartion of const variable

accountEmail = "krp@krp.com"
accountPass = "54321"

console.log(accountId);
console.log(accountEmail);
console.log(accountPass);

console.table([accountId, accountEmail, accountPass, accountCity]);