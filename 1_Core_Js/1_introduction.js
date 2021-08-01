/*
// --Basic defination:
Javascript is a High-level, object-oriented, multi-paradigm programming language


// --detailed defination
    JS is a "high-level", prototype-based object-oriented, multi-paradigm, 
    interpreted OR just-in-time complied,
    dynamic,single-threaded,garbage-collected programming language with first class function and non-blocking event loop
    concorrency modal

//----------------1. HIGH LEVEL LANGUAGE Vs LOW LEVEL LANGUAGE

The main difference between high level language and low level language is that, 
Programmers can easily understand or interpret or compile the high level language in comparison of machine. 
On the other hand, Machine can easily understand the low level language in comparison of human beings.

S.NO	       High Level Language	                          Low Level Language
1.	   It is programmer friendly language.	              It is a machine friendly language.
2.	   High level language is less memory efficient.	    Low level language is high memory efficient.
3.	   It is easy to understand.	                        It is tough to understand.
4.	   It is simple to debug.	                            It is complex to debug comparatively.
5.	   It is simple to maintain.	                        It is complex to maintain comparatively.
6.	   It is portable.	                                  It is non-portable.
7.	   It can run on any platform.	                      It is machine-dependent.
8.	   It needs compiler or interpreter for translation.	It needs assembler for translation.
9.	   It is used widely for programming.	                It is not commonly used now-a-d


// 2====================Complier VS Interpreter vs Assembler

                Compiler	                                          Interpreter
A compiler is a program that converts the             An interpreter takes a source program and runs it line by line, 
entire source code of a programming language          translating each line as it comes to it
into executable machine code for a CPU.  

The compiler takes a large amount of time             An interpreter takes less amount of time to analyze the source 
to analyze the entire source code but the             code but the overall execution time of the program is slower.
overall execution time of the program is 
comparatively faster. 

The compiler generates the error message              Its Debugging is easier as it continues translating the 
only after scanning the whole program,                program until the error is met.
so debugging is comparatively hard as 
the error can be present anywhere in 
the program.  	


The compiler requires a lot of memory for             It requires less memory than a compiler because no object code is generated.
generating object codes.	


Generates intermediate object code. 	                No intermediate object code is generated.

For Security purpose compiler is more useful.	        The interpreter is a little vulnerable in case of security.

Examples: C, C++, Java  	                            Examples: Python, Perl, JavaScript, Ru


// ============3. Garbage Collected
its an algorithm inside js engine which automatically remove old unused object from the computer memory,
in order not to clog it up with unnecessary stuff.


// ===========4. Multi-paradigm
PARADIGM: An approch and minset of structuring code, which will direct your coding style.

Three popular paradigms are:
  1. Procedural programing(organinzing a code in a liner way)
  2. Object oriented programming(OOP)
  3. Functional programming(FP)

  Paradigm can also be classifed as "Imperative" and "Declarative"
  
  JS follow all . we can choice any one

// ==========5.First-class function
In a langauge with "first-class function" , functions are simply treated as variable.
we can pass into other function, and return them from function.

It alows us to do functional programming.
Not all leanguage has first-class function

// ==============6.Dynamically typed(and not stromgly typied language)
No data type defination. Types become know at runtime
Data type of variable can be changed
  

// ============7. single-threaded , non-bloking event loop
Concurrency model: how the JS engine handles multiple tasks happening at the same time

WHY DO WE NEED "CONCURRENCY MODEL"?
bcz js runs in one "single thread", so it can only do one thing at a time.

SO WHAT ABOUT LONG_RUNNING TIME(like fetching data from the server).It sounds like it would block the single thread.
  However we want non-blocking behaviour. HOW DO WE ACHIEVE THAT??
  -By using an "event loop": takes long running tasks, executes them in the background, and put them back in the main thread 
      once they are finised
*/

/*
// ----------JS engine and JS runtime
JS engine is a program that executes js code.
Every browser has its own JS engine. Probably the most popular one is: googles V8 engine

any JS engine consist of : CALL STACK and HEAP
CALL STACK:where our code executes using "executes conext"
HEAP: Is a unstructered memory pool that stores all the object that our application needs

*/
/*
// ----------------------Scope / scope chain / lexical enviorment -----------------

What is Scope?
  Scope in JavaScript refers to the accessibility or visibility of variables. 
  That is, which parts of a program have access to the variable or where the variable is visible.

Why is Scope Important?
  The main benefit of scope is security. That is, the variables can be accessed from only a certain area of the program. Using scope, we can avoid unintended modifications to the variables from other parts of the program.
  The scope also reduces the namespace collisions. That is, we can use the same variable names in different scopes.

Types of Scope
There are three types of scope in JavaScript — 1) Global Scope, 2) Function Scope, and, 3) Block Scope.

Scope Chain
When a variable is used in JavaScript, the JavaScript engine will try to find the variable’s value in the current scope. If it could not find the variable, it will look into the outer scope and will continue to do so until it finds the variable or reaches global scope.
If it’s still could not find the variable, it will either implicitly declare the variable in the global scope (if not in strict mode) or return an error.

*/

/*
// ===========================This ==========================
Special variable that is created for every execution context(every function).
Takes the value of (points to ) the owner of the function in which the "this" keyword is used.

'This' is not static . It depends on how the function is called , and its value is only assigned when the function is "actually called";

4 different ways a function can be called

  1. as a method(function attach to the object) : 
       when we call this method inside the "method". it will simply point to the object in which the method is called

  2. Simple function call: undefined(in strict mode) or Window object

  3. Arrow function: this of surrounding function(lexical this). arrow function does not get its own this keywoard.

  4. Event Listener :<DOM element that the handler is attached to>

  5. new/ call / apply/ bind

NOTE: 'this' will never points to the function itselt(in which it is used) and also not its variable envioroment



*/

/*
// -----------------------argument object -----------------------

we can sent more argument than a fynction receives

// we dont get argument object for arrow function

// it is not imporant in modern js


*/
