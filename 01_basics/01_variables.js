// const, let, var, console.table([])

const accountId = 1278
let accountHolder = "Anurag"
var branch = "Rewa City"
bank = "SBI"         // variable can also be defined without any datatype but it is non-recommended.
let anotherName

// here, except const(constant), everything could be changed.

/*
    Prefer not to use var due to its issue in block scope and functional scope.
*/

accountHolder = "Anurag Singh"
branch = "Rewa main"
bank = "State Bank of India"

// console.log(name);

console.table([accountId, accountHolder, branch, bank, anotherName])