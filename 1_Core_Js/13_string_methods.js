/*
String Methods and Properties

Primitive values, like "John Doe", cannot have properties or methods (because they are not objects).

But with JavaScript, methods and properties are also available to primitive values, 
because JavaScript treats primitive values as objects when executing methods and properties.

*/

let str1 = "this is my intro";
let str2 = "  this   is   my   intro   ";
let str3 = "THIS IS MY INTRO";
let str4 = "I am styding Javascript";
let str5 = "i have to become full to stack developer";
// length property
console.log(str1.length);

//============================JAVASCRIPT METHODS=====================
/*
----------------toUpperCase()
console.log(str1.toUpperCase());  
console.log(str1.toLowerCase());  


*/

/*
//------------- --------string Search-----------------------------------

JavaScript methods for searching strings:

                String.indexOf()
                String.lastindexOf()
                String.search()
                String.match()   //   string.match(regexp)
                String.startsWith()  //string.startsWith(searchvalue, start) // true/false //case sensitive
                String.endsWith()   //string.endswith(searchvalue, length)  // true/ false
                String.includes()  // string.includes(searchvalue, start)   // true/ false

-----String.indexOf() & String.lastIndexOf
The "indexOf()" method returns the index of (the position of) the first occurrence of a specified text in a string:
The "lastIndexOf()" method returns the index of the last occurrence of a specified text in a string:
Both indexOf(), and lastIndexOf() return -1 if the text is not found.
Both methods accept a second parameter as the starting position for the search.
The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.

console.log(str1.indexOf("is"));
console.log(str1.indexOf("is",5 ));  //both take second parameter as starting POSITION

console.log(str1.lastIndexOf("is"));
console.log(str2.lastIndexOf("z")); // returnes (-1) when not found

/--------------String.search()

console.log(str1.search('is')); // 2
console.log(str1.search('z'));  // -1
this is similar to indexof method but this does not take second parameter on the  other hand "indexof" does not take POWERFUL search value(regular expressions)


/-------------String.match()
The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.

let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/g)    // Returns an array [ain,ain,ain]

*/

//---------------------------EXTRACTING STRING PARTS-------------------------------
/*

There are 3 methods for extracting a part of a string:

                slice(start, end)
                substring(start, end)(end not included).
                substr(start, length)

        If a parameter is negative, the position is counted from the end of the string.

        substring() is similar to slice().
        The difference is that substring() cannot accept negative indexes.
        
        substr() is similar to slice().
        The difference is that the second parameter specifies the length of the extracted part.


console.log(str1.slice(1,3))
console.log(str1.slice(-2,-1))
console.log(str1.slice(-1))
 //(start,end)- END NOT INCLUDED 


console.log(str1.substring(1,3));  
console.log(str1.substring(-2,-1));  
console.log(str1.substring(-1));  
//  (start,end)END NOT INCLUDED  . It is similar to slice() difference is it doesnot take negavive index


console.log(str1.substr(1,6));
console.log(str1.substr(-2,1));
// (Start,length)

*/

//---------------------------------- REPLACING STRING CONTENT-------------------------
/*
The replace() method replaces a specified value with another value in a string:
        console.log(str1.replace("my","your"));  // this is your intro
        console.log(str1);  // this is my intro // doesnot change original string.it returns new string. 

        console.log(str2.replace("is","am")); //REPLACE FIRST match only order IS important.
  
        // for all use /g (global flag)
        console.log(str2.replace(/is/g,"am"))

        //  for case INSESITIVE use /i(insensitive flag)
        console.log(str1.replace(/MY/i , "your"));
*/

//-----------------------------------------------

/*    extracting string character

console.log(str1.charAt(0));  
console.log(str1[0]);  
console.log(str1.charCodeAt(0));

// NEGATIVE numbers are NOT allowed
console.log(str1.charAt(-2));  
console.log(str1[-2]);  
console.log(str1.charCodeAt(-2));

*/

//---------------------------------------------
//               concat()
/*
console.log(str1.concat(" " ,str4));
console.log(str1);
// doesnot change original string
console.log(str1 + " " + str4);
// can take as many argument as we want.
console.log(str1 + ' '+str4 + " " + str5 );

*/

//-----------------------Trim()-----------
//          trim()
// console.log(str2.trim());

//-------------------------------------------

//   converting STRING to ARRAY

// console.log(Array(str1));
// console.log(Array(str1).length);
// it take as 1 component.so  we have to SPLIT method converting into array.

// console.log(str1.split(" "));
// console.log(str1.split(" ").length);
// console.log(str1.split(" ")[0]);
// console.log(str1.split(" ")[1]);
// console.log(str1.split(" ")[2]);
// console.log(str1.split(" ")[3]);

// -------------------------------------------------------------------------

//       search()....
// console.log(str5.search(/to/i));
// console.log(str5[str5.search(/to/i)]);
console.log(str5.search(/to/g));
console.log(str5[str5.search(/to/g)]);

// ---------------------padStart and padEnd -------------------------------
const str = "Rahul";
console.log(str.padStart(15, "+")); // ++++++++++Rahul
console.log(str.padEnd(15, "+")); // Rahul++++++++++

// ----------------------repeat
const str = "Rahul ";
console.log(str.repeat(2)); //Rahul Rahul
