// In set there is no index
// It store unique values
// actual use of sets is to remove dublicate value from the sets

const numberSet = new Set([2, 3, 4, 5]);
console.log(numberSet); // Set { 2, 3, 4, 5 }
console.log(numberSet.size); //4
console.log(numberSet.has(2)); // true
console.log(numberSet.has(10)); // false
console.log(numberSet.add("new")); //Set { 2, 3, 4, 5, 'new' }
console.log(numberSet.delete(2)); //true
console.log(numberSet); // Set { 3, 4, 5, 'new' }

for (const item of numberSet) console.log(item);

console.log(numberSet.clear());
console.log(numberSet); // Set {}

console.log(new Set("Prabhash")); // Set { 'P', 'r', 'a', 'b', 'h', 's' }

// ---creating unique array
const staff = ["waiter", "chef", "waiter", "gate keeper", "chef"];

const postSet = new Set(staff);
console.log(postSet); // Set { 'waiter', 'chef', 'gate keeper' }

const postArray = [...postSet];
console.log(postArray); // [ 'waiter', 'chef', 'gate keeper' ]

// --to find number of unique aphabate in the string
console.log(new Set("Prabhash").size); // 6
