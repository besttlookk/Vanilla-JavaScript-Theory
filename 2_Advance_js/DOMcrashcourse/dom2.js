//--------------------------------- TRAVERSING THE DOM-------------------- //
// var itemList = document.querySelector('#items');
//-------parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

//------- parentElement=parentNode
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// -------childNodes(DO NOT USE IT)----
// console.log(itemList.childNodes);

// -----CHILDREN(use this instead of childNodes but it gives HTML collection and not nodelist)
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';
//==========================================
// //------ FirstChild(DO NOT USE)
// console.log(itemList.firstChild);


//------ firstElementChild(USE IT)
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';
//=====================================

//------ lastChild(DO NOT USE)
// console.log(itemList.lastChild);


//------ lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';
//================================
// nextSibling(DO NOT USE)
// console.log(itemList.nextSibling);

// // -----nextElementSibling(USE IT)
// console.log(itemList.nextElementSibling);

//========================================

// previousSibling
// console.log(itemList.previousSibling);
// previousElementSibling
// console.log(itemList.previousElementSibling);itemList.previousElementSibling.style.color = 'green';
//========================================
//---------------------- createElement----------

// Create a div
// var newDiv =  document.createElement('div');
// console.log(newDiv);

// // Add class
// newDiv.className= 'hello';

// // Add id
// newDiv.id = 'hello1';

// // Add attr
// newDiv.setAttribute('title', 'Hello Div');

// // Create text node
// var newDivText = document.createTextNode('Hello World');

// // Add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1);