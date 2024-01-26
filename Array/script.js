//Declare an empty array;

// const arr = Array()

// or

// let arr = new Array()
// console.log(arr)


// Q-2 Declare an array with more than 5 number of elements and Find the length of your array

// let newArray = [1, 2, 3, 4, 5]

// console.log(newArray.length);


// Q-3 Get the first item, the middle item and the last item of the array //Important

// let array = [3, 4, 5, 6, 7, 8, 9, 10];

// // Getting the first item
// let firstItem = array[0];

// // Displaying the first item
// console.log("First Item: " + firstItem);


// //Geeting the middle
// let middleItem = array[Math.floor(array.length / 2)];

// console.log('Middle Item:' + middleItem);


// // Last name using the Array

// let lastItem = array[array.length - 1];

// console.log("Last item:" + lastItem);

//Question: Declare an array called mixedDataTypes, put different data types in the array, and find the length of the array. The array size should be greater than 5.

//Method-:

// Certainly! Let's break down the question and understand the approach taken to solve it:

// **Question: Declare an array called `mixedDataTypes`, put different data types in the array, and find the length of the array. The array size should be greater than 5.**

// **Approach:**

// 1. **Declare the Array (`mixedDataTypes`):** The first step is to create an array named `mixedDataTypes`. In JavaScript, arrays can hold elements of different data types.

//    ```javascript
//    let mixedDataTypes = ["John", 25, true, { city: "New York" }, ["apple", "banana"], null, undefined];
//    ```

//    Here, we have a mix of strings, numbers, booleans, objects, arrays, null, and undefined as elements in the array.

// 2. **Find the Length of the Array:** The `length` property of an array in JavaScript gives the number of elements in that array.

//    ```javascript
//    let arrayLength = mixedDataTypes.length;
//    ```

//    This line calculates the length of the `mixedDataTypes` array.

// 3. **Display the Array and Its Length:** Finally, we use `console.log()` to display the array and its length in the console.

//    ```javascript
//    console.log("Array: ", mixedDataTypes);
//    console.log("Array Length: " + arrayLength);
//    ```

//    This is for visualizing the array and its length when the code is executed.

// The key takeaway is that we're using JavaScript's array features to create an array with various data types, calculating its length, and then displaying both the array and its length. This helps demonstrate that arrays in JavaScript are versatile and can hold diverse types of data.


// Q-6 Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies = ['Facebok', 'google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

console.log(itCompanies.length);