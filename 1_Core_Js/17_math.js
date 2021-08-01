"use strict";

/*
Math is a built-in object that has properties and methods for mathematical constants and functions. 
It’s not a function object.
Math works with the Number type. It doesn't work with BigInt.
Unlike many other global objects, Math is not a constructor. All properties and methods of Math are static.

*/

// The JavaScript Math object allows you to perform mathematical tasks on numbers.

/*
  Math.PI;   
  Math.round()  // Returns the value of the number x rounded to the nearest integer.
  Math.pow()
Math.sqrt()
Math.cbrt(x)  //cube rute
Math.abs()
Math.ceil()
Math.floor()
Math.sin()
Math.cos()
Math.min() and Math.max()
Math.trunc(x) // Returns the integer portion of x, removing any fractional digits.
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
console.log(Math.PI);   //3.141592653589793
console.log(Math.pow(2,5)); // 32

console.log(Math.round(4.7)); // 5
console.log(Math.round(4.4));  // 4

console.log(Math.ceil(4.7));   // 5
console.log(Math.ceil(4.4));   // 5

console.log(Math.floor(4.7));  // 4
console.log(Math.floor(4.4));  // 4

console.log(Math.sqrt(64));   // 8
console.log(64 ** (1/2) )   // 8
console.log(27 ** (1/3) )   // 3
console.log(Math.cbrt(729))  //9

// max min also do coersion but no parshing
console.log(Math.max(1,3,2,10))   //10
console.log(Math.min(1,3,2,10))  // 1
console.log(Math.max(1,3,"2","10")) // 10
console.log(Math.min("1",3,"2",10))  // 1
console.log(Math.max(1,3,"2","10px")) // NaN

console.log(Math.abs(20))   // 20
console.log(Math.abs(20.20))  //20.2
console.log(Math.abs(-20.20))  // 20.2
console.log(Math.abs(-20))    // 20

console.log(Math.trunc(2.5))  // 2
console.log(Math.trunc(2.8))  // 2


console.log(Math.sin(45*Math.PI/180));  //0.7071067811865475

*/
// -------------------Random Value ------------
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

// -----This JavaScript function always returns a random number between min and max (both included):
// Example
// randon() ....0 to 1
// random()*(max-min) ... 0 to (max- min)  [add "min" both side]  = min to max
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRndInteger(10, 20));

// -------------Math.Round() vs Math.truc vs Math.floor
console.log(Math.round(2.4)); // 2
console.log(Math.round(2.7)); // 3
console.log(Math.trunc(2.4)); //2
console.log(Math.trunc(2.7)); //2
console.log(Math.floor(2.4)); // 2
console.log(Math.floor(2.7)); //2
// --"floor and trunc...does the same thing when dealing with +ve number"
console.log(Math.trunc(-2.4)); // -2
console.log(Math.trunc(-2.7)); // -2
console.log(Math.floor(-2.4)); // -3
console.log(Math.floor(-2.7)); // -3

//

console.log((2.4).toFixed()); // "2" it do round but returns string
console.log(+(2.4).toFixed()); // 2 uniary operator convert string to number
console.log((2.7).toFixed()); // "3"
console.log((2.4).toFixed(1)); // "2.4"
console.log((2.4).toFixed(2)); // "2.40"
