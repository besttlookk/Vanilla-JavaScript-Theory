
const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post two', body: 'This is post two' }

];

// // we memiking how is it to fetch from the sever..it may takes some time....thats why we are using "setTimeout" here

// ===============================Synchronous function[normal approch]============================
// //create function

// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) => {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// // create another function
//  function createPost(post) {
//    setTimeout(() => {
//         posts.push(post);
//     }, 2000);
// }
// // //call above function

// createPost({ title: 'Post three', body: 'This is post three' });
// getPosts();

// we wanted to have create post first but due to delay..getpost request happened first..
//.this kind of sitution can happen in real world..this is where asych programming comes in like 'CALLBACK ' funtion to handle it..it will hold 
// "getPosts" request till it created the post 


// ====================callback[Async}-------------------


// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) => {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }


// create another function
//  function createPost(post,callback) {
//    setTimeout(() => {
//         posts.push(post);
//         callback();  // bcoz we wanna call just after we creatd the post // push hone ke baad call ker do
//     }, 2000);
// }

//this is the way of doing it
// createPost({ title: 'Post three', body: 'This is post three' } ,getPosts);


// ==========================================HARRY=================================================
// Pretend that this response is coming from the server
// const students = [
//     {name: "harry", subject: "JavaScript"},
//     {name: "Rohan", subject: "Machine Learning"}
// ]


// function enrollStudent(student, callback) // ye "getstudent" fuction ko pkr ker rakhega..background me chalne nahi dega
// {
//     setTimeout(function() {    // setTimeOut will handle things in backgroud after
//         students.push(student);
//         console.log("Student has been enrolled");
//         callback();
//     }, 8000);
// }

// // to fetch student list  // i want to run this fuction after "enrollStudent" funcion. even thou this function takes less time to complete...it will wait for the callback to execute itself. 
// function getStudents(){
//     setTimeout(function() {
//         let str = "";
//         students.forEach(function(student){
//             str += `<li> ${student.name}</li>`
//         });
//         document.body.innerHTML = str;
//         console.log("Students have been fetched");
//     }, 1000);
// }

// let newStudent = {name:"Sunny", subject:"Python"}
// enrollStudent(newStudent, getStudents);

