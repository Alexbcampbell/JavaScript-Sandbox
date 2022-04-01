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
const name = 'BILL';
const age = 31;
const job = 'DEV';
const city = 'RAYTOWN';

//without template strings(ES5)
html = '<ul><li>Name: ' + name +'</li><li>Age: ' + age + '</li><li>Job: ' + job + ' </li><li>City: ' + city + '</li></ul>';

html = '<ul>' +
'<li>Name: ' + name +'</li>' +
'<li>Age: ' + age + '</li>' +
'<li>Job: ' + job + ' </li>';

//with template strings

function hello(){
    return 'hello';
}

html = `
<ul>
<li>Name: ${name}</li>
<li>Age:${age} </li>
<li>Job:${job} </li>
<li>${2+2}</li>
<li>${hello()}</li>
<li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
</ul>
`;

document.body.innerHTML = html;