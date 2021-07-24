/*
A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).

        function name(parameter1, parameter2, parameter3) {
        // code to be executed
        }

Function parameters are listed inside the parentheses () in the function definition.

Function arguments are the values received by the function when it is invoked.

Inside the function, the arguments (the parameters) behave as local variables.

*/

/*
--------------Function Expressions
A JavaScript function can also be defined using an expression.

A function expression can be stored in a variable:

            const x = function (a, b) {return a * b};

The function above is actually an anonymous function (a function without a name).

Functions stored in variables do not need function names. They are always invoked (called) using the variable name.


*/

/*
// ---------------------Function Hoisting
Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.

Hoisting applies to variable declarations and to "function declarations".

Because of this, JavaScript functions can be called before they are declared:

Functions defined using an expression are not hoisted.


*/

/*
// ---------------Self-Invoking Functions
Function expressions can be made "self-invoking".

A self-invoking expression is invoked (started) automatically, without being called.

Function expressions will execute automatically if the expression is followed by ().

You cannot self-invoke a function declaration.

You have to add parentheses around the function to indicate that it is a function expression:

        (function () {
        let x = "Hello!!";  // I will invoke myself
        })();


*/

/*
------------------Functions are Objects

The typeof operator in JavaScript returns "function" for functions.

But, JavaScript functions can best be described as objects.

JavaScript functions have both properties and methods.

The arguments.length property returns the number of arguments received when the function was invoked:

        function myFunction(a, b) {
        return arguments.length;
        }


*/

/*
// ===================Arrow function=============
Arrow functions allows a short syntax for writing "function expressions".

You don't need the function keyword, the return keyword, and the curly brackets.

        // ES5
        var x = function(x, y) {
        return x * y;
        }

        // ES6
        const x = (x, y) => x * y;

Arrow functions do not have their own "this". With arrow functions there are no binding of this.
They are not well suited for defining object methods.

Arrow functions are NOT hoisted. They must be defined before they are used.

Using "const" is safer than using var, because a function expression is always constant value.

You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them:


*/
