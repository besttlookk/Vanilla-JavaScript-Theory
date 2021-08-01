/*
Number internally saved as 64bit(53bit for number rest for decimal and sign)
--so there is a limit of how long a number can be.

A number literal like 37 in JavaScript code is a floating-point value, not an integer. 
There is no separate integer type in common everyday use. 
(JavaScript now has a BigInt type, but it was not designed to replace Number for everyday uses.
37 is still a Number, not a BigInt.)

When used as a function, Number(value) converts a string or other value to the Number type. 
If the value can't be converted, it returns NaN.
    123    // one-hundred twenty-three
    123.0  // same
    123 === 123.0  // true

============================Static methods
------Number.isNaN()
Determine whether the passed value is NaN.
      console.log(Number.isNaN(23))      //false(bcoz it is a number)
      console.log(Number.isNaN("23"))    //false
      console.log(Number.isNaN("23f"))    // false
      console.log(Number.isNaN("abc"))    //false (vallue)
      console.log(Number.isNaN(+"20px"))   //true (here we are trying coersion: but result is NaN )
      console.log(Number.isNaN(20 / 0))   // false (infinity)

// this is not the best eay to check for number< Better way: isFinite()

-------------Number.isFinite()[BEST METHOD TO CHECK FOR NUMBER]
Determine whether the passed value is a finite number.
      console.log(Number.isFinite(23))    // true
      console.log(Number.isFinite("23"))   //false
      console.log(Number.isFinite("23f"))   // false
      console.log(Number.isFinite("abc"))   // false
      console.log(Number.isFinite(+"20px"))  // false
      console.log(Number.isFinite(20 / 0))    // false

-----------------Number.isInteger()[if you are sure that the value is number..then this method is good]
Determine whether the passed value is an integer.
      console.log(Number.isInteger(23))    // true
      console.log(Number.isInteger(.20))    // false
      console.log(Number.isInteger(20.2))   //false
      console.log(Number.isInteger(20 / 0)) //false

Number.isSafeInteger()
Determine whether the passed value is a safe integer (number between -(2^53 - 1) and 2^53 - 1).

Number.parseFloat(string)
This is the same as the global parseFloat() function.

Number.parseInt(string, [radix])
This is the same as the global parseInt() function.

*/
// Maximum safe integer
console.log(2 ** 53 - 1); // 9007199254740991 (any number larger than this is not save)
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// ---------------------bigInt[to store any length number]
console.log(2233333445566693939394); //2.233333445566694e+21(does not have precision)
console.log(2233333445566693939394n); // 2233333445566693939394(adding n conver it into bigInt)
console.log(BigInt(2233333445566693939394)); // 2233333445566693939394 (using bigInt function)

// all the usual operatior still works the same
console.log(1000n + 2000n); // 3000
console.log(typeof (1000n + 2000n)); // bigInt

// it is not possible to mix bigInt to regular number
// Math operators will not work with bigInt
console.log(Math.sqrt(16n)); //ERROR: cannot convert bigInt to number

console.log(3 / 2); //1.5
console.log(3n / 2n); //1(cuts off decimal part)

// --------Internationlize number

const options = {
  style: "currency",
  unit: "celsius",
  currency: "EUR",
  // useGrouping: false,
};

console.log("US:      ", new Intl.NumberFormat("en-US", options).format(num)); // US:       €3,884,764.23
console.log("Germany: ", new Intl.NumberFormat("de-DE", options).format(num)); // Germany:  3.884.764,23 €
console.log("Syria:   ", new Intl.NumberFormat("ar-SY", options).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
);
