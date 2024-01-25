// array = a variable like structure that can hold more than 1 value



// let fruit = ["apple", "orange", "banana"];      //straight Bracket



//How to acess the value


// console.log(fruit[0]);
// console.log(fruit[1]);

// console.log(fruit[2]);
// console.log(fruit[3]);

//Add the value


// fruit[4] = "coconut";
// console.log(fruit);


//Push method--- TO put it to end of the array

// fruit.push("coconut");




//Pop method --- is going to remove the last element

// fruits.pop();

//unshift --- to add an element to the start
//shift --- use to remove from the first element

///////////////////////

// check the array length

// let numOfFruits = fruit.length; // to get the length of any array by type in the array name with.length

// console.log();
/////////////////

// How to search for the element

// let index = fruit.indexOf("coconut");//if its negative one that mean it didn't find the element


// console.log(index); //

////////////////////////////////////

// Q- How to iterate an Array


// let fruit = ["orange", "Apple", "Grapes", "Coconut"];


// for (let i = 0; i < fruit.length; i++) {

//     console.log(fruit[i]);  //it is how we call it
// }

//If you want to make it in reverse program

// for (let i = fruit.length; i > 0; i--) {

//     console.log(fruit[i]);
// }


///////////////////////

//sort

// fruit.sort(); // sort an element in alphblacterical method

// fruit.sort().reverse();


//////////////////////////////////////////////////////

// 2D array = Multi-dimensional array that stored a matrix of data in rows and columns.
//    useful for games, spreadsheet, or representing images


// const matrix = [[1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]];



// matrix[0][0] = 'X';
// matrix[0][1] = 'o';
// matrix[0][2] = 'X';

// matrix[1][0] = 'O';
// matrix[1][1] = 'X';
// matrix[1][2] = 'O';
// matrix[2][0] = 'X';
// matrix[2][1] = 'O';
// matrix[2][2] = 'X';



// for (let row of matrix) {

//     const rowString = row.join(' ')  // combine the row(join) and have a space (' ')by using the string
//     console.log(rowString);
// }


// //If you want to acess any row or column

// // martrix[0] [0] ///row and then column


////////////////////////////////////////



// // Spread operator = ....allows an iterable such as an array or string to be expanded into
//  seperate elements (unpack the element)


// let numbers = [1, 2, 3, 4, 5];
// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);
// console.log(minimum);



// ex-1 
let fruit = ["apple", "Orange", "Papaya"]
let vegetable = ["celeary", "cauliflower", "onions"]


let all = [...fruit, ...vegetable]

console.log(all);











