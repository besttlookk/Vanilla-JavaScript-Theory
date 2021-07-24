/*
To be able to operate on variables, it is important to know something about the type.

NOTE: When adding a number and a string, JavaScript will treat the number as a string.
      JavaScript evaluates expressions from left to right. Different sequences can produce different results:
        let x = 16 + 4 + "Volvo"; //20Volvo
        let x = "Volvo" + 16 + 4; //Volvo164

JavaScript Types are Dynamic,
  This means that the same variable can be used to hold different data types:
    let x;           // Now x is undefined
    x = 5;           // Now x is a Number
    x = "John";      // Now x is a String

JavaScript Primitives
  A primitive value is a value that has no properties or methods.
  A primitive data type is data that has a primitive value.
  JavaScript defines 5 types of primitive data types:
      string/boolean/number/null/undefined

The typeof Operator:
  The typeof operator returns the type of a variable or an expression:

Undefined:
    In JavaScript, a variable without a value, has the value undefined. The type is also undefined.
    Any variable can be emptied, by setting the value to undefined. The type will also be undefined.


Empty Values: let car = "";
  An empty value has nothing to do with undefined.

  An empty string has both a legal value and a type.

*/
