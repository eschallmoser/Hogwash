// var, let, const
// always use const, unless you know you're going to change the value

// Primitive Data Types: String, Numbers, Boolean, null, undefined

// const name = 'John';
// const age = 30;

// //Concatenation
//  console.log('My name is ' + name + ' and I am ' + age + ' years old.');
// //  String Interpolation with Template Literals
//  console.log(`My name is ${name} and I am ${age} years old`)

// Arrays - variables that hold multiple values of multiple data types

// const fruits = ['apples', 'oranges', 'pears'];

// fruits[3] = 'grapes';

// // when you want to add to the end, but aren't sure of how many values are already there
// fruits.push('mangos');

// // when you want to add to the beginning
// fruits.unshift('strawberries')

// // if you want to take the last value off
// fruits.pop();

// // if you want to check that something is an array
// console.log(Array.isArray(fruits));

// // if you want to get the index of a certain value
// console.log(fruits.indexOf('oranges'));

//  console.log(fruits);

// Object Literals - key value pairs

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 Main Street',
//         city: 'Boston',
//         state: 'MA'
//     }
// }

// console.log(person.hobbies[1]);
// console.log(person.address.city);

// // you can also PULL values out (Destructuring--advanced!)

// const { firstName, lastName, address: { city }} = person;

// console.log(firstName);
// console.log(city);

// // you can add properties
// person.email = 'john@gmail.com';
// console.log(person.email);

const todos = [
    {
        id: 1,
        text: 'take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'dentist appt',
        isCompleted: false
    },
];


// if you wanted to print out a single property from an object in an array
// console.log(todos[1].text); 

// For loops
// for(let i = 0; i <10; i++) {
//     console.log(i);
//     console.log(`For Loop Number: ${i}`);
// }

// // While loops
// let i = 0;
// while(i < 10) {
//     console.log(`While Loop Number: ${i}`);
//     i++;
// }

// for(let i = 0; i < todos.length; i++) {
//     console.log(todos[i].text);
// }

// // For Of loops
// for(let todo of todos) {
    // console.log(todo.text);



// High Order Array Methods: forEach, map, filter
todos.forEach(function(todo) {
    console.log(todo.text);
});


// if you wanted to prep to send data to a server (formatting to JSON)
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);