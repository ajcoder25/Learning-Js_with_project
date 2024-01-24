
// // Function = A section of reusualbe code.
//               declare code once, use it whenever you want.




// Example -1st function happyBirthday(fullName, age) {


//     console.log('Happy birthday to you ');
//     console.log('Happy birthday to you Ajay');
//     console.log('Happy New year');
//     console.log(`You fullName ${fullName} and you are ${age} year old`)
// }




// happyBirthday("Ajay Yadav", 26);  (---- the value --- Ajay yadav --- is an argument)



//Important- parameter should match up




// Return Keyword

function add(x, y) {

    let result = x + y;
    return result;
}


console.log(add(2, 3));



//subtract function

function substract(x, y) {

    return x - y;
}

console.log(substract(2, 4));


//MultiPly

function multiply(x, y) {
    return x * y
}

console.log(multiply(2, 4));


function divide(x, y) {

    return x / y;

}

console.log(divide(3, 5));



// we will try to create the function that if it is even or odd


// function isEven(number) {

//     if (number % 2 === 0) {

//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isEven(14));


//trenary Operator


// function isEven(number) {

//     return number % 2 === 0 ? true : false;
// }

// console.log(isEven(13))



//////////////////////////////////////////////////////////


// Create a function to check the if it is valid email or not


// function isValidEmail(email) {

//     if (email.includes("@")) {

//         return true;

//     }

//     else {

//         return false;

//     }
// }


// console.log(isValidEmail("ajay12676gmail.com"));


// doing it using the trenary operator


// function isValidEmail(email) {

//     return email.includes("@") ? true : false;
// }


// Variable scope = where a variable is recognized and accessible(local vs global)


function name2() {
    let x = 2;           //here x is local scope varaible 

}


let x = 4; //it is global scope 

function function2() {
    console.log(x);
}




