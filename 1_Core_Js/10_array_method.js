let arr1 = [3, 4, 1, 90, 45, 123];
let arr2 = ["ram", "amit", "rohan", 89, "-10"];

//length property
console.log(arr1.length);

/*
--------array iteration
for(i=0;i<arr1.length;i++)
{
console.log(arr1[i]);
}
*/

/*
-----------------  Merging (Concatenating) Arrays---------------
The concat() method creates a "new" array by merging (concatenating) existing arrays:

    console.log(arr2.concat(arr1))  //[ 'ram', 'amit', 'rohan', 89, '-10', 3, 4, 1, 90, 45, 123 ] 
    console.log(arr1)               // [ 3, 4, 1, 90, 45, 123 ] 

    console.log(arr2 + arr1)        // ram,amit,rohan,89,-103,4,1,90,45,123
    console.log(typeof (arr2 + arr1))  //string

The concat() method can take any number of array arguments:

    const arr1 = ["Cecilie", "Lone"];
    const arr2 = ["Emil", "Tobias", "Linus"];
    const arr3 = ["Robin", "Morgan"];
    const myChildren = arr1.concat(arr2, arr3); //[ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus', 'Robin', 'Morgan' ] 

The concat() method can also take strings as arguments:

    const arr1 = ["Emil", "Tobias", "Linus"];
    const myChildren = arr1.concat("Peter");  //[ 'Emil', 'Tobias', 'Linus', 'Peter' ] s
*/

/*
//------------------------JOIN()--------
  --toString() vs Join
  The JavaScript method toString() converts an array to a string of (comma separated) array values.
  The join() method also joins all array elements into a string.

  It behaves just like toString(), but in addition you can specify the separator:


      console.log(arr1.toString(), typeof arr1.toString())  //3,4,1,90,45,123  string
      console.log(arr1.toString()[0]); // 3
      console.log(arr1.toString()[1]); // ,
      console.log(arr1.toString()[2]); // 4
      console.log(arr1.toString()[3]); // ,
      console.log(arr1.toString()[4]); // 1
      console.log(arr1.toString()[5]); // ,
      console.log(arr1.toString()[6]); // 9
      console.log(arr1.toString()[7]); // 0
      console.log(arr1.toString()[8]); //  ,
      console.log(arr1.toString().length); // 15

// if we want anything  other than (;) we use join()
          console.log(arr1.join("+"));    // 3+4+1+90+45+123
          console.log(arr1.join("*"));    // 3*4*1*90*45*123
*/

/*
//-----------------------PUSH & POP()----------

The push() method adds a new element to an array (at the end)
The push() method returns the new array length:

    let arrPushLength =arr1.push(15,17)
    console.log(typeof arrPushLength)  // 8 (new length)
    console.log(arr1)  // ORIGINAL ARRAY GET AFFECTED  [ 3, 4, 1, 90, 45, 123, 15, 17 ] 

The pop() method removes the last element from an array
The pop() method returns the value that was "popped out".

console.log(arr1.pop());    //123(returns pop out number)
console.log(arr1)          // [ 3, 4, 1, 90, 45 ](ORIGINAL ARRAY GETS AFFECTED)
*/

/*
//-------------------------SHIFT & UNSHIFT()----------
Shifting is equivalent to popping, working on the first element instead of the last.

The shift() method removes the first array element and "shifts" all other elements to a lower index.

The shift() method returns the value that was "shifted out"

      console.log(arr1.shift())  // 3
      console.log(arr1)    // [ 4, 1, 90, 45, 123 ](afect array)

The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
The unshift() method returns the new array length.

      console.log(arr1.unshift(40,69))  //  8(length )
      console.log(arr1)             // [ 40, 69, 3, 4, 1, 90, 45, 123 ]

they return new array. so it is better to use
they also affect array


*/

/*
// =============Delete
Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator delete

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    delete fruits[0];           // Changes the first element in fruits to undefined

Using delete may leave undefined holes in the array. Use pop() or shift() instead.
*/

/*
//-------------------------SPLICE()------------

normally we use splice to add items at the desired place but it can also be used to remove items.
change original array

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(2, 0, "Lemon", "Kiwi");  // [] (nothing is removed)
    console.log(fruits)   // [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ] 

The first parameter (2) defines the position where new elements should be added (spliced in).
The second parameter (0) defines how many elements should be removed.
The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
he splice() method returns an array with the deleted items:

    console.log(arr1.splice(2,2,"apple","banana"))    // [ 1, 90 ](removed item)
    console.log(arr1)  //  [ 3, 4, 'apple', 'banana', 45, 123 ]

----Using splice() to Remove Elements
With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(0, 1);   // Removes the first element



*/

/* 
//-------------------SLICE():-------------------------
The slice() method slices out a piece of an array into a new array.leave the previous array as it is

it can take 2 argument
  console.log(arr1.slice(4));  // [ 45, 123 ]
  console.log(arr1.slice(2,4));  //[ 1, 90 ]
  console.log(arr1)  // [ 3, 4, 1, 90, 45, 123 ] (original array as it is)

*/
