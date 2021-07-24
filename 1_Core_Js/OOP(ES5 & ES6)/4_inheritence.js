// WHAT IF we want to create a different constructor which want to inherit some properties from other constructor(like Car constrctor inheriets Vehicle Constructor )
// we CALL to the other constructor
// fully inheritence is a three step process:
//   1. Book.call()
//   2. Magzine.prototype = Object.create(Book.prototype) // dono ke prototype object me link banan hoga
//   3. Magzine.prototype.constructor = Magzine // manullly banana hoga ki tumhara actual constructor kaun hai

// --1st Constructor
// function Book(title, author, year) {
//   this.title = title
//   this.author = author
//   this.year = year
// }
// Book.prototype.getSummary = function () {
//   return `${this.title} was written by ${this.author} in ${this.year}`
// }

// -- 2nd constructor :Magazine Constructor
// function Magazine(title, author, year, month) {
//   // --isse sirf Book object ki intance variable ka accsess milega prototype variables and methods ka nahi
//   Book.call(this, title, author, year)
//   this.month = month
// }
//instantiate Magazine
// const mag1 = new Magazine("mag 1",'John Doe','2013','jan')
// console.log(mag1.getSummary()) //even after calling the function we can not able to access the funtion of prototype bcoz we still have not made link between the prototypies bcoz in js inheritance is achived through prototype.

// -----making the link [prototype inheritance] (by making Mazine prototype similar to Book prototype)
// even if we add fucntions to the Book prototype later...it
// Magazine.prototype = Object.create(Book.prototype)

//--instantiate Magazine
// const mag1 = new Magazine('mag 1', 'John Doe', '2013', 'jan')
// console.log(mag1.getSummary()) // this will produce ERROR bcoz we have to inherit the constructor's prototype
// console.log(mag1)
//-- but when you look into prototype of .."book"..will come first. we have to make magazine constructor above "book" constructor.... WE HAVE TO DO IT MANUALLY

// Magazine.prototype.constructor = Magazine
// console.log(mag1)
// console.log(mag1.getSummary())

// =========================================one super and two subclass===========================

// --super class
// var Mobile = function () {}
//-- Prototype method
// Mobile.prototype.getModel = function () {
//   return this.model
// }

// --sub-class 1[here we are not using call bcoz Mobile doesnot have any property of its own]
// var Samsung = function (model, price) {
//   this.model = model
//   this.price = price
// }
//--sub-class 2
// var Lenovo = function (model) {
//   this.model = model
// }

// --inheretance(making link between boths prototype object)
// Samsung.prototype = Object.create(Mobile.prototype)
// Lenovo.prototype = Object.create(Mobile.prototype)

//-- resetting the constructor of samsung & Lenevo
// Samsung.prototype.constructor = Samsung
// Lenovo.prototype.constructor = Lenovo

//-- since price is only in samsung
// Samsung.prototype.getPrice = function () {
//   return this.price
// }

//-- creating obj
// var galaxy = new Samsung('Galaxy', 3000)
// var phn2 = new Lenovo('phn 2')

// console.log(galaxy.getModel())
// console.log(galaxy.getPrice())
// console.log(phn2.getModel())

// --what if we have many -many subclass like this. to decrese repitation we will create function
//-- function for inheritance
// function extend(child, parent) {
//     child.prototype = Object.create(parent.prototype);
//     child.prototype.constructor = child;
// }

// --using function to make subclass
// extend(Samsung, Mobile)
// extend(Lenovo, Mobile)

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

// --function to easily create subclass with inhertence
// function extend(child, parent) {
//   child.prototype = Object.create(parent.prototype)
//   child.prototype.constructor = child
// }
//--super class
// var Mobile = function() {

// }
// Mobile.prototype.show = function() {
//     return 'Super class Method'
// }

// sub class
// var Samsung = function() {
// }

//--sub class samsung extending super class mobile
// extend(Samsung, Mobile);

//-- overriding method using same name[must be written after extend]
// Samsung.prototype.show = function () {
//   return 'sub class method'
// }

// var sam = new Samsung()
// console.log(sam.show()) //Sub class method

// ======================================MULTILEVEL INHERITENCE========================================================
// --super class
var Mobile = function () {
  this.a = 10
}

// -- z is the property stored in Mobile's prototype object
Mobile.prototype.z = 30

// --sub class
var Samsung = function () {
  Mobile.call(this) //with this we can access property "a"
  this.b = 20
}

var Galaxy = function () {
  Samsung.call(this)
  this.c = 100
}

// --Prototype inheritense (Samsung inherit Mobile)
Samsung.prototype = Object.create(Mobile.prototype)
Samsung.prototype.constructor = Samsung

// --Galaxy inherit samsung
Galaxy.prototype = Object.create(Samsung.prototype)
Galaxy.prototype.constructor = Galaxy

var m = new Mobile()
var s = new Samsung()
var g = new Galaxy()

console.log(g.a) //galaxy can use property of Mobile object
console.log(g.z) //galaxy can use mobile's prototype property(bcoz of linking)
console.log(g.c) // apna property
console.log(s.a)
console.log(s.z)
