// Syntax Notes

// How to create variables
var x;
var y;

// How to use variables
x = 5;
y = 6;
let z = x + y;

// An expression computes to a value: the computation is called the evaluation.

/*
* Block comments can also be used.
* They are used for formal documentation, and are less common.
*/

// Variables can be declared in 4 ways: var, let, const, and nothing.
var x = 5;
var y = 6;
var z = x + 6;

// As a general rule, start declaring all variables with const. Then, if you think the value of the variable
// can change, use let.

let carname; // This variable has a value of undefined, since we did not define it.

// Redeclaration
var car = 'Volvo';
var car; // still has value Volvo

let car = 'Volvo';
let car; // this does not work: same for const

// If you put a number in quotes, the rest will be treated as strings (remember order of operations)
let x = 2 + 3 + "5" // 55

// ------------------ Specific Let Notes: ------------------
// 1. Variables defined with let cannot be redeclared (seen above)
// 2. Variables defined with let must be declared before use.
// 3. Variables defined with let have block scope.

// 1. Example of redeclaration (not allowed with let, but allowed with var)
let x = "J";
let x = "w";

// 2. Example of block scope. Note that we can redeclare if the let is in another block!
let w = 7
// here w is 7
{
    let w = 2;
    // here w is 2
}
// here w is 7


// Block scope is different for var.
var w = 7
// here w is 7
{
    var w = 2;
    // here w is 2
}
// here w is 2

//Variables defined with var are "hoisted to the top" and therefore can be used before they are declared.
cartype = "Volvo";
var cartype;

// ------------------ Specific Const Notes: ------------------
// 1. Variables defined with const cannot be redeclared
// 2. Variables defined with const cannot be reassigned (must not change)
// 3. Variables defined with const have block scope.
// 4. Variables defined with const must be assigned a value when they are declared.

// NOT ALLOWED - changing const
const pi = 3.14;
pi = 3.14159;

// NOT ALLOWED - not assigned a value when declared
const pi;
pi = 3.14;

// Const does not define a constant value, but rather a constant *reference* to a value.
// This means that you CANNOT
// - Reassign a constant array, value, or object
// But you CAN
// - Change the elements of a constant array or the properties of a constant object
// Example:

// Allowed:
const cars = ['Saab', 'Volvo', 'BMW'];
cars[0] = 'Toyota' // changing element
cars.push('Audi') // adding element

// NOT ALLOWED:
cars = ['hey']; // Reassigning the array


// The same goes for objects.
// Allowed:
const car = {type:'Fiat', model:'500'}
car.type = 'Audi' // changing property
car.owner = 'Michael' // adding property

/// NOT ALLOWED:
car = {name:57}