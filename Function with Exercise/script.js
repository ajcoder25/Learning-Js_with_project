// How to we declare a function


// function functionName(){

// }

// functionName()  // This we called invoking the function




// Example 1s function sqProgram() {
//     let sum = 2;
//     let sq = sum * sum;

//     console.log(sq);
// }


// Example- 2

// function addTwoNumber() {

//     let numOne = 2;
//     let two = 5;
//     let sum = numOne + two

//     console.log(sum);
// }



// addTwoNumber();// Now will get the result 7


// Example -3

// function fullName() {

//     let firstName = "Ajay"
//     let secondName = "Yadav"

//     let space = ' ' // Create the space in your string

//     let fullName = firstName + space + secondName
//     console.log(fullName);
// }

// fullName();


// function fullName() {

//     let firstName = "Ajay"
//     let secondName = "Yadav"
//     let fullName = firstName + ' ' + secondName
//     return fullName;
// }

// console.log(fullName());


//function with a parameter

// function areaCircle(param1) {

//     let area = Math.PI * r * r
//     return area;

// }


// let result = areaCircle()

// console.log(result(10));


//Sure, I see a couple of issues in your code. Let me correct it:

// ```javascript
// function areaCircle(r) {
//     let area = Math.PI * r * r;
//     return area;
// }

// let result = areaCircle(10);

// console.log(result);
// ```

// Here are the corrections:

// 1. The function `areaCircle` should take a parameter `r`, but in your original code, you were using `param1` instead of `r`.

// 2. When calling the `areaCircle` function, you need to pass a value for `r`. In the corrected code, I passed `10` as an example.

// 3. When logging the result, you don't need parentheses after `result` because `result` is now the calculated area, not a function.

// With these changes, your function should now correctly calculate the area of a circle with a given radius and log the result to the console.

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// function with two parameter


// function addTwoNum(numOne, numTwo) {

//     let sum = numOne + numTwo;
//     return sum;
// }

// console.log(addTwoNum(20, 30))



//function with two parameter using template literal

function fullName(firstName, secondName) {

    return `${firstName} ${secondName}`
}


console.log(fullName('Ajay', 'yadav'));



