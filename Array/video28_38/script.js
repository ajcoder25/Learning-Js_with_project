// // rest parameter =(...rest) allow a function work with a variable number of arguments by bundling them into
// an array

// spread = expands an array into seprate elements
// rest = bundles seprate into an array


// Exam-1

// function myFunction(...rest) {
//     console.log(rest);

// }

// myFunction(1, 2, 3, 4, 5, 6)

// It seems like there might be a confusion in terminology. "Rest" in the context of arrays is not a standard term. However, the term "rest" is often used in the context of programming languages and functions.

// In some programming languages, including JavaScript and some others, the "rest" parameter allows a function to accept any number of arguments as an array. For example, in JavaScript, you can use the rest parameter in a function like this:

// ```javascript
// function myFunction(...rest) {
//   // 'rest' is an array containing all the arguments passed to the function
//   console.log(rest);
// }

// myFunction(1, 2, 3, 4, 5);
// // Output: [1, 2, 3, 4, 5]
// ```

// Here, the `...rest` syntax is the rest parameter, and it collects all the arguments passed to the function into an array called `rest`.

// If you were referring to a different concept or context when mentioning "rest in array," please provide more details or clarify, and I'll do my best to assist you.


// Example-2:

// Certainly! Let's break down the code step by step:

// ```javascript
// // Define a function called 'sum' that takes any number of arguments
// function sum(...numbers) {
//     // Initialize a variable 'result' to store the sum
//     let result = 0;

//     // Loop through each number in the 'numbers' array
//     for (let number of numbers) {
//         // Add the current 'number' to the 'result'
//         result += number;
//     }

//     // Return the final sum
//     return result;
// }

// // Call the 'sum' function with arguments 1, 2, 3, 4, 5
// const total = sum(1, 2, 3, 4, 5);

// // Print the result using console.log
// console.log(`Your Total is $${total}`);
// ```

// Step 1: **Function Definition**
// ```javascript
// function sum(...numbers) {
//     // ...
// }
// ```
// This defines a function named `sum` that uses the rest parameter (`...numbers`) to accept any number of arguments. The `numbers` parameter will be an array containing all the values passed to the function.

// Step 2: **Initialize Result**
// ```javascript
// let result = 0;
// ```
// A variable named `result` is initialized to 0. This variable will store the sum of all the numbers.

// Step 3: **Loop through Numbers**
// ```javascript
// for (let number of numbers) {
//     result += number;
// }
// ```
// This loop iterates through each number in the `numbers` array. For each iteration, the current `number` is added to the `result`. This is how the sum is calculated.

// Step 4: **Return Result**
// ```javascript
// return result;
// ```
// The function returns the final sum stored in the `result` variable.

// Step 5: **Function Call**
// ```javascript
// const total = sum(1, 2, 3, 4, 5);
// ```
// The `sum` function is called with the arguments 1, 2, 3, 4, and 5. The rest parameter (`...numbers`) collects these values into an array named `numbers`.

// Step 6: **Print Result**
// ```javascript
// console.log(`Your Total is $${total}`);
// ```
// The `console.log` statement prints a message including the total sum. In this example, it will output something like "Your Total is $15."

// In summary, the `sum` function uses the rest parameter to accept any number of arguments, calculates their sum, and then the result is printed to the console.
// Define a function called 'sum' that takes any number of arguments
/*

function sum(...numbers) {
    // Initialize a variable 'result' to store the sum
    let result = 0;

    // Loop through each number in the 'numbers' array
    for (let number of numbers) {
        // Add the current 'number' to the 'result'
        result += number;
    }

    // Return the final sum
    return result;
}

// Call the 'sum' function with arguments 1, 2, 3, 4, 5
const total = sum(1, 2, 3, 4, 5);

// Print the result using console.log
console.log(`Your Total is $${total}`);



// Example -3

// function getAverage(...numbers) {
//     let result = 0;
//     for (let number of numbers) {
//         result += number;
//     }

//     return result / numbers.length;
// }


// const total = getAverage(75, 100, 85, 90, 50);

// console.log(total);


// -------- EXAMPLE 4 --------
// function combineStrings(...strings) {
//     return strings.join(" ");
// }

// const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");

// console.log(fullName);
*/
function combineStrings(...strings) {
    return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");

console.log(fullName);