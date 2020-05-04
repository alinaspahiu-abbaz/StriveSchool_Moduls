// TERNARY OPERATOR
​
// const studentAge = 19;
​
// const price = (studentAge > 18 && studentAge < 30) ? "20$" : "15$";
​
// console.log(price);
​
// if(studentAge > 18) {
//     console.log(true)
// } else {
//     console.log(false)
// }
​
// TRUTHY FALSY
​
// const truthyOrFalsy = 2 - 2 ? "truthy" : "falsy";
//const truthyOrFalsy = undefined ? "truthy" : "falsy";
// const truthyOrFalsy = null ? "truthy" : "falsy";
//const truthyOrFalsy = NaN ? "truthy" : "falsy";
//const truthyOrFalsy = "" ? "truthy" : "falsy";
// const truthyOrFalsy = 1 ? "truthy" : "falsy";
​
// console.log(truthyOrFalsy);
​
// DOUBLE EQUALITY VS TRIPLE EQUALITY
​
// if (0 === "0") {
//   console.log("They are equal");
// } else {
//   console.log("They are different");
// }
​
// if (null === undefined) {
//   console.log("They are equal");
// } else {
//   console.log("They are different");
// }
​
// ********************* OBJECTS ************************
​
// const myObject = {
//   name: "John",
//   age: 32,
//   isStudent: true,
//   "is Student": "yes",
// };
​
// console.log(myObject.name.length);
​
// console.log(undefined)
// console.log(null)
​
// console.log(myObject["is Student"]);
​
// if (myObject.lastName) {
//   console.log(myObject.lastName); // Raises an error
// } else {
//   myObject.lastName = `Rambo`;
//   console.log(myObject); // Safe
// }
​
// delete myObject.name;
​
// console.log(myObject);
​
// console.log("age" in myObject); // Checks if a property exists and returns T/F
​
// console.log(Object.keys({ x: 0, y: 0, z: 1, w: 213123 })); // RETURNS AN ARRAY
​
// const obj1 = {
//   a: 1,
// };
​
// const obj2 = obj1; // DO NOT DO THIS TO CLONE OBJECTS
​
// const obj2 = {};
​
// Object.assign(obj2, obj1); // CLONING OBJECTS
// console.log(obj2); // obj2 = { a: 1 }
​
// obj2.a = 2;
​
// console.log(obj2); // obj2 = { a: 2 }
// console.log(obj1); // obj1 = { a: 1 }
​
// ***************** ARRAYS *********************
​
// let listOfNumbers = [1, 2, 3, 4, 5, 6, 990312, 12123123];
// console.log(listOfNumbers);
// console.log(listOfNumbers[0]);
// console.log(listOfNumbers[7]); // INDEXES START FROM ZERO (NOT ONE!!!)
// console.log(listOfNumbers[8]); // WE DO NOT HAVE INDEX NUMBER 8
​
// console.log("The length of the array is: ", listOfNumbers.length); // LENGTH === HOW MANY ELEMENTS DO THE ARRAY HAVE, MAXIMUM INDEX IS LENGTH - 1
​
// const myObject = {
//   x: 0,
//   arrayProperty: [2, 3123],
// };
​
//const listOfObjects = [{ x: 0, arrayProperty: [2, 3123] }, 2, "asd"]; // MIXED
​
// console.log(listOfObjects); // array listOfObjects
// console.log(listOfObjects[0]); // object (the first element of the array listOfObjects)
// console.log(listOfObjects[0].arrayProperty); // array arrayProperty (which is a property in the first element of the array listOfObjects)
// console.log(listOfObjects[0].arrayProperty[1]); // number (which is the second element in the array arrayProperty which is a property in the first element of the array listOfObjects)
​
// const listOfObjects = [{ x: 0, arrayProperty: [2, 3123] }];
​
// listOfObjects.push({ y: 1, arrayProperty: [123.13213, 12312] }); // APPENDS AN ELEMENT
​
// console.log(listOfObjects);
​
// const lastElement = listOfObjects.pop(); // REMOVES THE LAST ELEMENT
​
// console.log(listOfObjects);
// console.log("The element popped out: ", lastElement);
​
// const lastElementAgain = listOfObjects.pop();
// console.log(listOfObjects);
// console.log("The element popped out: ", lastElementAgain);
​
// const numbersArray = [2, 4, 123, 4];
​
// console.log(numbersArray.indexOf(4));
// console.log(numbersArray.lastIndexOf(4));
​
// console.log(numbersArray.slice(2));
​
// const newArray = numbersArray.concat([4, 52, 1231]);
// console.log(numbersArray);
// console.log(newArray);
​
/* MATRIX === BIDIMENSIONAL ARRAY
[
[1 2 3],
[4 5 6],
[7 8 9]
]
*/
​
// *********************** LOOPS ********************
​
// FOR LOOP
​
/*
for(initial Expression; condition; increment){
    //CODE TO BE REPEATED
}
*/
//const array = [2, 31, 123, 43242]; // array.length === 4
​
// for (let index = 0; index < array.length; index++) {
//   console.log("index: ", index);
//   console.log("element: ", array[index]); // array[4] DOES NOT EXISTS --> UNDEFINED
// }
​
// for (let number = 1; number < 5; number++) {
//   //   console.log("index: ", index);
//   //   console.log("element: ", array[index]); // array[4] DOES NOT EXISTS --> UNDEFINED
//   if (number % 2 === 0) {
//     console.log("EVEN");
//     // break
//   } else {
//     console.log("ODD");
//     //break
//   }
// }
​
// for (let entry of array) {
//   console.log("element: ", entry);
// }
​
// WHILE LOOP
​
// let condition = true;
​
// while (condition) {
//   //   console.log(number);
//   //   number = number + 1;
​
//   // Very complex lines of code
//   condition = false;
// }
​
// // DO WHILE LOOP
​
// do {
//   // THIS CODE GETS EXECUTED AT LEAST ONCE
//   console.log()
//   condition = false;
// } while (condition);