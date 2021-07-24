/*
================================JavaScript Arithmetic Operators
Arithmetic operators are used to perform arithmetic on numbers:

Operator	Description
+	          Addition
-	          Subtraction
*	          Multiplication
**	        Exponentiation (ES2016)
/	          Division
%	          Modulus (Division Remainder)
++	        Increment
--	        Decrement

*/

/*
========================JavaScript Assignment Operators ==========================
Assignment operators assign values to JavaScript variables.
(mixing arithmatic operator with assignment operator)
Operator	        Example	                Same As
=	                x = y	                     x= y
+=	              x += y                   x = x + y
-=	              x -= y                   x = x - y
*=	              x *= y                   x = x * y
/=	              x /= y                   x = x / y
%=	              x %= y                   x = x % y
**=	              x **= y                  x = x ** y

*/

/*
// ===================JavaScript String Operators ======================
The + operator can also be used to add (concatenate) strings.
The += assignment operator can also be used to add (concatenate) strings:
When used on strings, the + operator is called the concatenation operator.

let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2; //John Doe

let text1 = "What a very ";
text1 += "nice day"; What a very nice day
*/

/*
// =====================JavaScript Comparison Operators(Relational operator)=======================

Operator	           Description
==	                  equal to
===	                  equal value and equal type
!=	                  not equal
!==	                  not equal value or not equal type
>	                    greater than
<	                    less than
>=	                  greater than or equal to
<=	                  less than or equal to
?	                    ternary operator(conditional operator)
*/

/* 
// =============JavaScript Logical Operators==================
Operator	      Description
&&	              logical and
||	              logical or
!	                logical not

*/

/*
// ==============JavaScript Type Operators
typeof	                      Returns the type of a variable
instanceof	                Returns true if an object is an instance of an object type
*/

/*
// ================JavaScript Bitwise Operators================

Bit operators work on 32 bits numbers.

Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.

Operator	Description	      Example	    Same as	        Result	Decimal
&	          AND	            5 & 1	    0101 & 0001	        0001	 1
|	          OR	            5 | 1	    0101 | 0001	        0101	 5
~	          NOT	            ~ 5	        ~0101	            1010	 10
^	          XOR	            5 ^ 1	    0101 ^ 0001	         0100	 4
<<	  Zero fill left shift	5 << 1	  0101 << 1	           1010	 10
>>	  Signed right shift	  5 >> 1	  0101 >> 1	           0010	  2
>>>	  Zero fill right shift	5 >>> 1	  0101 >>> 1	         0010	  2

*/

/*
// ====================================Unary operator===============

The simplest operators in JavaScript are unary operators. A unary operator works on one operand. The unary operators in JavaScript are:

Unary plus (+)  – convert an operand into a number
Unary minus (-) – convert an operand into a number and negate the value after that.
prefix / postfix increments (++) – add one to its operand
prefix / postfix decrements (--) – subtract one from its operand.
      let a = 10;
      a = +a; // 10
      a = -a; // -10

In case you apply the unary plus or minus on a non-numeric value, it performs the same conversion as the Number() function.

    let s = '10';
    console.log(+s); // 10
In this example, s is a string. However, when we placed the unary plus operator in front of it, the string s is converted to a number.

The following example shows how the unary operator converts boolean values into numbers, false to 0 and true to 1.
let f = false,
    t = true;
console.log(+f); // 0
console.log(+t); // 1

----Increment / Decrements operators

Both of increment and decrement operators have two versions: prefix and postfix.

It’s important to note that the prefix decrement, the value of the variable changed before the statement is evaluated.

The only difference between the postfix and prefix is that JavaScript doesn’t evaluate them until the containing statement has been evaluated.

      let i = 10, j = 20;
      let m = i-- + j;
      console.log(m); // 30
      console.log(i); // 9

      i = 10;
      let n = --i + j;
      console.log(n); // 29
      console.log(i); // 9

*/

/*
// =======================Comma operator (,)==========================
The comma operator (,) evaluates each of its operands (from left to right) and returns the value of the last operand. This lets you create a compound expression in which multiple expressions are evaluated, with the compound expression's final value being the value of the rightmost of its member expressions. This is commonly used to provide multiple parameters to a for loop.

for (var i = 0, j = 9; i <= 9; i++, j--)
  console.log('a[' + i + '][' + j + '] = ' + a[i][j]);


var a, b, c;

a = b = 3, c = 4; // Returns 4 in console
console.log(a); // 3 (left-most)

var x, y, z;

x = (y = 5, z = 6); // Returns 6 in console
console.log(x); // 6 (right-most)



*/

/*
// ---------------- == vs === --------------------------

=== : strict equality comperision(no coersion)
== : loose equality comparision(allow type coersion)

let x = "John";
let y = new String("John");

// typeof x will return string
// typeof y will return object

(x == y) is "true" because x and y have equal values
(x === y) is "false" because x and y have different types (string and object)

When using the === operator, equal values may not be equal, because the === operator expects equality in both data type and value.

NOTE: Objects cannot be compared
let x = new String("John");             
let y = new String("John");

// (x == y) is false because x and y are objects

comparing two JavaScript objects will always return false.

*/
