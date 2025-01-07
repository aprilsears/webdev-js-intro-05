// Prevent us from attempting to use variables
// that are not declared
"use strict"


let shoppingList = ["Apricots", "Pineapple", "Raisins"];
console.log(shoppingList[0]);    // Output: "Apricots"

shoppingList.shift();    // Removing the first element with the shift method
console.log(shoppingList);   // Output: ["Pineapple", "Raisins"]

shoppingList.push("Cranberries");    // Add an element to the end of our array with the push method
console.log(shoppingList);   // Output: ["Pineapple", "Raisins", "Cranberries"]

let myArray = [1, "hello", true, { name: "John" }]; // Array that holds different data types number, string, booleen, object

console.log(myArray);   //Output: Array(4) [ 1, "hello", true, {…} ]

// 0: 1, 1: "hello", 2: true, 3: Object { name: "John" }, length: 4

let myNumbers = [1, 2, 3, 4];  // typeof Array

console.log(typeof myNumbers); // Output: "object" 

//Change the value of an element in each array.
let myArray = [1, "hello", false, { name: "John" }]; 

console.log(myArray); // 0: 1, 1: "hello", 2: false, 3: Object { name: "John" }, length: 4

let shoppingList = ["Apples", "Apricots", "Pineapple", "Raisins"]; // added apples to index
console.log(shoppingList[0]);    // Output: "Apples"

shoppingList.shift();    // Removing the first element with the shift method
console.log(shoppingList); // Output: ["Apricots", "Pineapple", "Raisins"]

shoppingList.push("Grapes");    // Add an element to the end of our array with the push method
console.log(shoppingList);   // Output: ["Pineapple", "Raisins", "Grapes"]








