const accountId = 144553
let accountEmail = "madhavi@google.com"
var accountPassward = "12345"
accountCity = "Bilaspur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "mp@mp.com"
accountPassward = "22896847"
accountCity = "Raipur"

console.log(accountId);
/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassward, accountCity, accountState])