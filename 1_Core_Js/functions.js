// console.log('this is functions tuitorial')

let name = " prabhash";
let name1 = " prabhash1";
let name2 = " prabhash2";
let name3 = " prabhash3";

// console.log('prabhash is a good boy');
// console.log(name + ' is a good boy');
// console.log(name1 + ' is a good boy');
// console.log(name2 + ' is a good boy');
// console.log(name3 + ' is a good boy');
// in all the previous examples " is a good boy is repeating"

// function greet(name){ 
//     //lets create local variable
//     let name1= "Name1"
//     console.log(name + " is a good boy");
// }

// greet(name1);
// greet(name2);
// greet(name3);


//until value is passed for greetText.that value will be printed.if not "default argument" will be priented
// function greet(name, greetText ="greetings grom javascript"){
//     console.log(name + " is a good boy. he said " + greetText  );
// }

// let greetText = "good morning";
//  let greetText2 ="bye";

// greet(name2 , greetText2);
// greet(name3)

// // there is no return value .so error will come
// let returnval= greet(name2);
// console.log(returnval);



function sum(a,b,c){
    d = a  + b + c;
    return d;

    // following line will never get exected'
    console.log(name + " is a good boy. he said " + greetText);
}

let x = 10;
let y = 20;
let z = 30;
let returnval = sum(x,y,z)
console.log(returnval);