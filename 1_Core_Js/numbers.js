console.log("CONSOLE IS WORKING");
let num1 = 74;
let num2 = '45'
let num3 = 45.80
let num4 = .045

let val1 = "12mon"

//    number to string
// console.log(String(num1), typeof String(num1))
// console.log(num1.toString(), typeof num1.toString());

//-------------------------------
//   fixing decimal= number of decimal
// console.log(num3.toFixed(1))
// console.log(num3.toFixed(2))
// console.log(num3.toFixed(3))
// console.log(num3.toFixed(4))

//--------------------------
//     toPrecision() = total number of digits
/*
console.log(num3.toPrecision())
// console.log(num3.toPrecision(0))
console.log(num3.toPrecision(1))
console.log(num3.toPrecision(2))
console.log(num3.toPrecision(3))
console.log(num3.toPrecision(4))

console.log(num1.toPrecision())
console.log(num1.toPrecision(3))
console.log(num1.toPrecision(4))
*/

// ---------------------------------------
//    Converting Variables to Numbers
/*
The Number() method
The parseInt() method
The parseFloat() method

*/
/*
console.log(Number(val1), typeof Number(val1));
console.log(Number(true), typeof Number(true));
console.log(Number("  10  "), typeof Number("   10   "));
console.log(Number("10.45"), typeof Number("10.45"));
console.log(Number("10,33"), typeof Number(10, 33));


console.log(parseInt(val1), typeof parseInt(val1));
console.log(parseInt("10.56"), typeof parseInt(10.56)); // it doesnot return decimal value. 
// for that case we use PARSEFLOAT()
console.log(parseFloat("10.56"), typeof parseFloat("10.56"));

console.log(parseInt(true), typeof parseInt(true));
console.log(parseInt("  10  "), typeof parseInt("   10   "));
console.log(parseInt("10.45"), typeof parseInt("10.45"));
console.log(parseInt("10,33"), typeof parseInt("10, 33"));

*/

//----------------------------------------------
//   MIN_VALUE  &  MAX_VALUE

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);
