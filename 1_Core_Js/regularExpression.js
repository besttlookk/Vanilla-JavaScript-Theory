console.log("console is working fine");

let str1 = "today is 7th may and i am studying javascript . i have to make website asap."

// let str2 = "4358751230"

// let n1 = str1.search(/i/g);
// console.log(n1);
// console.log(str1[n1]);
// let n2 = str1.match(/i/g);
// console.log(n2);
// // console.log(str1[n2]);
// let n3 = str1.match(/i/m);
// console.log(n3);
// console.log(str1[n3]);

// multiple charcter search
// let n3 = str1.match(/[a,k,p]/g); // for range of characters.
// console.log(n3);
// console.log(str1[n3]);

// let n3 = str2.match(/3/g);
// let n3 = str2.match(/[1-6]/g);  for range of digits
// console.log(n3);
// console.log(str1[n3]);
//--------------------------------------------
// Metacharacters are characters with a special meaning:

//  to search a digit in the string

// str4 = " jhgfun5775vnj";
// let n3 = str4.match(/\d/g);
// console.log(n3);

// let n3 = str1.match(/am/g);
// console.log(n3);

// let n3 = str1.match(/am\b/g);
// console.log(n3);


//----------------------------------------
//         test() & exec()

let pattern = /a/;
let result = pattern.test(str1);
console.log(result) // true



