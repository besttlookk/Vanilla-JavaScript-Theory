/*
1. if/else
2. switch
3. try/catch/finally

*/

/*
// ------------------if else
    if (condition1) {
      //  block of code to be executed if condition1 is true
    } else if (condition2) {
      //  block of code to be executed if the condition1 is false and condition2 is true
    } else {
      //  block of code to be executed if the condition1 is false and condition2 is false
    }


*/

/*
// ==================switch========================

Use the switch statement to select one of many code blocks to be executed.

Syntax
    switch(expression) {
      case x:
        // code block
        break;
      case y:
        // code block
        break;
      default:
        // code block
    }

This is how it works:
    The switch expression is evaluated once.
    The value of the expression is compared with the values of each case.
    If there is a match, the associated block of code is executed.
    If there is no match, the default code block is executed.

//-------------The break Keyword
When JavaScript reaches a break keyword, it breaks out of the switch block.
This will stop the execution inside the switch block.
It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.

Note: If you omit the break statement, the next case will be executed even if the evaluation does not match the case.


// The default case does not have to be the last case in a switch block:
// If default is not the last case in the switch block, remember to end the default case with a break.

// -----------Common Code Blocks

      switch (new Date().getDay()) {
        case 4:
        case 5:
          text = "Soon it is Weekend";
          break;
        case 0:
        case 6:
          text = "It is Weekend";
          break;
        default:
          text = "Looking forward to the Weekend";
      }

// Switch cases use strict comparison (===).
*/
