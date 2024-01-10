1. 1. variable - Most basic 
       variable- store, acess, modify === value


       How to set the variable?

       - let name;
       - when you type in console.log(name);
        it will show undefined in console means that You haven't assigned the value to variable.

        example-:

        let name = "Ajay Yadav"
        let address, zip, meal

        address = "House No-155"
        meal = "Chicken"

        console.log(name,address,zip, meal)

        name = "fish burrito";   // you can change the value of the name 


2. Naming 

   can contain digits, letters, underscore, $
   Must start with letter, $ or _


3. Let Vs Const Vs VAR

//Using Var

var value ="some value";

//using let 

let name = "john";
    name = "peter";

    //Using const (constant) -- can't reassign




4. Solving the Variable Problem

## Variables #1

1. create "firstName" and "last_name" variables
2. assign your values
3. create "address" variable and assign "main street" value to it
4. re-assign address to "first street" later
5. log all values in the console

*/

const firstName = "Ajay";
const last_name = "Yadav";

let address = "House no- 155";
address = "Uttarakhand";

console.log(firstName, last_name, address);