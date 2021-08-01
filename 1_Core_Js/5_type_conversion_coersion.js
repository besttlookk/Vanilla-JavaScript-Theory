/*
// ==========================JavaScript Type Conversion
Converting Strings to Numbers
Converting Numbers to Strings
Converting Dates to Numbers
Converting Numbers to Dates
Converting Booleans to Numbers
Converting Numbers to Booleans

JavaScript variables can be converted to a new variable and another data type:

    1> By the use of a JavaScript function
    2> Automatically by JavaScript itself

*/

/*
---------------------------1. Converting Strings to Numbers:

    > The global method "Number()" can convert strings to numbers.

    > Strings containing numbers (like "3.14") convert to numbers (like 3.14).

    > Empty strings convert to 0.

    > Anything else converts to NaN (Not a Number).

            Number("3.14")    // returns 3.14
            Number(" ")       // returns 0
            Number("")        // returns 0
            Number("99 88")   // returns NaN

            If the number cannot be converted, NaN (Not a Number) is returned.

    > There are 3 JavaScript methods that can be used to convert variables to numbers:
            The Number() method
            The parseInt() method
            The parseFloat() method

      "These methods are not number methods, but "global JavaScript methods."

      --Global JavaScript Methods
        JavaScript global methods can be used on all JavaScript data types.
        These are the most relevant methods, when working with numbers:

        Method(Global)	            Description
        Number()	      Returns a number, converted from its argument.
        parseFloat()   	Parses its argument and returns a floating point number
        parseInt()	    Parses its argument and returns an integer

        Number("10,33");       // returns NaN
        Number("10 33");       // returns NaN
        Number("John");        // returns NaN

        console.log(Number.parseInt('20px'))   //20
        console.log(Number.parseInt('20px', 10))   //20 (second argument is base)
        console.log(Number.parseInt('20.20px'))  // 20
        console.log(Number.parseFloat('20.20px'))  //20.2

        // now a days it is common to call this function on Number object
        parseInt("10 20 30");   // returns 10
        parseInt("10 years");   // returns 10
        parseInt("years 10");   // returns NaN 

        parseFloat("10 20 30");  // returns 10
        parseFloat("10 years");  // returns 10
        parseFloat("years 10");  // returns NaN

----The Unary + Operator

  The unary + operator can be used to convert a variable to a number:

  let y = "5";      // y is a string
  let x = + y;      // x is a number

  If the variable cannot be converted, it will still become a number, but with the value NaN (Not a Number):

  let y = "John";   // y is a string
  let x = + y;      // x is a number (NaN)


*/

/*
-------------------2. Converting Numbers to Strings

The global method "String()" can convert numbers to strings.

It can be used on any type of numbers, literals, variables, or expressions:
      String(x)         // returns a string from a number variable x
      String(123)       // returns a string from a number literal 123
      String(100 + 23)  // returns a string from a number from an expression

The Number method toString() does the same.
      x.toString()
      (123).toString()
      (100 + 23).toString()

more methods(number Methods) that can be used to convert numbers to strings:

      Method	                                  Description
  toExponential()	        Returns a string, with a number rounded and written using exponential notation.
  toFixed()	              Returns a string, with a number rounded and written with a specified number of decimals.
  toPrecision()	          Returns a string, with a number written with a specified length

  let x = 9.656;
  x.toExponential(2);     // returns 9.66e+0
  x.toExponential(4);     // returns 9.6560e+0
  x.toExponential(6);     // returns 9.656000e+0
  (The parameter is optional. If you don't specify it, JavaScript will not round the number)
  x.toExponential()       // returns 9.66e+0


  let x = 9.656;
  x.toFixed(0);           // returns 10
  x.toFixed(2);           // returns 9.66
  x.toFixed(4);           // returns 9.6560
  x.toFixed(6);           // returns 9.656000

  let x = 9.656;
  x.toPrecision();        // returns 9.656
  x.toPrecision(2);       // returns 9.7
  x.toPrecision(4);       // returns 9.656
  x.toPrecision(6);       // returns 9.65600

*/

/*
-------------3. Converting Dates to Numbers
The global method Number() can be used to convert dates to numbers.

    d = new Date();
    Number(d)          // returns 1404568027739

    The date method getTime() does the same.

    d = new Date();
    d.getTime()        // returns 1404568027739

*/

/*
-----------4. Converting Dates to Strings
The global method String() can convert dates to strings.

String(Date())  // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"

The Date method toString() does the same.
Date().toString()  // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"


*/

/*
------------------5. Converting Booleans to Numbers
The global method Number() can also convert booleans to numbers.

Number(false)     // returns 0
Number(true)      // returns 1
*/

/*
--------------6. Converting Booleans to Strings
The global method String() can convert booleans to strings.

String(false)      // returns "false"
String(true)       // returns "true"
The Boolean method toString() does the same.

false.toString()   // returns "false"
true.toString()    // returns "true"

*/

/*
// ==========================Automatic Type Conversion(Type Coersion)
When JavaScript tries to operate on a "wrong" data type, it will try to convert the value to a "right" type.

The result is not always what you expect:
    5 + null    // returns 5         because null is converted to 0
    "5" + null  // returns "5null"   because null is converted to "null"
    "5" + 2     // returns "52"      because 2 is converted to "2"
    "5" - 2     // returns 3         because "5" is converted to 5
    "5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2


*/

/*
// ---------------Truly vs Falsly values---------------
List of all 5 falsly value: 0, "", undefined, null, NAN

value which converts to flase on Boolean conversion is called Falsy value

Rest other value is truly

{} - truly



*/
