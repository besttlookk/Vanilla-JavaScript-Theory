// Data transformation: Map, reduce, filter

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  {
    name: "Company Five",
    category: "Technology",
    start: 2009,
    end: 2014,
  },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  {
    name: "Company Eight",
    category: "Technology",
    start: 2011,
    end: 2016,
  },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//   ====================Topic To Cover====================================
//   array.forEach()
//   array.filter()
//    array.map()
//    array.sort()
//    array.reduce()
//    array.reduceRight()
//    array.some()
//    array.every()
//    array.indexOf()
//    array.lastIndexOf()
//    array.find()
//    array.findIndex()

// ------------- normal "for" loop

// for(let i = 0 ; i < companies.length; i++) {
//     console.log(companies[i]);

// }

// ---------------forEach()-------------------------
// we cant not use "break/continue" inside forEach/..
// it takes a synchronous function. it can pass 3 parameters
//  companies.forEach((company,index,comapanies)=>)
//  companies.forEach((value,index,array)=>)
// console.log(companies[i]);  this is wrong bcoz it itself taking one value at a time. this looks nicer than "for" loop bcoz we dont have to initialize "i" and put condition.
// console.log(company);

// --just iterating array
// companies.forEach((company)=> {
//     console.log(company.name);
// })

// filtering using if condition
// companies.forEach((company )=> {
//   if(company.start > 1982) {
//     console.log(company)
//   }
// })

//  -------------------------------filter-----------------------------

//it forms an array which follow the given condition
// we will first try for loop

//-----my way for loop------
// let canDrink = [];
//  let j = 0;
// for (let i = 0; i<ages.length; i++) {
//     if (ages[i] >= 21) {
//          canDrink[j] = ages[i]
//         j++
//     }
// }
//  console.log(canDrink);

//.....---.better way for loop.....
// let canDrink = [];
// for (let i = 0; i<ages.length; i++) {
//      if (ages[i] >= 21) {
//            canDrink.push(ages[i])
//      }
//  }
//  console.log(canDrink);

//------------ with filter(better way)"
// it also takes syncronous funtion like forEach()
//  let canDrink = [];
//  canDrink = ages.filter((age) => {
//     return age >= 21 })
//  console.log(canDrink);

//    ------BEST WAY-----
//   let canDrink = [];
//   canDrink = ages.map(age => age>=21)
//   console.log(canDrink);

// filter comapany with retail

// const retailer = companies.filter(company=> company.category ==="Retail");
// console.log (retailer);

// -----------------------------MAP--------------------------------------------------------------------------

// create array of company name.
// const map = companies.map(company => {return company.name});
// console.log(map)

// const map = companies.map(company => {
//     // return `${company.name} [${company.start} - ${company.end}]`});
// console.log(map)

// --------------------------------------------SORT()---------------------------------------------------------

// ----------Numeric Sort
// By default, the sort() function sorts values as strings.

// This works well for strings ("Apple" comes before "Banana").

// However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

// Because of this, the sort() method will produce incorrect result when sorting numbers.

// You can fix this by providing a "compare function":

// ---------The Compare Function
// The purpose of the compare function is to define an alternative sort order.

// The compare function should return a negative, zero, or positive value, depending on the arguments:

// When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

// If the result is negative a is sorted before b.

// If the result is positive b is sorted before a.

// If the result is 0 no changes are done with the sort order of the two values.

//------ Sort companies by start year(conditional sorting)[USE TERNARY OPERATOR]

// const sortedCompanies  = companies.sort(function(c1, c2) {
//   if(c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

//          ---------better---
// const sortedCompanies  = companies.sort((a,b)=> {a.start > b.start ? 1 : -1

//   });

// console.log(sortedCompanies)

//  ----------sort ages(SORT Alphabatically)

// this will sort according to the first digit of the number...WRONG
// const sortAges = ages.sort();
// console.log(sortAges);
//  ---correct

// for asending order
// const sortAges = ages.sort((a,b)=> a - b);
// console.log(sortAges);

// decending order

// const sortAges = ages.sort((a,b)=> b-a);
// console.log(sortAges);

// ---------------------------------------Reduce()--------------------------------------------------------

// The reduce() method runs a function on each array element to produce (reduce it to) a single value.

// The reduce() method works from left-to-right in the array. See also reduceRight().

// The reduce() method does not reduce the original array.

// Note that the function takes 4 arguments:

// The total (the initial value / previously returned value)
// The item value
// The item index
// The array itself

// add the ages together
//  first with the for loop.

// let  sum = 0;
// for (let i = 0 ; i < ages.length; i++) {

//     sum += ages[i];
// }

// console.log(sum);

// with reduce

// let sum = ages.reduce((total,age) => total + age, 0);

// console.log(sum)

// -------------------------Array.every()-----------------------------------
// The every() method check if all array values pass a test.
// Note that the function takes 3 arguments:

// The item value
// The item index
// The array itself

// const check = ages.every(age => age < 90)
// console.log(check)

//      RETURNS TRUE OR FALSE

// // --------------------------Array.some()-------------------------------------------------
// The some() method check if some array values pass a test.

// This example check if some array values are larger than 18:

// --------------------------Array.indexOf()------------------------------------------------------------
// The indexOf() method searches an array for an element value and returns its position.

// const index = ages.indexOf(20)
// console.log(index)

// --------------------------Array.find()---------------------------------------------------------------
// The find() method returns the value of the first array element that passes a test function.

// This example finds (returns the value of) the first element that is larger than 18:
// IN A WAY SIMILAR TO "filter()" but good thing is it stops finding when it get the desired result

// const age50 = ages.find(age => age > 50)
// console.log(age50) // 54

// ----------------------------Array.find()-----------------------------------------------------------
// The find() method returns the value of the 'first' array element that passes a test function.

// This example finds (returns the value of) the first element that is larger than 18:
