// Single comment

/*
Multiline comment
*/

const PI = 3.14;

console.log("Hello world");
console.log("THe value of PI is:", PI);

var x = 10;
x = 11;
console.log("THe value of x is:", x);

let y = 20;
{
    y = 21;
}
console.log("THe value of y is:", y);

let newName = "John Doe";
console.log("Your name is", newName);

let age = 30;
if (age > 18) {
    console.log("You are an adult.");
} else if (age === 18) {
    console.log("You are becoming an adult.");
} else {
    console.log("You are a minor.");
}

let a = 3;
let b = 4;
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b);

let num1 = 5;
let num2 = "5";
console.log(num1 == num2);
console.log(num1 === num2);

function add(num1, num2){
    return num1 + num2;
}
const add2 = (num1, num2) => num1 + num2;

console.log("The sum of 5 and 10 is:", add(5, 10));

console.log(`hi, my name is ${newName}, I am ${age} years old. The sum of 5 and 10 is ${add2(5, 10)}. What's up?`);

let letterGrade;
const grade = 85;

switch(letterGrade){
    case 'A':
        console.log("Acceptable");
        break;
    case 'B':
        console.log("Beating");
        break;
    case 'C':
        console.log("Can't have dinner");
        break;
    case 'D':
        console.log("Don't come home");
        break;
    case 'F':
        console.log("Find a new family");
        break;
    default:
        console.log("Invalid grade");
}

const fruits = ['apple', 'banana', 'orange', 'pineapple', 'mango', 'mangosteen'];
fruits.push('grape');

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

for (const fruit of fruits){
    console.log(fruit);
}

const isRaining = true;
const weatherMessage = isRaining ? 'Take an umbrella' : 'Enjoy the sunshine';
console.log(weatherMessage);

const person = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
    },
    hobbies: ['reading', 'writing', 'playing guitar'],
    isStudent: true,
}

console.log(`Name: ${person.name}`);
console.log(`Age: ${person.age}`);
console.log(`City: ${person.address.city}`);
console.log(`Hobbies: ${person.hobbies}`);
