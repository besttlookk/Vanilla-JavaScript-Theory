/*
A JavaScript object literal is a comma-separated list of name-value pairs wrapped in curly braces.
Object literals encapsulate data, enclosing it in a tidy package. 
This minimizes the use of global variables which can cause problems when combining code.

Object literal property values can be of any data type, including array literals, functions, 
and nested object literals.

*/

const book1 = {
  title: 'book one',
  author: 'Jone Doe',
  year: '2013',
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`
  },
}

// console.log(book1.getSummary());

//  what if we want to create more such book

const book2 = {
  title: 'book two',
  author: 'Cohleo Pole',
  year: '2010',
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`
  },
}

//  console.log(book2.getSummary());

//   and so on................................

//--- to get the arrays of the "value" inside the object
// console.log(Object.values(book1))
console.log(Object.values(book2))
//--- to get the arrays of the "key" inside the object
// console.log(Object.keys(book1))
console.log(Object.keys(book2))

//  NOTICE : we are also getting the function value in the array.

// due to these main reasons we moved to "CONSTRUCTOR"
