// var, let, const
// always use const, unless you know you're going to change the value

// Primitive Data Types: String, Number, Boolean, null, undefined

// const name = 'John';
// const age = 30;
// console.log(name);
// console.log(age);

// // //Concatenation
//  console.log('My name is ' + name + ' and I am ' + age + ' years old.');
// // //  String Interpolation with Template Literals
//  console.log(`My name is ${name} and I am ${age} years old`)

// Arrays - variables that hold multiple values of multiple data types


// const fruits = ['apples', 'oranges', 'pears'];
// console.log(fruits);


// fruits[3] = 'grapes';
// console.log(fruits);

// // // when you want to add to the end, but aren't sure of how many values are already there
// fruits.push('mangos');
// console.log(fruits);

// // // when you want to add to the beginning
// fruits.unshift('strawberries')
// console.log(fruits);

// // // if you want to take the last value off
// fruits.pop();
// console.log(fruits);

// // // if you want to check that something is an array
// console.log(Array.isArray(fruits));

// // // if you want to get the index of a certain value
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

// // // you can also PULL values out (Destructuring--advanced!)

// const { firstName, lastName, address: { city }} = person;

// console.log(firstName);
// console.log(city);

// // // you can add properties
// person.email = 'john@gmail.com';
// console.log(person.email);

// const todos = [
//     {
//         id: 1,
//         text: 'take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'dentist appt',
//         isCompleted: false
//     },
// ];


// // if you wanted to print out a single property from an object in an array
// console.log(todos[1].text); 

// // // For loops
// // for(let i = 0; i <10; i++) {
// //     console.log(i);
// //     console.log(`For Loop Number: ${i}`);
// // }

// // // // While loops
// // // let i = 0;
// // // while(i < 10) {
// // //     console.log(`While Loop Number: ${i}`);
// // //     i++;
// // // }

// // // for(let i = 0; i < todos.length; i++) {
// // //     console.log(todos[i].text);
// // // }

// // // // For Of loops
// // // for(let todo of todos) {
// //     // console.log(todo.text);



// // High Order Array Methods: forEach, map, filter
// // todos.forEach(function(todo) {
// //     console.log(todo.text);
// // });

// const todoText = todos.map(function(todo) {
//     return todo.text;
// });

// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// }).map(function(todo) {
//     return todo.text;
// })

// console.log(todoCompleted);

// if you wanted to prep to send data to a server (formatting to JSON)
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

// Conditionals
// or : ||
// and : &&
// equal to (value and data type) : ===

// const x = 4;
// const y = 11;

// if(x > 5 || y > 10) {
//     console.log('x is more than 5 or y is more than 10');
// }

 
// Ternary Operator : then is represented by ? and else is represented by :

// const x = 15;

// const color = x > 10 ? 'red' : 'blue'
// console.log(color);

// const y = true
// const doug = y ? 'cool' : 'uncool'
// console.log(doug);

// Switches - another way to evaluate a condition

// let color = 'blue'
// switch(color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is NOT red or blue')
//         break; 
// }


// const familyData = [
//     {
//         name: 'Doug',
//         dob: new Date('10-14-1987')
//     },
//     {
//         name: 'Erin',
//         dob: new Date('12-4-1985')
//     },
//     {
//         name: 'Frankie',
//         dob: new Date('10-27-1985')
//     },
//     {
//         name: 'Jess',
//         dob: new Date('10-30-1985')
//     },
//     {
//         name: 'Lynn',
//         dob: new Date('3-23-1964')
//     }
// ]

// familyData.forEach(person => console.log(`My name is ${person.name} and I was born on ${person.dob}` ))

// Constructor Function
// function Person(firstName, lastName, dob) {
    // this.firstName = firstName;
    // this.lastName = lastName;
    // this.dob = new Date(dob);
    // this isn't actually the best way to do this because it sticks the
    // function in the object--you want to use prototypes instead
    // this.getBirthYear = function () {
    //     return this.dob.getFullYear();
    // }
    // this.getFullName = function () {
    //     return `${this.firstName} ${this.lastName}`; 
    // }
// }


// console.log(person1.dob.getFullYear());
// console.log(person1.getBirthYear());
// console.log(person1.getFullName());
// console.log(person2.getBirthYear());

// console.log(person1);

// Prototypes
// Person.prototype.getBirthYear = function () {
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }

// Class
// class Person {
//     constructor (firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }

//     getBirthYear() {
//         return this.dob.getFullYear();
//     }
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// // Instantiate Object
// const person1 = new Person('John', 'Doe', '4-3-1980');
// const person2 = new Person('Mary', 'Smith', '3-6-1970');

// console.log(person2.getFullName());
// console.log(person1);


// Selectors:
// single element
// const form =document.getElementById('my-form');
// console.log(form);
// console.log(document.querySelector('.container'));
// console.log(document.querySelector('h1'));


// multiple element
// console.log(document.querySelectorAll('.item'));

// const items = document.querySelectorAll('.item'); 

// items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');

// ul.remove();

// ul.firstElementChild.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
// ul.lastElementChild.textContent = 'Goodbye';
ul.children[1].textContent = 'The Middle';
ul.lastElementChild.innerHTML = '<h1>Goodbye</h1>'
