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



/////////////////////////////////////////////////////////////////////////////////

// if statement
/*
let time = 9;

if (time > 12) {
  console.log('Good Afternoon')
} else {
  console.log("Good Morning")
}


*/


// let age = 25;
// let haslicense = false;


// if (age > 16) {
//   console.log('You are eligible to have license ')
// } else (age < 16){
//   console.log('You are not eligible to have License')
// }



//////////////////////////////////////////////////////////////////////////////////////////////

//.checked = property that determines the checked state of an HTML Checkbox or radio button element



//////////////////////////////////////////

/*

ternary opertor = a shorcut to if{} and else {} statment helps to assign a variable based on a condition
                  condition ? codeIfTrue : codeIfFalse;


                let age = 21

                let message = age>=18?"you're an adult": "you're a minor";  //If it is true then we assign the message (you're an adult ) and if it is false ('Youre a minor')
                console.log(message)


      Example 1:

  let time = 13

  let greeting = time>=12? "It's an Afternoon ": "it's is morning ";
  console.log(greeting)


  Example-2

   let isStudent = true;

   let Check = isStudent? "you are studend":"You have passed the exam";


   Example -3

   let purchaseAmount = 125;
   let discount = purchaseAmount >=100 ? 10:0    //If its above 100 discount will be of 10% and if it is less than 100 it's 0
   console.log(`Your Total is $${purchaseAmount - PurchaseAmount * (discount/100)})

                */



///////////////////////////////////////////////////////////

/* Switch = Can be an efficient Replacement to many else if statements

let day = 1;
switch(day){
       case 1:
         console.log("It is Monday");
}


Second Example -:

let testScore = 90;
let letterScore;

switch(true){
  case testScore >=90:
    letterGrade = "A";
    break;


  case testScore >=80:
    letterGrade = "B";
    break;


  case testScore >=50:
    letterGrade = "C";
    break;

  case testScore >=60:
    letterGrade = "D";
    break;

  case testScore >= 35:
    letterGrade = "E";
    break;

  default:
    letterGrade = "F";

}


console.log(letterGrade);

*/

///////////////////////////////////////////////////////////////////////////////////////////

/*

String Methods = allow you to manipulate  and work with the text(strings)


let userName = "Bro Code";

 // charAt() ---check the string word by its index

console.log(userName.charAt(5));


//indexof()---- show the index of that word you write in the console

console.log(userName.indexOf("0"));


//lastIndexOf

console.log(userName.lastIndexOf("o"));

//length properties

console.log(userName.length);

//trim()----it uses to trim any white space in the username 

userName = userName.trim(); 
console.log(userName);

//toUpperCase();
userName = userName.toUpperCase();

//tolowerCase


//startWith()--- to check the string if it is true or false

let userName = "BroCode";
let result = userName.startsWith("");

console.log(result);//output---false


//.endswith()--


//replaceAll


let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replaceAll("-","");///we did here replace the -- with empty string

console.lgo(phoneNumber);


//padStart()--



//String Slicing = Creating a substring from a portion of another string 

// String.slice(start,end)


// const fullName = "Bro Code";

// let firstName = fullName.slice(0,3);
// console.log(firstName);

// let lastName = fullName.slice(4,8);
// console.log(lastName);


// example -1 

const email = "bro1@gmail.com";

let userName = email.slice(0,email.indexOf("@"));

console.log(userName);



//Method chaining = Calling one method after another in one continuous line of code 

//-- No Method chaining ---

// we will tried to make a program where we try to enter the Email id where space will get trim, first latter become caps
become capital and other than the first it become lowercase


let userName = window.prompt("Enter your Username:");

username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extrachars = username.slice(1);
extrachars = extraChars.toLowerCase();
username = letter + extraChars;

console.log(username);




//-- Method Chaining ---


let username = window.prompt("Enter your username:");


username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username);



//////////////////////////////////////////////////////////////////////////////////////////////////////////

Logical Opertor = used to combine or manipulate boolean values (true or false)

AND = &&
OR = ||
Not = !

const temp = 25;

if (tem>20 && tem <100){
  console.log('THe temperature is cool')
}

////////////////////////////////////////////////////////////////////////////

// = assignment operator
   == comparison Operator( compare if values are equal)
   === Strict equality operator (compare if value & datatype are equal)
   != inequality operator 
   !== strictly inequality operator

Example0

const PI = "3.14";

if (PI === "3.14"){
  console.log("That is Pi");
}else{
  console.log("That is not Pi")
}

/////////////////////////////////////////////////////////////////////////////////
//While Loop = Reapeat some code while some condition is true

// for loop = repeat some code a limited amount of times



for(let i = 0; i <=2; i++){
  console.log(i);

  
}

// Increment by 2 


for (let i = 1; i<= 10; i+=2){
  console.log(i);
}

// for loop = repeat some code a LIMITED amount of times

// ------- INCREMENT -------
for(let i = 1; i <= 10; i++){
    console.log(i);
}

// ------- DECREMENT -------
for(let i = 10; i > 0; i--){
    console.log(i);
}
                                 


