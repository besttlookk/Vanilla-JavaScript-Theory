// async-await

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



 function createPost(post,callback) {
     return new Promise((resolve,reject)=> {

         setTimeout(() => {
              posts.push(post);

              const error = false ;
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

async function init() {
    await createPost({ title: 'Post three', body: 'This is post three'})
    getPosts();
}

init();

// async- await with fetch
//  async function fetchUsers(){
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
     
//     const data = await res.json();
//     console.log(data);
//  }

//  fetchUsers();


// ========================================harry============================

// async function harry() {
//     console.log('inside function');
//     const responce = await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log('before response');
//     const users = await response.json();
//     console.log('users resolved');

//     return users;
// }

// console.log("before calling harry");
// let a = harry();
// console.log("after calling harry");
// console.log(a);
// a.then(data => console.log(data))
// console.log("last  line");
 