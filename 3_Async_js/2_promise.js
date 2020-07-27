const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post two', body: 'This is post two' }

];


function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}



// here instead of calling ..it return promise
 function createPost(post,callback) {
     return new Promise((resolve,reject)=> {

         setTimeout(() => {
              posts.push(post);

              const error = true ;
            //   const error = true ;
             if(!error) {
                 resolve();
             }
             else {
                 reject('Error: something went wrong')
             }


          }, 2000);

     });
}

createPost({ title: 'Post three', body: 'This is post three'})
  .then(getPosts)    // resolve()
  .catch((err) => console.log(err))   // reject()



  //-------------when you have lots of promise(promise.all)--------

  // const promise1 = Promise.resolve('Hello World');
  // const promise2 = 10;
  // const promise3 = new Promise((resolve,reject)=>
  //    setTimeout(resolve,2000,'Goodbye')
  // );

  // const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());

  // Promise.all([promise1,promise2,promise3,promise4]).then(values=>console.log(values))


// =========================HARRY
// Promise: Best video on promises
// -resolve
// -reject
// -pending

// function func1() {
//     return new Promise(function (resolve, reject) {   // promise is a predefine constructor
//         setTimeout(() => {
//             const error = true;
//             if (!error) {
//                 console.log('Function: Your promise has been resolved')// just to check
//                 resolve();
//             }
//             else {
//                 console.log('Function: Your promise has not been resolved')
//                 reject('Sorry not fulfilled');   // reject ke ander "error" messgae hai
//             }
//         }, 2000);
//     })
// }

// func1().then(function(){
//     console.log("Harry: Thanks for resolving")
// }).catch(function(error){
//     console.log("Harry: Very bad bro. Reason: " + error)
// })

// function inside 'then' is ran as - resolve()
// function inside 'catch' is ran as - reject()

// this is the substitute for call back function


// ---------------

// Pretend that this response is coming from the server
// const students = [
//     { name: "harry", subject: "JavaScript" },
//     { name: "Rohan", subject: "Machine Learning" }
// ]


// function enrollStudent(student) {   // taking student name as an argument
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             students.push(student);
//             console.log("Student has been enrolled");
//             const error = false;
//             if (!error) {
//                 resolve();
//             }
//             else {
//                 reject();
//             }
//         }, 5000);
//     })
// }

// function getStudents() {
//     setTimeout(function () {
//         let str = "";
//         students.forEach(function (student) {
//             str += `<li> ${student.name}</li>`
//         });
//         document.getElementById('students').innerHTML = str;
//         console.log("Students have been fetched");
//     }, 1000);
// }

// let newStudent = { name: "Sunny", subject: "Python" }
// enrollStudent(newStudent).then(getStudents).catch(function () {
//     console.log("Some error occured");
// });

// function inside then is ran as - resolve()
// function inside catch is ran as - reject()