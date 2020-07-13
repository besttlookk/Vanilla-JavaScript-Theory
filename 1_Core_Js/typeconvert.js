

//  integer to string(both are primitive data type)
// let myVar;
// myVar = String(34);
// console.log(myVar);
// console.log(typeof myVar);

// let newVar = 34;
// console.log(typeof newVar);
// let newVar1 = String(newVar);
// console.log(typeof newVar1)

// myVar = true;
// console.log(typeof myVar)
// let newVar = String(myVar);
// console.log(typeof newVar)

// let date = new Date();
// console.log(typeof date)
// let newVar = String(date)
// console.log(typeof newVar)

// myVar = [4,5,6,7,3,6,4];
// console.log(typeof myVar);
// console.log(myVar.length);  //7
// let newVar = String(myVar);
// console.log(typeof newVar);
// console.log(newVar.length);  // 13


// let i = 9;
// console.log(typeof String(i));
// // or
// console.log(typeof i.toString());

//-----------------------------------------------

/*  Converting Variables to Numbers
The Number() method
The parseInt() method
The parseFloat() method  */

/*
Number() :Returns a number, converted from its argument.
parseFloat()	:Parses its argument and returns a floating point number
parseInt():	Parses its argument and returns an integer */



// let myVar = "prabhash";
// console.log(typeof Number(myVar), Number(myVar));

// console.log(Number(true),typeof Number(true));
// console.log(Number(false),typeof Number(false));
//NOTE: Here output is 0 or 1

// let num = '34'
// console.log(num, typeof num);

// let newNum = parseInt('34.7');
// console.log(newNum, typeof newNum);

//----------------------------------------------

// COERCION

let myStr = "888";
let myNum = 34;
console.log(myStr + myNum);//  88834