//variable

// let age = 24;
// let price = 10.99;

// let score = 0;

// console.log(`you are ${age} years old`)
// console.log(`price of onion $${10.99}`)

// console.log(`you score is ${score}`)



//TO check the data type




//boolean


//  Boolean it either true or false


// let online = true;
// let forSale = true;
// let isStudent = true;

// console.log(typeof online);
// console.log(`Bro is online:${online}`)
// console.log(`is this car is for : ${forSale}`)
// console.log(`enrolled:${isStudent}`
// )


// let fullName = "Ajay yadav";
// let age = 26;
// let isStudent = false;



// document.getElementById('p1').textContent = fullName;
// document.getElementById('p2').textContent = age;
// document.getElementById('p3').textContent = isStudent;


// //How to use the template literal


// document.getElementById('p1').textContent = `Your Name is:${fullName}`
// document.getElementById('p2').textContent = `Your age is:${age}`
// document.getElementById('p3').textContent = `Enrolled:${true}`




//Arithmetic Operation = Operands(values,variable,etc)
// operator(+ - * /)


// let students = 30;
// students = students + 1;

// let students = 30;
// students = students - 1;


// students = students * 2
// students = students / 2;
// students = students ** 2;



// augenmated arugment opertor


// // students += 1;
// // students -= 1;
// // students *= 2;
// // students **= 2;
// students %= 2;


//Learn decreament and increment of the operator

// students++;
// students--;

// console.log(students);

// ------------------------------------------------------------


/*Operator precedence

1. Parenthesis ()
2. exponents
3. Multiplication & division & modulo
4. Addition & substraction

*/

/*

let result = 1 + 2(third) * 3(second) + 4 ** 2(first);  //WOrking from left to right



*/

//example 2 -:

// let result = 12 % 5 + 8 / 2;
// console.log(result);


/*
 let result = 6/2 ** (2+5);

 step 1:  (2+5) =7
 step 2:   2**7 = 2 *7 (will do till 7 times)
 step 3: after that  6/128
 console.log(result);

 */





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// HOw to accept user Input

/*
  1. Easy Way = window prompt
  2. Proffessional way = HTML textbox

  */


// let username;
// username = window.prompt('Enter your userName');
// console.log(username);

/*
let username;
document.getElementById('mySubmit').onclick = function () {

    username = document.getElementById('myText').value;
    document.getElementById('myH1').textContent = `Welcome ${username}`
}

*/



//////////////////////////////////////////////////////////////////////////////////////////////////////


//Type conversion = change the datatype of a value to another (strings, number, boolean)

// let age = window.prompt('How old are you?')

// //will try convert the string into number


// age = Number(age);

// age += 1
// console.log(`your age will be ${age} in 2025`)


/*let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
console.log(x, typeof X);

y = String(y);

console.log(y, typeof y);


z = Boolean(z);

console.log(z, typeof z);

*/


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//const = a variable that can't be changed

/*

const PI = 3.14;
let radius;
let circumference;




document.getElementById("mysubmit").onclick = function () {
  radius = document.getElementById("myText").value;
  radius = Number(radius);
  circumference = 2 * PI * radius;
  document.getElementById("myH3").textContent = circumference + "cm";
}

*/


///////////////////////////////////////////////////////////////////////////////////////////////


// Math = build - in object that provide a collection of properties and method


// let x = 5.14;
// let y = 3;
// let z;

// z = Math.round(x);

// z = Math.floor(x);
// z = Math.ceil(x);
// z = Math.trunc(x);
// z = Math.pow(x,y);
// z = Math.log(x);
// console.log(z);
// let max = math.max(x, y, z);
// let min


//Random Number Generator


// let randomNum = Math.random();
// console.log(randomNum);

/*

// Program- 1 where dicing the dice how to do it and want to get the round number only

let randomNum = Math.floor(Math.random() * 6 + 1);  // we put that in math.floor to get the round number
console.log(randomNum);




//Program -2 Try to create the random from 0- 100

let randomNum = Math.floor(Math.random()* 100 +1);
console.log(randomNum);



/*
const min = 50;
const max = 100;
let randomNum = Math.floor(Math.random()* (max - min)) + min;   // we use (max-min))
console.log(randomNum);


*/

