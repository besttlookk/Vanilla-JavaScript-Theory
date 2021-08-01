/*
// ----------------------Loops: 
  for - loops through a block of code a number of times
  for/in - loops through the properties of an object
  for/of - loops through the values of an iterable object
  while - loops through a block of code while a specified condition is true
  do/while - also loops through a block of code while a specified condition is true

*/

/*
------------------------For loop ------------------------
  SYNTAX:
      for (statement 1; statement 2; statement 3) {
          // code block to be executed
    }   

  Statement 1 is executed (one time) before the execution of the code block.

  Statement 2 defines the condition for executing the code block.

  Statement 3 is executed (every time) after the code block has been executed.

  EXAMPLE: 
    for (let i = 0; i < 5; i++) {
      text += "The number is " + i + "<br>";
    }
*/

/*
--------------------For/in loop-------------------------
Syntax
    for (key in object) {
      // code block to be executed
    }

Example
    const person = {fname:"John", lname:"Doe", age:25};

    let text = "";
    for (let x in person) {
      text += person[x];
    }

    console.log(text) // JohnDoe25

Example Explained
    The for in loop iterates over a person object
    Each iteration returns a key (x)
    The key is used to access the value of the key
    The value of the key is person[x]

---For In Over Arrays
    The JavaScript for in statement can also loop over the properties of an Array:

    Syntax
        for (variable in array) {
          code
        }


    Example
        const numbers = [45, 4, 9, 16, 25];

        let txt = "";
        for (let x in numbers) {
          txt += numbers[x];
        }

        console.log(txt) // 45491625
*/

/*
------------------------------for / of loop-----------------
const arr = [2,3,4,4,5]
for(const item of arr) console.log(item)  // 2,3,4,4,5


// we can use continue and break keyword inside
for(const item of arr) {    // 2, 3,5
  if(item === 4) continue
  console.log(item)
}

// what if we also want the current index..and not only current element(its bit thouch..but we can do it)
for(const item of arr.entries()) console.log(item) [0,2], [1,3], [2,4].....

OR
for(const [index, element] of arr.entries()) console.log(index )

// -------------with object

const obj = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
  key4: "value4",
}

// we make array of keys and then iterate over
for(const item of Object.keys(obj)) console.log(item)
for(const item of Object.entries(obj)) console.log(item) // [ 'key1', 'value1' ] / [ 'key2', 'value2' ]






*/

/*
// ------------------While loop---------------
The while loop loops through a block of code as long as a specified condition is true.
Syntax
    while (condition) {
      // code block to be executed
    }

Example
    while (i < 10) {
      text += "The number is " + i;
      i++;
    }

*/

/*
-------------------The Do While Loop-------------------
The do while loop is a variant of the while loop. 
This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

Syntax
    do {
      // code block to be executed
    }
    while (condition);


  do {
    text += "The number is " + i;
    i++;
  }
  while (i < 10);
*/

/*
// ------------------Break/ continue

    The break statement "jumps out" of a loop.

    The continue statement "jumps over" one iteration in the loop.

    The break and the continue statements are the only JavaScript statements that can "jump out of" a code block.
*/
