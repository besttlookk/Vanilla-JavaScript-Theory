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

// -----------call/apply/bind
const nameobj = {
  firstName: "Prabhash",
  lastName: "Ranjan",
  age: 31,
  summary() {
    console.log(`${this.firstName} ${this.lastName} is of age ${this.age}`);
  },
};

const newNameobj = {
  firstName: "Rahul",
  lastName: "Kumar",
  age: 30,
};

const summ = nameobj.summary;

// here summ is function..and inside summ "this" is undefined..
// we have to tel JS explicitly or manually what "this" keyword whould look like.
// there are 3 functions methods for that: call/apply/bind
// summ() //ERROR

// 1--call(pointing which obj to refer...and then pass all the arguments if any)
summ.call(newNameobj);

// 2--apply(it is similar to call but it takes aruments as a array)(not used much anymore)

// 3--bind
// Bind doesnot immediatly call the function..but it gives a new function with :this binded
// this is easily that "call" as we dont have to use call again and again each time
const bindSumm = summ.bind(newNameobj);
bindSumm(); // Rahul Kumar is of age 30 // we can pass argument in this function if any

// we can also bind the argument during binding phase..
// ex: const bindSum = summ.bind(newNameobj, agument1) // whenever we call bindSum..first argument is fixed = argument1

// -------------clousure
// A function has access to the varibale enviormen(VE) of the EXECUSION CONTEXTin which itwas created
// Closure:VE attacthedto the function,exactlyas it wasat the timeand place the function was created.
//Closure scope has PRIORITY over scope-chain
