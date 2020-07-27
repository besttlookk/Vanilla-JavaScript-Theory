// WHAT IF we want to create a different constructor which want to inherit some properties from other constructor
// we CALL to the other constructor


// constructor
// function Book (title,author,year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
    
// }
// Book.prototype.getSummary=function() {
//     return `${this.title} was written by ${this.author} in ${this.year}`
// }

// Magazine Constructor
// function Magazine(title,author,year,month) {
        // isse sirf Book object ki intance variable ka accsess milega prototype variables and methods ka nahi
//       Book.call(this,title,author,year);
//       this.month = month;

// }
//instantiate Magazine
// const mag1 = new Magazine("mag 1",'John Doe','2013','jan')
// console.log(mag1.getSummary()) //even after calling the function we can not able to access the funtion of prototype bcoz we still have not made link between the prototypies bcoz in js inheritance is achived through prototype.


// -----making the link [prototype inheritance]
// Magazine.prototype = Object.create(Book.prototype);

//instantiate Magazine
// const mag1 = new Magazine("mag 1",'John Doe','2013','jan')
// console.log(mag1.getSummary())
// console.log(mag1)
// but when you look into prototype of .."book"..will come first. we have to make magazine constructor above "book" constructor.... WE HAVE TO DO IT MANUALLY

// Magazine.prototype.constructor = Magazine;
// console.log(mag1)


// console.log(mag1.getSummary()) // this will produce ERROR bcoz we have to inherit the constructor's prototype

// now it will work after creating object of book. prototype
// console.log(mag1.getSummary())


// =========================================one super and two subclass===========================

// super class
// var Mobile = function() {

// }

// // Prototype method
// Mobile.prototype.getModel = function() {
//     return this.model;
// }


// sub-class[here we are not using call bcoz Mobile doesnot have any property of its own]
// var Samsung = function(model, price) {
//     this.model = model;
//     this.price = price;

// }

// sub-class
// var Lenovo = function(model) {
//     this.model = model
// }

// inheretance
// Samsung.prototype = Object.create(Mobile.prototype);
// Lenovo.prototype = Object.create(Mobile.prototype)

// resetting the constructor of samsung & Lenevo
// Samsung.prototype.constructor = Samsung
// Lenovo.prototype.constructor = Lenovo

// using function to make subclass
// extend(Samsung, Mobile)
// extend(Lenovo, Mobile)


// since price is only in samsung
// Samsung.prototype.getPrice = function() {
//     return this.price
// }

// creating obj
// var galaxy = new Samsung('Galaxy', 3000)
// var phn2 = new Lenovo('phn 2')
// console.log(galaxy.getModel());
// console.log(phn2.getModel());
// console.log(galaxy.getPrice())


// what if we have many -many subclass like this. to decrese repitation we will create function 
// function for inheritance
// function extend(child, parent) {
//     child.prototype = Object.create(parent.prototype);
//     child.prototype.constructor = child;
// }



// ===============================When superclass has its own property=================================

// var Mobile = function(model) {
//     this.model = model
// }

// Mobile.prototype.getModel = function() {
//     return this.model
// }

// var Samsung = function(model, price) {
//     Mobile.call(this,model)
//     this.price = price
// }

// // inheritance
// Samsung.prototype = Object.create(Mobile.prototype);
// Samsung.prototype.constructor = Samsung;

// var galaxy = new Samsung('Galaxy', 3000)
// console.log(galaxy.getModel())


// ===========================================METHOD OVERRIDING==============================================

// function extend(child, parent) {
//     child.prototype = Object.create(parent.prototype);
//     child.prototype.constructor = child;
// }

// // super class
// var Mobile = function() {

// }

// Mobile.prototype.show = function() {
//     return 'Super class Method'
// }

// // sub class
// var Samsung = function() {
// }


// // sub class samsung extending super class mobile
// extend(Samsung, Mobile);

// // overriding method using same name[must be written after extend]
// Samsung.prototype.show = function(){
//     return 'sub class method'
// }

// var sam = new Samsung();

// console.log(sam.show())


// ======================================MULTILEVEL INHERITENCE========================================================
// super class
var Mobile = function() {
        this.a = 10;
}

Mobile.prototype.z = 30;


// sub class
var Samsung = function() {
    Mobile.call(this);
    this.b = 20;
}

var Galaxy = function() {
    Samsung.call(this);
    this.c = 100
}

// Prototype inheritense
Samsung.prototype = Object.create(Mobile.prototype)
Samsung.prototype.constructor = Samsung;

Galaxy.prototype = Object.create(Samsung.prototype);
Galaxy.prototype.constructor - Galaxy;

var m = new Mobile()
var s = new Samsung()
var g = new Galaxy()


console.log(g.a)
console.log(g.z)
console.log(g.c)
console.log(s.a)
console.log(s.z)