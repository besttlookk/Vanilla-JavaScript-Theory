// Class diclarations
// Parameterized constructor
class Book {
  constructor(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`
  }
  getAge() {
    const years = new Date().getFullYear() - this.year
    return `${this.title} is ${years} years old `
  }
  revise(newYear) {
    this.year = newYear // we are changing the value here from the above function
    this.revise = true
  }
  //static
  static topBookStores() {
    return 'amazon'
  }
}

// instantiate object
const book1 = new Book('book 1', 'john Doe', 2013)

console.log({ book1 })
// book1.revise('2019')
console.log({ book1 })

//--------------static method---

console.log(Book.topBookStores())

//   ==============================Class Expression[named or unnamed] [less used]=======================================

// Unnamed class expression
var Mobile = class {
  constructor() {
    this.properties = 'properties'
  }
}

// Named Class expression
var Mobile = class Mobile2 {
  constructor() {
    this.properties = 'properties'
  }
}

// ===================is class hoisting possible?=============[no they are not hoisted]=======
// first declare the class then use it
