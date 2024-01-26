// console.log(2 > 1);  //true
// console.log(2 >= 1); //true
// console.log(2 < 1);  //false
// console.log(2 == 1); //true
// console.log(2 != 1); //true


// console.log("2" > 1);  //true (JavaScript is not that dumb)
// console.log("02" > 1); //true

console.log(null > 0);  //false
console.log(null == 0); //false  ==> equal sign converts null to NaN
console.log(null >= 0); //true   ==> conditionals convert null into 0

console.log(undefined == 0);  //false
console.log(undefined > 0);   //false
console.log(undefined < 0);   //false

//      ===     ==> it strictly checks operands and their data types also.

console.log("2" === 2);  //false, because data type is not same