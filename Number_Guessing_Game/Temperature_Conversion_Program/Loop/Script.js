// while loop = repeat some code while some condition is true

// ex-1

// let username = "";

// if (username === "") {
//     console.log(`you didn't enter your name `);

// } else {
//     console.log(`hello ${username}`);
// }


// ex-2


// // while loop works infinately if it get username strictly equal to condition, if only it gets break out when the condition
//  become false

// let username = "";

// while (username === "") {
//     console.log('Please! enter you name');
// }
// else {

//     console.log('Hello ${username}');
// }


// ex-3


// let userName = ""

// while (userName === "") {
//     userName = window.prompt('Enter you User name')// Reapeat this code until this value don't get  true

// }

// console.log(`hello ${userName}`);


// ex-4(important example)


// let userName = "";

// while (userName === "" || userName === null) {     // If any of these condition gets true, it will work until it's gets false
//     userName = window.prompt('Enter your username ');
// }

// console.log(`Hello ${userName}`);


// In the provided code snippet, the `while` loop continues to execute as long as the condition inside the parentheses is true. The condition is:

// ```javascript
// userName === "" || userName === null
// ```

// This condition checks if the variable `userName` is an empty string (`""`) or `null`. If either of these conditions is true, the loop will continue to prompt the user for input.

// Here's how it works:

// 1. The `userName` variable is initialized with an empty string: `let userName = "";`.
// 2. The `while` loop checks if `userName` is either an empty string or `null`.
// 3. If `userName` is an empty string or `null`, the loop prompts the user to enter a username using `window.prompt('Enter your username ');`.
// 4. The user input is assigned to the `userName` variable.
// 5. The loop goes back to the condition, and if the entered username is still an empty string or `null`, the loop continues to prompt the user.
// 6. If the user enters a non-empty string, the condition becomes false, and the loop exits.
// 7. The program then prints a greeting using `console.log(`Hello ${userName}`);`.

// So, the loop becomes true initially because `userName` is an empty string, and it stays true until the user enters a non-empty string.






// DO while Loop---- do the code and then check the conditon at the end

// let username = "";

// do {
//     username = window.prompt('Enter your Name');

// } while (username === "" || username === null)
// console.log(`Hello ${username}`);




// ex-

// let loggedIn = false;
// let username;
// let password;

// while (!loggedIn) {
//     username = window.prompt('Enter your username');
//     password = window.prompt('Enter your Password');

//     if (username === "myUsername" && password === "mypassword") {
//         loggedIn = true;
//         console.log("you are logged in!");
//     } else {
//         console.log("Invalid credential! please Try again")
//     }
// }


// for loop - reapeat some code a limited amount of times

// for (let i = 0; i <= 2; i++) {

//     console.log('hello')
// }


// for (let i = 0; i <= 10; i += 2) {
//     console.log(i);
// }


//increment by 3

// for (let i = 3; i <= 20; i += 3) {
//     console.log(i)
// }


//Decrement


// for (let i = 50; i > 0; i -= 3) {
//     console.log(i)
// }


// Decrement

// for (let i = 50; i > 0; i -= 3) {
//     console.log(i);
// }

// console.log('Happy New Year')


// Certainly! Let's break down the provided JavaScript code:

// ```javascript
// for (let i = 50; i > 0; i -= 3) {
//     console.log(i);
// }

// console.log('Happy New Year');
// ```

// 1. `for` loop initialization:
//    - `let i = 50;`: Initializes a variable `i` with the value 50.
//    - `i > 0;`: Specifies the condition that the loop should continue as long as `i` is greater than 0.
//    - `i -= 3`: After each iteration of the loop, decrement `i` by 3.

// 2. Inside the `for` loop:
//    - `console.log(i);`: Outputs the current value of `i` to the console during each iteration.

// 3. Loop execution:
//    - The loop starts with `i` set to 50.
//    - It continues as long as `i` is greater than 0.
//    - In each iteration, the value of `i` is printed to the console, and `i` is decreased by 3.

// 4. When `i` becomes less than or equal to 0, the loop exits.

// 5. After the loop:
//    - `console.log('Happy New Year');`: Prints "Happy New Year" to the console.

// So, the code prints numbers in descending order, starting from 50 and decreasing by 3 in each step, until it reaches a value less than or equal to 0. After printing these numbers, it prints "Happy New Year" to the console.


//continue---it will contiue to  do iteration by skipping

// for example

// for (let i = 1; i <= 20; i++) {

//     if (i == 13) {
//         continue;
//     } else {
//         console.log(i);
//     }



// }


//Break --- It will break as its value gets equal to 13 entriely

// for (let i = 1; i <= 20; i++) {
//     if (i == 13) {
//         break;
//     } else {
//         console.log(i)
//     }

// }



//////////////////////////////////////////////////////////////

// Number Guessing Game 

// const minNum = 1;
// const maxNum = 100;
// const answer = Math.random() * (maxNum - minNum + 1)
// console.log(answer);
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;






let attempts = 0;
let guess;
let running = true;




while (running) {

    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);




    if (isNaN(guess)) {
        window.alert("Please enter a valid number");
    }
    else if (guess < minNum || guess > maxNum) {
        window.alert("Please enter a valid number");
    }





    else {
        attempts++;
        if (guess < answer) {
            window.alert("TOO LOW! TRY AGAIN!");
        }




        else if (guess > answer) {
            window.alert("TOO HIGH! TRY AGAIN!");
        }





        else {
            window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts`);
            running = false;
        }
    }
}