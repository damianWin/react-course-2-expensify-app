// const person = {
//     age: 31,
//     location: {
//         city: "philadelphia",
//         temp: 21
//     }
// }

// const {namee } = person;
// const {city, temp: temperature} = person.location;


// console.log(`${city} is ${temperature} years old`);

// // console.log(namee);

// const book = {
//     title: "Ego is the enemy",
//     author: "Ryan Holiday",
//     publisher: {
//         namee: "penguin"
//     }
// }

// const {namee: publisherName = "Self-published"} = book.publisher

// console.log(publisherName); 


// const address = ["123 allah", "philly", undefined, "234234"];

// const [, city = "Myamar", state = "New York"] = address;

// console.log(`You are in ${city} ${state}`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];
const [itemName, , medium] = item;

console.log(`A medium ${itemName} costs ${medium}`)