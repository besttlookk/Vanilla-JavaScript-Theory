// what if we want to create a new class using other class
// Super class/ Base class/ Parent class

// pehle wale inheritence me...3 step follow kerne perte the..plus ..agal se function define kerna perta tha...dhekne me clean nai lagta tha
// sabko class ke ander daal diya..
// class me "super" use kerte..call ki jagah
class Book {
  constructor(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
  }
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`
  }
}

// Magzine Subclass
class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year)
    this.month = month
  }
}

//instantige magazine
const mag1 = new Magazine('book 2', 'prabhash', '2019', 'jan')
console.log(mag1)
console.log(mag1.getSummary())

// ==================================Harry=================================
console.log('this is Tutorial31.js')

class Employee {
  constructor(givenName, givenExperience, givenDivision) {
    this.name = givenName
    this.experience = givenExperience
    this.division = givenDivision
  }

  slogan() {
    return `I am ${this.name} and this company is the best`
  }

  joiningYear() {
    return 2020 - this.experience
  }

  static add(a, b) {
    return a + b
  }
}

class Programmer extends Employee {
  constructor(givenName, givenExperience, givenDivision, language, github) {
    super(givenName, givenExperience, givenDivision)
    this.language = language
    this.github = github
  }

  favoriteLanguage() {
    if (this.language == 'python') {
      return 'Python'
    } else {
      return 'JavaScript'
    }
  }

  static multiply(a, b) {
    return a * b
  }
}

harry = new Employee('Harry', 56, 'Division')
// console.log(harry.joiningYear());
// console.log(harry.slogan());
// console.log(Employee.add(34, 5))
rohan = new Programmer('Rohan', 3, 'Lays', 'Go', 'Rohan420')
console.log(rohan)
// console.log(rohan.favoriteLanguage())
// console.log(Programmer.multiply(5, 7));
