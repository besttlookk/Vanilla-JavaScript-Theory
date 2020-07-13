console.log("console is working fine");

// let person = {
//     name: "Rahul",
//     age: 30,
//     city: "Hajipur",
//     fun: function() { return 30;}
// };
// console.log(person.length);
//----------------------------------------
//        DISPLAING OBJECT


// console.log(person.name);
// console.log(person.age);
// console.log(person.city);
// console.log(person.fun);
// console.log(person.fun());


// console.log(person[0]);



//  using for/in loop
// let x, txt = "";

// for (x in person) {
//     console.log(txt += person[x] +  " ");
// }

//-----------------------------------------

//    using Object.values

// let myArr = Object.values(person);
// console.log(myArr);  // as an array

//-------------------------------------------

//  using JSON.stringify()

// let myString = JSON.stringify(person);
// console.log(myString);  // JSON format

// but this will not stringigy function. so we first convert the function() into string

// person.fun =person.fun.toString();
// let myString = JSON.stringify(person);
// console.log(myString);  // JSON format

//---------------------------------------

// let person = {
//     name: "Rahul",
//     age: 30,
//     city: "Hajipur",
//     get lang() {
//         return this.language;
//     }
// };
// console.log(person);
// console.log(person.lang);

//--------------    CONTRUCTOR  ------------------------

// function Detail(fname,lname,age,sex) {
//    this.fname = fname;
//    this.lname = lname;
//    this.age = age;
//    this.sex = sex

// }
// // can make as many object through construtor
// let detail1 = new Detail("Prabhash","Ranjan",30,"Male");
// let detail2 = new Detail("Raushan","Jaiswal",29,"Male");

// Detail.natinality = nation;

// -------- PROTOTYPE-------
// Detail.prototype.nationality = "English";// adding into prototype
// detail1.nationality = "Indian";
// console.log(detail1);

// --------INHERITE----------

//suppose we need to create new constrctor but some inputs are taken from already created constructor
// function Employe(fname,lname,age,sex,experience) {
//    Detail.call(this,fname,lname,age,sex);
//    this.experience = experience;
// }
//  let emp1 = new Employe("Rishi","Verma","30","male","2 years");
//  console.log(emp1);

// const proto = {
//    slogan = function() {
//       return "This company is the best";
//    },
//    changeName : function(newName) {
// //       this.name = newName;
//    }

// }

// let harry = Object.create(proto);
// harry.name = "Harry";
// harry.role = " Programmer";
// harry.changeName("Harry2")
// console.log(harry)



// -------------------CONSTRUCTOR FUNCTION------------

// function Person(firstName,lastName,dob) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.dob = dob ;
//       this.getBirthYear = function() {
//          return this.dob.getFullYear();
//       }
//       this.getFullName = function() {
//           return `${this.firstName} ${this.lastName}`;
//     }
// }

// // Instantiate object

// const person1 = new Person('Prabhash','Ranjan',4-3-1980);
// const person2 = new Person('Raushan','Jaiswal',3-6-1970);

// console.log(person1);
// console.log(person2);
// console.log(person1.getBirthYear());
// console.log(person1.getFullName());

//----------important note--------------

// but this is not the best way to do it bcoz when we print any new object it aslo print the function which we mind need while making new object . so we will use "prototype". by this we can attact the methods and properties inside prorototype


// function Person(firstName, lastName, dob) {
//    this.firstName = firstName;
//    this.lastName = lastName;
//    this.dob = dob;
// }

// Person.prototype.getBirthYear = function () {
//    return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function () {
//    return `${this.firstName} ${this.lastName}`;
// }

// const person1 = new Person('Prabhash', 'Ranjan', 4 - 3 - 1980);
// const person2 = new Person('Raushan', 'Jaiswal', 3 - 6 - 1970);

// console.log(person1);
// console.log(person2);
// console.log(person1.getBirthYear());
// console.log(person1.getFullName());

// --------------------class----------------
class Person {
   constructor(firstName, lastName, dob) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.dob = dob;
   }
   getBirthYear() {
      return this.dob.getFullYear();
   }
   getFullName() {
      return `${this.firstName} ${this.lastName}`;
   }
}

// ----Instantiate object

const person1 = new Person('Prabhash','Ranjan',4-3-1980);
const person2 = new Person('Raushan','Jaiswal',3-6-1970);

console.log(person1);
console.log(person2);
console.log(person1.getBirthYear());
console.log(person1.getFullName());
