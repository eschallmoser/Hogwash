// Rules for naming variables:
// cannot be a reserved keyword
// should be meaningful and descriptive
// cannot start with a number
// cannot contain a space of hyphen
// they are case-sensitive
// best practice is to declare each variable on their own separate line

// Examples of Primitive Value Types
// let name = 'Erin'; 
// String Literal
// let age = 35;
// Number Literal
let isApproved = true;
// Boolean Literal
// Undefined -- does not have a value YET
// Null -- clears the value of the variable
let firstName = undefined;
let selectedColor = null;

// use ojbects to group related properties, keep code clean
let person = {
    name: "Erin",
    age: 35
};

// Dot Notation, more concise, should be default choice
person.name = "Kate";

// Bracket Notation, can be useful in some situation, like if you don't know what property will be used in future
let selection = "name";
person[selection] = "Mary";


console.log(person.name);

// Array- a data structure that we use to represent a list of items
let selectedColors = ['red', 'blue'];
selectedColors[2] = 7;
console.log(selectedColors);
console.log(selectedColors[0]); 
console.log(selectedColors);
console.log(selectedColors.length);

// Function- a set of statements that performs a task or calculates a value
// This function is performing a task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

greet('John', 'Smith');

// This function is calculating a value
function square(number) {
 return number * number;
}

// let number = square(2);
// console.log(number);

console.log(square(2));



