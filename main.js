// Practice Activity 1: Write a Function Declaration
// Write a function named computeArea using the function declaration approach.

// function computeArea(width, height) {
//     let area = width*height;
//     console.log(`The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units`);

// };

// It will have two parameters: width & height.
// It will compute the area of a rectangle (width multiplied by height) and return a string in the following form:

// The area of a rectangle with a width of _ and a height of _ is ___ square units.

// Invoke the function to test it.
// computeArea(5, 10);

// Practice Activity 2: Write a Function Expression
// Write a function named planetHasWater using the function expression syntax.
// function planetHasWater (planet) {
//     if (planet.toLowerCase()==="earth" || planet.toLowerCase()==="mars") {
//         return true;
//     }
//     else  return false;

// }

// console.log(planetHasWater("Earth"));
// It will have one parameter: planet.
// Return true if the planet argument is either "Earth" or "Mars", otherwise return false.
// Bonus points if you ensure the function will work regardless of the casing of the planet being passed in ('earth', 'MARS', etc.).
// Invoke the function a couple of times to test it!

// write functions that accomplish the following:
// Take an array of numbers and return the sum.
// let sum = 0;
// let numArray = [1, 2, 3, 4];
// numArray.forEach((num) => {
//     sum+=num;
// })
// console.log(`Sum of number = ${sum}`);


// // Take an array of numbers and return the average:

// function average (array) {
//     let avg =0;
//     for (let i=0; i<array.length; i++) {
//         avg+=array[i];
//     // avg = sum / arrayrray.length;
//     }
//     avg/=array.length;
//     return avg;
// }
// console.log(average(numArray));

// // Take an array of strings and return the longest string.
// let stringArray = ["dog", "kitten", "horse", "cow", "q", "12"];
// function longestString(stAr) {
//     let string= "";
//     let lMax=0;
//     for (let i=0; i<stAr.length; i++) {
//         let l=stAr[i].length;
//         if (l>lMax) {
//             lMax =l;
//             string = stAr[i];
//         }
//     }
//     return string;
// }
// console.log(longestString(stringArray));



// // Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
// function longerThanNumber (array, num) {
//     let string= "";
//     let strArray = [];
//     // let lMax=0;
//     for (let i=0; i<array.length; i++) {
//         let l=array[i].length;
//         if (l>num) {
//             string = array[i];
//             strArray.push(string);
//         }
//     }
//     return strArray;
// }
// console.log(longerThanNumber(stringArray,2));



// Take a number, n, and print every number between 1 and n without using loops. Use recursion.
// function recursionPrint (n, i=1) {
//     if (i<=n) {
//         console.log(i);
//         recursionPrint(n, i+1);
//     }
//     else return;
// }

// recursionPrint(5);

// Use callback functions alongside Array methods to accomplish the following:
let arrayOfObjects = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

// Sort the array by age.

arrayOfObjects.sort((a,b) => a.age - b.age);
console.log(arrayOfObjects);

// Filter the array to remove entries with an age greater than 50.
let filteredArray = arrayOfObjects.filter((oneObject) => oneObject.age <= 50);
console.log(filteredArray);

// Map the array to change the “occupation” key to “job” and increment every age by 1.
let updatedArray = arrayOfObjects.map(oneObject => {
    oneObject.job = oneObject.occupation;
    delete oneObject.occupation;
    oneObject.age++;
    return oneObject; 
});
console.log(updatedArray);

// Use the reduce method to calculate the sum of the ages.
let totalAge = arrayOfObjects.reduce((sum, oneObject) => {
    return sum + oneObject.age;
}, 0);                        // zero is initial value for sum
console.log(`Total age of all is ${totalAge}`)  ;

// Then use the result to calculate the average age.
let avgAge =totalAge/arrayOfObjects.length;
console.log(`The average age is ${avgAge}`);

