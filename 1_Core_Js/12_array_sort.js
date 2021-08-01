/*
The sort() method sorts an array alphabetically(It change the original array)
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.sort();      //[ 'Apple', 'Banana', 'Mango', 'Orange' ] 

The reverse() method reverses the elements in an array.(It changes the array too)
You can use it to sort an array in descending order:
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.sort();        // First sort the elements of fruits  [ 'Apple', 'Banana', 'Mango', 'Orange' ] 
    fruits.reverse();     // Then reverse the order of the elements [ 'Orange', 'Mango', 'Banana', 'Apple' ] 
    concole.log(fruits)  // [ 'Orange', 'Mango', 'Banana', 'Apple' ] 

*/

/*
---------------------------Sorting Number-----------------------

he purpose of the compare function is to define an alternative sort order.

    let points = [40, 100, 1, 5, 25, 10];
    console.log(points.sort())   // [ 1, 10, 100, 25, 40, 5 ] 
    console.log(points.sort(function(a, b){return b - a}))
    //to sort in ASCENDING ORDER
    console.log(points.sort(function(a, b){return a - b}))


    function(a, b){return a - b}
When the sort() function compares two values, 
it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

If the result is negative a is sorted before b.
If the result is positive b is sorted before a.
If the result is 0 no changes are done with the sort order of the two values.



------------------------Sorting an Array in Random Order
Example

console.log(points.sort(function(a, b){return 0.5 - Math.random()}));

--------------finding max and min values in a array

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
  
//  -------------------------------------------

// Sorting Object Arrays
// JavaScript arrays often contain objects:
var cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];

  Even if objects have properties of different data types, the sort() method can be used to sort the array.

The solution is to write a compare function to compare the property values:
cars.sort(function(a, b){return a.year - b.year});

Comparing string properties is a little more complex

cars.sort(function(a, b){
    var x = a.type.toLowerCase();
    var y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });


*/

/*
// -------------easy way to find max min value of array

const filterArray = [ 3, -2, -6, -1, 9, 13, 17, 15, 14, 9, 5 ] 
let maxValue = filterArray[0]
let minValue = filterArray[0]

filterArray.forEach(item => {
    item > maxValue ? maxValue = item : item < minValue ? minValue = item : null
})

console.log(maxValue) // 17
console.log(minValue) // -6


*/
