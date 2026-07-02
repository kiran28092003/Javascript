const accountId = 14456
let accountEmail = "kiran123@gmail.com"
var accountPass = "123"
accountCity = "Mumbai"
let accountState;
// accountId = 2   //not allowed because const
console.log(accountId);
accountEmail = "Viran123@gmail.com"
console.table([accountId, accountEmail, accountPass, accountCity,accountState]);
/*
prefer not to use var
because of issue in block scope and functional scope
 */


