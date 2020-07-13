"use strict"

console.log("CONSOLE IS WORKING PROPERLY")

// The JavaScript Math object allows you to perform mathematical tasks on numbers.

/*
  Math.PI;   
  Math.round()
  Math.pow()
Math.sqrt()
Math.abs()
Math.ceil()
Math.floor()
Math.sin()
Math.cos()
Math.min() and Math.max()
Math.random()
Math Properties (Constants)
JavaScript provides 8 mathematical constants that can be accessed with the Math object:
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E

*/
/*
console.log(Math.PI);
console.log(Math.pow(2,5));
console.log(Math.round(4.7));
console.log(Math.round(4.4));
console.log(Math.ceil(4.7));
console.log(Math.ceil(4.4));
console.log(Math.floor(4.7));
console.log(Math.floor(4.4));
console.log(Math.sqrt(64));
console.log(Math.sin(45*Math.PI/180));

*/

// console.log(Math.random())  // less than 1
//for random integer

// let x = Math.floor(Math.random()*10)  // 0 to 9
// let x = Math.floor(Math.random()*11)  // 0 to 10
// let x = Math.floor(Math.random()*100)  // 0 to 99
// let x = Math.floor(Math.random()*101).. 0  to 100
// let x = Math.floor(Math.random()*1000)
// console.log(x);

// -------------------------------------------
//
/* This JavaScript function always returns a random number between min (included) and max (excluded):

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  */
/*
 This JavaScript function always returns a random number between min and max (both included):

 Example
 function getRndInteger(min, max) {
   return Math.floor(Math.random() * (max - min + 1) ) + min;  */
console.log("testing strict mode")