// --------------------------------------------------
//         SORTING an array = sort()
// The sort() method sorts an array alphabetically: IT CHANGES THE ORIGINAL ARRAY

// console.log(arr2.sort(),arr2);
// console.log(arr2.sort()[0]);
// console.log(arr2.sort()[1]);
// console.log(arr2.sort()[3]);
// console.log(arr2.sort()[4]);

// console.log(arr1.sort(),arr1);// no use but we can fix by THE COMPARE FUNCTION
// he purpose of the compare function is to define an alternative sort order.

// let points = [40, 100, 1, 5, 25, 10];
// console.log(points.sort())
// to sort in DESCENDING ORDER
// console.log(points.sort(function(a, b){return b - a}))
// //to sort in ASCENDING ORDER
// console.log(points.sort(function(a, b){return a - b}))

// Sorting an Array in Random Order
// Example

// console.log(points.sort(function(a, b){return 0.5 - Math.random()}));

//-------------------------------------
//  REVERSING AN Array= reverse()
// changes original array
//  console.log(arr2.reverse(),arr2)

//---------------------------------------
/*

// finding max and min values in a array

//  [There are no built-in functions for finding the highest or lowest value in a JavaScript array. ]

// sorting method can be used to find min and max value but it is inefficient if we only wish to find max and min vale. 

//  USING MATHS.max.apply()
let points = [40, 100, 1, 5, 25, 10];

function myArrayMax(arr) {
    return Math.max.apply(null, arr);
  }

console.log(myArrayMax(points));

function myArrayMin(arr) {
    return Math.min.apply(null, arr);
  }

  console.log(myArrayMin(points));


//   HOME MADE SOLUTION

function myArrayMax(arr) {
    var len = arr.length;
    var max = -Infinity;
    while (len--) {
      if (arr[len] > max) {
        max = arr[len];
      }
    }
    return max;
  }


  function myArrayMin(arr) {
    var len = arr.length;
    var min = Infinity;
    while (len--) {
      if (arr[len] < min) {
        min = arr[len];
      }
    }
    return min;
  }
  */
//  -------------------------------------------

// Sorting Object Arrays
// JavaScript arrays often contain objects:
var cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];

//   Even if objects have properties of different data types, the sort() method can be used to sort the array.

// The solution is to write a compare function to compare the property values:
// cars.sort(function(a, b){return a.year - b.year});

// Comparing string properties is a little more complex

// cars.sort(function(a, b){
//     var x = a.type.toLowerCase();
//     var y = b.type.toLowerCase();
//     if (x < y) {return -1;}
//     if (x > y) {return 1;}
//     return 0;
//   });
