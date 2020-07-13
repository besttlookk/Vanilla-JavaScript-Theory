
// let reg = /harry/; //this is regular expression litrals in js
let reg = /harry/g; //global flag
// let reg = /harry/i; //global flag=case insensitity

// console.log(reg)
// console.log(reg.source);  //regular expression le ander ka masla.

let s = "this is great code with harry and also Harry bhai"
// functions to match expression.
//-------------------------1. exec()------------------------------------------
//  : this function will return an "array" for match or "null" for no match

// let result = reg.exec(s);
// console.log(result); // we can treate result as an object
// console.log(result.input);
// console.log(result.index);

// result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);
// console.log(result);

//------------------------2. test()-------------------------
//  returns true or false

// let result = reg.test(s);
// if (result){
// console.log(result)
// console.log(result.input);  // undefined
// console.log(result.index);
// }

//----------------------3. match()------------------------------
//it will return an array of result or null.
// let result3 = reg.match(s);  // this is wrong
// let result3 = s.match(reg);

//     console.log(result3);

//------------------- 4. search()----------------------------  

// returns index of first match else -1
// let result4 = s.match(reg);

// console.log(result4);

//----------------- 5. replace()-----------------------------

// retrns new placed srtings with  the replacement
let result5 = s.replace(reg,"pabhash");

console.log(result5);
