const rest = new Map();
console.log(rest); //Map {  }
rest.set("name", "Restaurant 1");
rest.set(1, "Hajipur"); // set return whole map
console.log(rest.set(2, "Patna")); //Map { 'name' => 'Restaurant 1', 1 => 'Hajipur', 2 => 'Patna' }

// we can also chain number of "set"
rest
  .set("categories", ["Chinese", "Italian"])
  .set("Opne", 11)
  .set("Close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed");

console.log(rest.get("name")); // Restaurant 1
console.log(rest.get(true)); // We are open :D

console.log(rest.has("name")); // true

console.log(rest.size); // 8

console.log(rest.clear());
console.log(rest); //Map {}

// ----other way to difine map
const question = new Map([
  ["question", "What is the best programming language in the world ?"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  [true, "Correct!!"],
  [false, "Try again"],
]);

// convert Object to map
const hourObj = {
  monday: "closed",
  tuesday: "open",
};
const hoursMap = new Map(Object.entries(hourObj));
console.log(hourObj); // { monday: 'closed', tuesday: 'open' }

// quiz app
console.log(question.get("question")); // What is the best programming language in the world ?

// looping over Map
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key} : %{value}`);
}

// ---forEach with mao
question.forEach((item, key, map) => {
  console.log(key, item);
});
