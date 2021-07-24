/*
==============Rules for naming variable =========================

    1> Variable names cannot contain spaces.

    2> JavaScript identifiers (names) must begin with:

            A letter (A-Z or a-z)
            A dollar sign ($)
            Or an underscore (_)    
    // Using the underscore is not very common in JavaScript, but a convention among professional programmers is to use it as an alias for "private (hidden)" variables.
    
    3> Variable names can only contain letters, numbers, underscores, or dollar signs.
    
    4> Variable names are case-sensitive.

    5> Certain words may not be used as variable names, because they have other meanings within JavaScript.

    6> should not start with capital letters


Many professional programmers agree that there are best practices to keep in mind when naming your variables:

    1> Don’t use names that are too short. Simple one-letter names or names that don’t make sense are not a good option when naming variables

    2> Use more than one word to name your variable. This will ensure your variable name is precise.

    3>When using more than one word in your variable names, always put the adjective to the left. For example, this is correct: var greenGrass.

    4> Pick a style for names with more than one word, and stick to it. The two most common ways to join words to create a name are camelCase and using an underscore (_). JavaScript is flexible — either method works


*/

/*
// =================================Data types ==========================================
    1.Primitive(7): Number/ string/ Boolean / undefined / null / symbol / bigInt
    2. Object*/

/*
// =========JS Variables-scope-hoisting =====================================

JavaScript has two scopes: global and local. 
Local scope has two variations: the old function scope, and the new block scope introduced with ES6.
It’s worth noting that function scope is actually a special type of a block scope.

Global Scope:
    In a script, the outermost scope is the global scope. Any variables declared in this scope become global variables and are accessible from anywhere in the program:

    But as handy as this might seem, the use of global variables is discouraged in JavaScript. This is, for example, because they can potentially be overwritten by other scripts, or from elsewhere in your program.

Local Scope:

    Any variables declared inside a block belong to that particular block and become local variables.

    A "function" in JavaScript defines a scope for variables declared using "var", "let" and "const". Any variable declared within that function is only accessible from that function and any nested functions.

    A code block (if, for, etc.) defines a scope only for variables declared with the let and const keywords. The "var" keyword is limited to function scope, meaning that new scope can only be created inside functions.

    The let and const keywords have block scope, which creates a new, local scope for any block where they’re declared. You can also define standalone code blocks in JavaScript, and they similarly delimit a scope

-------HOISTING

A JavaScript interpreter performs many operations behind the scenes, and one of them is “hoisting”. If you’re not aware of this “hidden” behavior, it can cause a lot of confusion. The best way of thinking about the behavior of JavaScript variables is to always visualize them as consisting of two parts: a declaration and an initialization/assignment:

        var state;             // variable declaration
        state = "ready";       // variable assignment
        var state = "ready";   // declaration plus assignment

what you need to bear in mind is that, even though last example seem like one statement, in practice the JavaScript engine treats that single statement as two separate statements, just as in the first two lines of the example

We already know that any variable declared within a scope belongs to that scope. But what we don’t know yet is that, no matter where variables are declared within a particular scope, all variable declarations are moved to the top of their scope (global or local). This is called hoisting, as the variable declarations are hoisted to the top of the scope. "Note that hoisting only moves the declaration". Any assignments are left in place.

    console.log(state);   // output: undefined (and NOT reference Error)
    var state = "ready"; 
    // variable is declared and initialized with the default value undefined behind the scene
    // Here’s how the code is interpreted by a JavaScript engine:

    var state;           // moved to the top
    console.log(state);   
    state = "ready";     // left in place

It’s important to note that the variable is not physically moved. Hoisting is just a model describing what the JS engine does behind the scenes.

---let’s see how hoisting works with let variables:

{
  // Temporal dead one (TDZ) starts at the beginning of the scope
  console.log(state);   // output: "ReferenceError: Cannot access 'state' before initialization
  let state = "ready";  // end of TDZ. TDZ ends at actual variable declaration
} 

In this example, the console output is not undefined, but a reference error is thrown. Why? 
let variables, in contrast to var variables, can’t be read/written until they’ve been fully initialized.
They’re fully initialized only where they’re actually declared in the code. 
So, the let variable declaration is hoisted but not initialized with an undefined value, which is the case with var variables. 

The section from the beginning of the block to the actual variable declaration is called the Temporal Dead Zone. This is a mechanism that ensures better coding practice, forcing you to declare a variable before you use it. If we move the console statement out of TDZ, we’ll get the expected output: ready.

// -------Hoisting Vs functions(function declaration and function expression)

let’s first learn the difference between a function declaration and function expression:

function showState() {}          // function declaration
var showState = function() {};   // function expression
(Note: arrow functions work identically to function expressions.)

The easiest way to distinguish a function declaration from a function expression is to check the position of the word "function" in the statement. 
If function is the very first thing in the statement, then it’s a function declaration. Otherwise, it’s a function 
expression.

"Function declarations are hoisted completely". This means that the entire function’s body is moved to the top. This 
allows you to call a function before it has been declared:

        showState();            // output: Ready

        function showState() {
        console.log("Ready");
        } 

        var showState = function() {
        console.log("Idle");
        };

    The code is interpreted like this:
    function showState() {     // moved to the top (function declaration)
        console.log("Ready");
        } 

    var showState;            // moved to the top (variable declaration)

    showState();  

    showState = function() {   // left in place (variable assignment)
        console.log("Idle");
    };

// ----Hoisting Vs Classes
Class declarations are also hoisted in a similar way as variables declared with let statement:

// ---Things to Remember
var variables are function scoped.
let and const variables are block scoped (this includes functions too).
All declarations — classes, functions and variables — are hoisted to the top of the containing scope, before any part of your code is executed.
Functions are hoisted first, then variables.
Function declarations have priority over variable declarations, but not over variable assignments.



There are 3 ways to declare a JavaScript variable:

    1> Using var
    2> Using let
    3> Using const

Let:
    The let keyword was introduced in ES6 (2015).

    Variables defined with let cannot be Redeclared.

    Variables defined with let must be Declared before use.

    Variables defined with let have Block Scope.

Block Scope: 
    Before ES6 (2015), JavaScript had only Global Scope and Function Scope.

    ES6 introduced two important new JavaScript keywords: let and const.

    These two keywords provide Block Scope in JavaScript.

    Variables declared inside a { } block cannot be accessed from outside the block

    Redeclaring a variable inside a block will not redeclare the variable outside the block

        BUT

    Variables declared with the var keyword can NOT have block scope.

    Variables declared inside a { } block can be accessed from outside the block.


Let Hoisting:
    Variables defined with "var" are hoisted to the top and can be initialized at any time.
    Meaning: You can use the variable before it is declared

    Variables defined with "let" are also hoisted to the top of the block, but not initialized.
    Meaning: Using a let variable before it is declared will result in a "ReferenceError"
*/
