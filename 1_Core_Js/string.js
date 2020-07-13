console.log("Console is working");

let str1 = "this is my intro";
let str2 = "  this   is   my   intro   ";
let str3 = "THIS IS MY INTRO"
let str4 = "I am styding Javascript"
let str5 = "i have to become full to stack developer"
console.log(str1)
console.log(str2)
console.log(str3)
console.log(str1.length);

//               JAVASCRIPT METHODS 
//-----------------------------------------------

// console.log(str1.toUpperCase());   /* it will not change original string */
     
//------------------------------------------------
//    finding position of string inside a string
/*
console.log(str1.indexOf("is"));
console.log(str1.indexOf("is",5 ));  //both take second parameter as starting POSITION
console.log(str1.lastIndexOf("is"));
console.log(str2.lastIndexOf(""));
console.log(str2.indexOf(""));
console.log(str2.lastIndexOf("z")); // returnes (-1) when not found
console.log(str2.indexOf("z"));
console.log(str1.search('is'));
console.log(str1.search('z'));
// tho similar to indexof method but this does not take second parameter on the  other hand "indexof" does not take POWERFUL search value

*/

//-----------------------------------------


        //  EXTRACTING STRING PARTS
/*
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

//---------------------------------------

 //    REPLACING STRING CONTENT
 /*
 console.log(str1.replace("my","your"));
 console.log(str1);
  // doesnot change original string.it returns new string. 
  console.log(str2.replace("is","am")); 
  //REPLACE FIRST match only order IS important.

  // for all use /g (global flag)
  console.log(str2.replace(/is/g,"am"))
  // it is CASE SENSITIVE.
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

//----------------------------------
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