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

//   let mixedDataTypes = ["John", true, {city:"New york"}, ["apple","banana"],null, undefined]

//   let mixedLength = console.log(mixedDataTypes.length)

//    Here, we have a mix of strings, numbers, booleans, objects, arrays, null, and undefined as elements in the array.

// 2. **Find the Length of the Array:** The `length` property of an array in JavaScript gives the number of elements in that array.

//    ```javascript
//    let arrayLength = mixedDataTypes.length;
//    ```

//    This line calculates the length of the `mixedDataTypes` array.

// 3. **Display the Array and Its Length:** Finally, we use `console.log()` to display the array and its length in the console.


// console.log('Array:', mixedDataTypes);
// console.log('Array Length:' + arrayLength);


//    ```javascript
//    console.log("Array: ", mixedDataTypes);
//    console.log("Array Length: " + arrayLength);
//    ```

//    This is for visualizing the array and its length when the code is executed.

// The key takeaway is that we're using JavaScript's array features to create an array with various data types, calculating its length, and then displaying both the array and its length. This helps demonstrate that arrays in JavaScript are versatile and can hold diverse types of data.


// Q-6 Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

// const itCompanies = ['Facebok', 'google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// console.log(itCompanies.length);


// let firstCompany = itCompanies[0];
// console.log(firstCompany)


// let middleCompany = itCompanies[Math.floor(itCompanies.length / 2)]

// console.log(middleCompany);

// let lastCompany = itCompanies[(itCompanies.length - 1)];






// console.log('first Company: ' + firstCompany);
// console.log('Middle Company:' + middleCompany);
// console.log('last Company:' + lastCompany);


// // Change each company name to uppercase one by one and print them out


// for (let i = 0; i < itCompanies.length; i++) {
//     console.log(itCompanies[i].toUpperCase());
// }

// Absolutely! Let's break down the code step by step:

// 1. **Array Declaration:**
//    ```javascript
//    const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
//    ```
//    - This line creates an array named `itCompanies` containing the names of some technology companies.

// 2. **For Loop:**
//    ```javascript
//    for (let i = 0; i < itCompanies.length; i++) {
//    ```
//    - This line starts a `for` loop.
//    - `let i = 0`: Initializes a variable `i` to 0. This variable will be used to keep track of the current position in the array.
//    - `i < itCompanies.length`: The loop will continue as long as `i` is less than the length of the `itCompanies` array.
//    - `i++`: After each iteration, increments the value of `i` by 1.

// 3. **Code Inside the Loop:**
//    ```javascript
//    console.log(itCompanies[i].toUpperCase());
//    ```
//    - Inside the loop, this line does the following:
//      - `itCompanies[i]`: Accesses the element at the current position `i` in the `itCompanies` array.
//      - `.toUpperCase()`: Converts the company name to uppercase.
//      - `console.log(...)`: Outputs the uppercase company name to the console.

// 4. **Loop Execution:**
//    - The `for` loop iterates over each element in the `itCompanies` array one by one.
//    - On each iteration, it prints the uppercase version of the company name to the console.

// 5. **Output:**
//    The output of the code will be:
//    ```
//    FACEBOOK
//    GOOGLE
//    MICROSOFT
//    APPLE
//    IBM
//    ORACLE
//    AMAZON
//    ```

// In summary, this code uses a loop to go through each company name in the array, converts each name to uppercase, and then prints the uppercase version to the console. This helps you understand the basic structure of a loop and how to manipulate array elements.






// Q-12 Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies


// const itCompanies = ['Facebok', 'google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// let add = itCompanies.join(',');


// console.log(`${add} are big IT companies`)

// Q-13 Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found?

// const itCompanies = ['Facebok', 'google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// let check = itCompanies;
// check = window.prompt("Check the name of the company")
// if (itCompanies.includes(check)) {
//     console.log("This is geuine Company")
// }
// else {
//     console.log(`This ${check} not found`)
// }

/////////////////////////////////////////////////////////////////////////////////

//Q-14 Filter out companies which have more than one 'o' without the filter method?

const filteredCompanies = [];

for (let company of itCompanies) {

    let oCount = o;

    for (let char of company.toLowerCase())
}
