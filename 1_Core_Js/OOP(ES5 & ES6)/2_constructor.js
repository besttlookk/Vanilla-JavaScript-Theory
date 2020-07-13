// It is basically just a function (this is also is ES5)
// to differntiate "constructor" from the " function" we use UPPERCASE in constrctor

function Book (title,author,year) {
     this.title = title;
     this.author = author;
     this.year = year;
     this.getSummary=function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
    

}
// extensite the object... this way we can easily create any number of books using keyword 'new'
const book1 = new Book('Book 1','John Doe',2013)
const book2 = new Book('Book 2','Cohleo Pole',2010)

// console.log(book1);
// console.log(book2);
// console.log(book1.getSummary());
// console.log(book2.getSummary());


// to get the arrays of the "value" inside the object
// console.log(Object.values(book1))
// console.log(Object.values(book2))
// to get the arrays of the "key" inside the object
// console.log(Object.keys(book1))
// console.log(Object.keys(book2))

// --------

function Hotel(name, rooms, booked) {
    
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function() {
        
        return this.rooms - this.booked;
    };
}

hotel1 = new Hotel('Quay', 40, 25)

console.log(hotel1)
console.log(hotel1.checkAvailability())
console.log(Object.values(hotel1))
console.log(Object.keys(hotel1))

// consructor solved one problem but here also it print the function in the array/...so we move to "PROTOTYPE"