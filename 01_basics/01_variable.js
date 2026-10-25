const accountId = 144225
let accountEmail = "tushar@github.codespace"
var accountPassword = "123478"
accountCity = "Mangaluru"
let accountState;
//accountId = 2 //gives TypeError

accountEmail = "hc@hc.com"
accountPassword = "21213135"
accountCity = "Manipal"

console.log(accountId)
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])