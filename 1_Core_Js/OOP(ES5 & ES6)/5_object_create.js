
// object of prototype
const bookProtos = {

    getSummary :function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    },

    getAge : function() {
        const years = new Date().getFullYear() - this.year;
        return  `${this.title} is ${years} years old `;
    }
}

// create the object(two ways to do it)

// const book1 = Object.create(bookProtos); // we are passing the prototype.
// book1.title ='book 1'
// book1.author ='prabhash'
// book1.year ='2013'

// console.log(book1)

// ------------or-------------------

const book1 = Object.create(bookProtos, {
    title : { value : 'book 1'},
    author : { value : 'prabhash'},
    year : { value : '2013'}

});

console.log(book1)

