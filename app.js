// var name = 'John Doe';
// console.log(name);

// name = 'Steve'
// console.log(name);


// //Init variables
// var greeting;
// console.log(greeting)

// greeting = 'HELLOW'
// console.log(greeting)

// var firstName = 'Joshn'
// var lastName = 'DOES'

// console.log(firstName + ' ' + lastName);

// const person = {
//     name: 'Johsn',
//     age: 2
// }

// person.name = 'GLEEBA JOPE'
// console.log(person);

// const numbers = [1,2,3,4,5,6];
// numbers.unshift();
// console.log(numbers);

//PRIMITIVE TYPES

//STRING
// const name = 'John Doe';
// //number
// const age = 45;
// //boolean
// const hasKids = true;
// //null
// const car = null;
// //undefined
// let test;
// //Symbol
// const sym = Symbol();
// console.log(typeof sym);

//Reference types
//Array
// const hobbies = ['movies', 'music'];
// //Object Literal
// const address = {
//     city: 'Boston',
//     state: 'MA'
// }
// //date
// const today = new Date();
// console.log(today);
// console.log(typeof today);

// let val;

// //number to string
// val = String(5);
// val = String(4+4);
// //boolean
// val = String(true);
// //date
// val = String(new Date);
// //array
// val = String([1,2,3,4]);

// //toString()
// val = (5).toString();
// val = (true).toString();
// //string to number
// val = Number('5');
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number('Hello');
// val = Number([1,2,3]);

// //parseInt
// val = parseInt('100');
// val = parseFloat('100.2443');

// //output
// console.log(val);
// console.log(typeof val);
// //console.log(val.length);
// console.log(val.toFixed(2));


//type coersion - concatinating strings and numbers

// const val1 = String(5);
// const val2 = 6;
// const sum = val1 + val2;

// console.log(sum);
// console.log(typeof sum);

// const num1 = 100;
// const num2 = 60;

// let val;

// //simple math w/numbers
// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// //math objects
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.8);
// val = Math.ceil(2.4);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(8,2);
// val = Math.min(2,4,8,9);
// val = Math.max(2,4,8,9);
// val = Math.random();

// val = Math.floor(Math.random() * 20 + 1);


// console.log(val);

// const firstName = 'BILL'
// const lastName = 'DWYER'
// const age = 31
// const str = 'HELLO, MY NAME IS BILL'
// const tags = 'web design, web programming, web stuff'

// let val;

// val = firstName + lastName;

// //concatenation
// val = firstName + ' ' + lastName;

// //Append
// val = 'BILL'
// val += 'DWYER'

// val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// // Escaping
// val = 'That\'s awesome, I can\'t wait';

// //Length

// val = firstName.length;


// //concat
// val = firstName.concat(' ', lastName);

// //change case
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// // [] shows index value
// val = firstName[0];

// val = firstName.indexOf('I');
// val = firstName.lastIndexOf('L');

// //charAt()

// val = firstName.charAt('2');

// //get last character
// val = firstName.charAt(firstName.length -3);

// // substring()

// val = firstName.substring(0,3);

// //slice()
// val = firstName.slice(0,4);
// val = firstName.slice(0,-3);

// //split

// val = str.split(' ');
// val = tags.split(',');

// //replace
// val = str.replace('BILL', 'DWYER');

// //includes
// val = str.includes('HELLO');

// console.log(val);

//Template Literals
// const name = 'BILL';
// const age = 31;
// const job = 'DEV';
// const city = 'RAYTOWN';

// //without template strings(ES5)
// html = '<ul><li>Name: ' + name +'</li><li>Age: ' + age + '</li><li>Job: ' + job + ' </li><li>City: ' + city + '</li></ul>';

// html = '<ul>' +
// '<li>Name: ' + name +'</li>' +
// '<li>Age: ' + age + '</li>' +
// '<li>Job: ' + job + ' </li>';

// //with template strings

// function hello(){
//     return 'hello';
// }

// html = `
// <ul>
// <li>Name: ${name}</li>
// <li>Age:${age} </li>
// <li>Job:${job} </li>
// <li>${2+2}</li>
// <li>${hello()}</li>
// <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
// </ul>
// `;

// document.body.innerHTML = html;

//Arrays & array methods

// const numbers = [43,46,33,23,44,36,5];
// const numbers2 = new Array(43,46,33,23,44,36,5);
// const fruit = ['apple', 'banana', 'pear']
// const mixed = ['HELLO', 2,3,'NO',true, undefined, null, new Date()];

// let val;

// //get array length
// val = numbers.length;
// //check if is array?
// val = Array.isArray(numbers);
// //get single value
// val = numbers[3];
// val = numbers[0]
// //insert into array
// numbers[2] = 100;
// //find index of value
// val = numbers.indexOf(36);

// // //mutating arrays
// // //add to beginning of index
// // numbers.push(250);
// // //add to end
// // numbers.unshift(120);
// // //remove from end
// // numbers.pop();
// // //take off from front
// // numbers.shift();
// // //splice values
// // numbers.splice(1,1,);
// // //reverse
// // numbers.reverse();

// //concat array
// val = numbers.concat(numbers2);

// //sort
// // val = fruit.sort();
// // val = numbers.sort();

// //use compare function
// // val = numbers.sort(function(x,y){
// // return x - y;
// // })

// // //reverse sort
// // val = numbers.sort(function(x,y){
// //     return y - x;
// //     })

// //find
// function under50(num){
//     return num < 50;
// }

// val = numbers.find(under50);

// function over50(num){
//     return num > 50;
// }

// val = numbers.find(over50);


// console.log(numbers);
// console.log(val);

//object literals

// const person = {
//     firstName: 'BILL',
//     lastName: 'Dwyer',
//     age: 31,
//     email: 'BDWYER@HOTMAIL',
//     hobbies: ['music', 'sports', 'beer'],
//     address: {
//         city: 'KC',
//         state: 'MO'
//     },
//     getBirthYear: function(){
//         return 2022 - this.age;
//     }
// };

// let val;
// //get specific value
// val = person.firstName;
// val = person.age;
// val = person.email;
// val = person.hobbies[0];
// val = person.address.state;
// val = person.address['city'];
// val = person.getBirthYear();



// console.log(val);

// const people = [
//     {name: 'John', age: 30},
//     {name: 'Alex', age: 31},
//     {name: 'Nancy', age: 45}
// ];

// for(let i = 0; i < people.length; i++){
//     console.log(people[i].name);
// }

//dates and times
// let val;

// const today = new Date();
// let birthday = new Date('05-05-1998')
// birthday = new Date('May 12 1988')
// birthday = new Date('10/10/1988')
// //ZERO BASED
// val = today.getMonth();
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime();

// birthday.setMonth(2);
// birthday.setDate(12);
// birthday.setFullYear(1985);
// birthday.setHours(3);
// birthday.setMinutes(30);
// birthday.setSeconds(25);
// console.log(birthday);

//if statements
// if(something){
//     do something
// } else {
//     do something else
// }

// const id = '100';

// if(id == 100){
//     console.log('correct');
// } else {
//     console.log('Incorrect')
// }

// //not equal to

// if(id != 101){
//     console.log('correct');
// } else {
//     console.log('Incorrect')
// }

// //equal to value & type
// if(id === 100){
//     console.log('correct');
// } else {
//     console.log('Incorrect')
// }

// //not equal to value and type

// //equal to value & type
// if(id !== 100){
//     console.log('correct');
// } else {
//     console.log('Incorrect')
// }

//test if undefined
// if( typeof id !== 'undefined'){
//     console.log(`The id is ${id}`)
// } else {
//     console.log('no id')
// }

// const id = '100';

// //greater or less than
// if(id <= 100){
//     console.log('correct');
// } else {
//     console.log('Incorrect')
// }

// //If Else
// const color = 'yellow';

// if(color === 'red'){
//     console.log('Color is red')
// } else if(color === 'blue') {
// console.log('color is blue')
// } else {
//     console.log('color is not red or blue')
// }

//logical operators
// const name ='Steve'
// const age = 20;


// //and &&
// if(age > 0 && age < 12){
//     console.log(`${name} is a child`);
// } else if(age >= 13 && age <= 19){
//     console.log(`${name} is a teenager`)
// } else {
//     console.log(`${name} is an adult`)
// }

// //OR ||
// if(age < 16 || age > 65){
//     console.log(`${name} can not run in race`)
// } else {
//     console.log(`${name} is registered for the race`)
// }

// //ternary operators
// console.log(id === 100 ? 'Correct' : 'incorrect')

// if(id === 100)
// console.log('Correct');
// else
// console.log('Incorrect')

//Switches
// const color ='yello';

// switch(color){
//     case 'red': 
//     console.log('color is red')
//     break;
//     case 'blue':
//     console.log('color is blue')
//     break;
//     default:
//         console.log('color is not red or blue')
//         break;
// }

// let day;

// switch(new Date().getDay()){
//     case 0:
//         day = 'sunday'
//     break;
//     case 1:
//         day = 'monday'
//     break;
//     case 2:
//         day = 'tuesday'
//     break;
//     case 3:
//         day = 'wednesday'
//     break;
//     case 4:
//         day = 'thursday'
//     break; 
//     case 5:
//         day = 'thursday'
//     break; 
//     case 6:
//         day = 'friday'
//     break;        
// }

// console.log(`today is ${day}`);

//function declaration
function greet(firstName = 'John', lastName = 'Doe'){
    // if(typeof firstName === 'undefined'){
    //     firstName = 'John'
    // }
    // if(typeof lastName === 'undefined'){
    //     lastName = 'Doe'
    // }
    return 'Hello' + ' ' + firstName + ' ' + lastName
};

// console.log(greet());

//function expressions

const square = function(x = 3){
return x*x
};

// console.log(square())

//immediately invocable function expressions = IIFEs

// (function(){
//     console.log('IIFE ran..')
// })();

// (function(name){
//     console.log('HEllo'+ name)
// })('JOHN');

//property methods

// const todo ={
//     add: function(){
//         console.log('Add todo')
//     },
//     edit: function(id){
//         console.log(`Edit todo ${id}`)
//     }
// }

// todo.delete = function(){
//     console.log('Delete todo')
// }

// todo.add()
// todo.edit(22)
// todo.delete()

//Loops
//For loop

// for(let i = 0; i <= 10; i++){
// console.log('Number ' + i)
// }

// for(let i = 0; i <= 10; i++){
//     if( i === 2){
//         console.log('2 is my fave num');
//         continue;
//     }
// if(i === 5){
//     break;
// }

//     console.log('Number ' + i)
//     }

//WHILE LOOP

// let i = 0;

// while(i < 10){
//     console.log('Number ' + i)
//     i++;
// }

//Loop through array

// let cars = ['chevy', 'ford', 'honda', 'toyota']

// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i])
// }

//For each 
// cars.forEach(function(car, index, array){
// console.log(`${index} : ${car}`);
// console.log(array)
// })

//MAP
// const users = [
//     {id:1, name: 'John'},
//     {id: 2, name: 'Sarah'},
//     {id: 3, name: 'Walt'},
//     {id: 4, name: 'Deetoe'}
// ]

// const ids = users.map(function(user){
//     return user.id
// })


// console.log(ids);

//For in

// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 40
// }

// for(let x in user){
//     console.log(`${x} : ${user[x]}`)
// }

//window methods, objects, properties
// console.log(123);

// alert('HELLO')

//prompt
// const input = prompt();
// alert(input);

//confirm
// if(confirm('Are you sure')){
//     console.log('YES')
// } else {
//     console.log('NO')
// }

//properties
// let val;

// //outer height and width
// val = window.outerHeight
// val = window.outerWidth
// val = window.innerHeight
// val = window.innerWidth

// // scroll points
// val = window.scrollY

// // location object

// val = window.location

// //Redirect
// // window.location.href = 'http://google.com';

// //reload
// // window.location.reload();
// val = window.navigator


// console.log(val);

// //Global scope
// var a = 1;
// let b = 2;
// const c = 3;

// // console.log('Global scope ' , a , b, c)

// // function test(){
// //     var a = 4;
// //     let b = 5;
// //     const c = 6;
// //     console.log('Function Scope ', a, b, c)
// // }
// // test();

// // if(true){
// //     //Block scope
// //     var a = 4;
// //     let b = 5;
// //     const c = 6;
// // console.log('if Scope ', a, b, c)
// // }
// // console.log('Global scope ' , a , b, c)

// // for( var a = 0; a < 10; a++){
// //     console.log(`Loop: ${a}`)
// // }

// console.log('Global scope ' , a , b, c)

//Person constructor
// function Person(name, dob){
//     this.name = name;
//     this.birthday = new Date(dob);
//     this.calculateAge = function(){
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }
//     // this.age = age
//     //console.log(this);
// }

// // const brad = new Person('Brad', 30);
// // const john = new Person('John', 36);

// const brad = new Person('Brad', '9-10-1988');

// console.log(brad.calculateAge());

//string
// const name1 = 'Jeff';
// const name2 = new String('jeff');

// name2.foo = 'bar'

// console.log(typeof name2)

// if(name2 == 'Jeff'){
//     console.log('yes')
// } else {
//     console.log('NO')
// }

//number
// const num1 = 5;
// const num2 = new Number(5);

// console.log(num2)

//boolean
// const bool1 = true;
// const bool2 = new Boolean(true);

// //function
// const getSum1 = function(x,y){
//     return x + y;
// }

// const getSum2 = new Function('x','y','return 1 + 1');

// console.log(getSum2(1,1));

//object
// const john1 = {
//     name: 'John'
// }
// const john2 = new Object({name: 'John'});

// //arrays
// const arr1 = [1,2,3,4];
// const arr2 = new Array(1,2,3,4);

// // Regular expressions
// const re1 = /\w+/;
// const re2 = new RegExp('\\w+');

// console.log(re2);

//prototypes
//each object in javascript has a prototype
//object.prototype
//person.prototype


//prototypal inheritance
//Person
// function Person(firstName, lastName){
// this.firstName = firstName;
// this.lastName = lastName;
// }

// //Greeting
// Person.prototype.greeting = function(){
//     return `Hello there ${this.firstName} ${this.lastName}`;
// }

// const person1 = new Person('John', 'Doe');

// // console.log(person1.greeting());

// //customer constructor
// function Customer(firstName, lastName, phone, membership){
//     Person.call(this, firstName, lastName);

//     this.phone = phone;
//     this.membership = membership;
// }

// //Inherit the Person prototype methods
// Customer.prototype = Object.create(Person.prototype);

// //make customer.prototype return Customer()
// Customer.prototype.constructor = Customer;

// //create customer
// const customer1 = new Customer('Tom', 'Smith', '555-5555', 'Standard');

// console.log(customer1);

// //Customer greeting
// Customer.prototype.greeting = function(){
//     return `Hello there ${this.firstName} ${this.lastName}, welcome to our company!`;
// }

// console.log(customer1.greeting());

//Object.create
// const personPrototypes = {
//     greeting: function(){
//         return `Hello there ${this.firstName} ${this.lastName}`;
//     },
//     getsMarried: function(newLastName){
//         this.lastName = newLastName
//     }
// }

// const mary = Object.create(personPrototypes);
// mary.firstName = 'Mary';
// mary.lastName = 'Williams';
// mary.age = 30;

// mary.getsMarried('Thompson');

// console.log(mary.greeting());

// const brad = Object.create(personPrototypes, {
//     firstName: {value: 'Brad'},
//     lastName: {value: 'Travers'},
//     age: {value: 36}
// })

// console.log(brad)
// console.log(brad.greeting())

class Person {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`
    }

    calculateAge(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLastName) {
        this.lastName = newLastName;
    }

    static addNumbers(x,y) {
        return x + y;
    }
}

const mary = new Person('Mary', 'Williams', '11-13-1980');

mary.getsMarried('Thompson');
console.log(mary)

console.log(Person.addNumbers(1,2));