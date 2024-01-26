let score = "Anurag"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = undefined

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);    // 2**3 => 2^3
// console.log(2/3);
// console.log(2%3);     // modulous operator

let str1 = "Hello"
let str2 = " Anurag"

let str3 = str1 + str2  // sums up 2 strings.
// console.log(str3);  

// console.log("1" + 2);            // 12
// console.log(1 + "2");            // 12
// 1. console.log("1" + 2 + 2);        // 122
// 2. console.log(1 + 2 + "2");        // 32

    /*
    --> The addition operation is performed from left to right. 
    --> First, "1" + 2 results in the string "12".
    --> Then, the result "12" is concatenated with the number 2,
    --> resulting in the string "122".
    */

    /* 
    --> So, In 2nd, 1 + 2 results in 3. Then, the string concatenation operation is 
    --> performed with the result (3) and the string "2", resulting in string "32". 
    */


// console.log( (3 + 4) * 5 % 3);   // useless format

// console.log(+true);  // 1
// console.log(+"");    // 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);