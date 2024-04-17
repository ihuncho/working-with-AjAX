let current_price = 300;

console.log(current_price);

// const let var

var name = "emmmanuel";
name = "ebuka chukwu michael";
console.log(name);

let num1 = 20;
let num2 = 10;

console.log(num1 + num2);

// blocked scoped in javascript

{
  const greeting = "hello world";
  console.log(greeting);
}

// Data types in javascript
// strings
// array
// objects
// boolean
// null
// undefined
// number
// symbol

let strings = "hello world, my name is empty";
console.log(strings);

let array = ["pawpaw", "orange", 60];
console.log(array[0]);

let object = {
  Brand: "iphone 14 pro max",
  color: "purple",
  price: "1,000,000",
};
console.log(object.Brand, object.color, object.price);

let boolean = false;
let boolean2 = true;

let empty = null;
console.log(empty);

let myproduct;
console.log(myproduct);

value = document.getElementById("value");
let count = 0;

let increment = document.getElementById("increment");

increment.addEventListener("click", () => {
  count++;
  value.innerHTML = count;
});

name = "ebuka";

name = "philp";

// operators in javascript

let num_one = 50;
let num_two = 100;

var result = num_one + num_two;
var result = num_one * num_two;

console.log(result);

// tYPES Of javascript opoerators

// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// String Operators
// Logical Operators
// Bitwise Operators
// Ternary Operators
// Type Operators

let a = 3;
let x = (100 + 50) * a;

let aza = 50;
aza += 1;

// Comperison Operator
// ==	equal to
// ===	equal value and equal type
// !=	not equal
// !==	not equal value or not equal type
// >	greater than
// <	less than
// >=	greater than or equal to
// <=	less than or equal to
// ?	ternary operator

// let text1 = "A";
// let text2 = "B";
// let result = text1 < text2;

// console.log(result);

// const inputValue = document.querySelector('input')

// function test(brains){
//     return brains[Math.floor(Math.random()* brain.length)]
// }
// let brain = ['education', 'familiar', 'warning', 'myname']
// let randomThinking = test(brain)
// console.log(randomThinking);
// // console.log(randomThinking);

// function check(){
//     if(inputValue.value === randomThinking){
//         alert('Right ✅✅')
//     }else{
//         alert('Wrong ❌❌')
//     }
// }

//   OR

const inputValue = document.querySelector("input");
const button = document.querySelector("button");
function test(brains) {
  return brains[Math.floor(Math.random() * brain.length)];
}
let brain = ["education", "familiar", "warning", "myname"];
let randomThinking = test(brain);
console.log(randomThinking);
// console.log(randomThinking);

function check() {
  if (inputValue.value === randomThinking) {
    alert("Right ✅✅");
    inputValue.style.border = "2px solid green";
  } else {
    alert("Wrong ❌❌");
    inputValue.style.border = "2px solid red";
  }
}

button.addEventListener("click", check);

// Types of functions
//     Arrow function
//     anonymous function
//     iife function
//     function

function Greet(name, message) {
  console.log(message, name);
}
Greet("ihuncho 😎", "hello 👌Mr");

let func = function () {
  console.log("this is a function");
};

func();

function test() {
  return "we are testing a function";
}

console.log(test());

function defaultParams(message, name = "ihuncho") {
  console.log(message, name);
}

defaultParams("I AM ");

// (function(){
//     console.log('this is an anonymous function')
// })();

let img = document.querySelector(".img");

let person = {
  gender: "male",
  age: 22,
  name: "ihuncho",
  skinColor: "fair",
  image: "./images/turnOn.jpeg",
};
img.src = person.image;

console.log(person);

let text = document.querySelector(".text");
text.innerHTML = "Hello world";

text.style.backgroundColor = "yellow";

text.style.color = "black";

text.style.fontSize = "20px";

text.style.fontWeight = "bold";

text.style.padding = "10px";

text.style.margin = "10px";

text.style.border = "1px solid black";

text.style.borderRadius = "10px";

text.style.boxShadow = "5px 5px 5px black";

// text.style.textShadow = '5px 5px 5px black'

text.style.cursor = "pointer";
text.style.textAlign = "center";

// events in javascript
let btn = document.querySelector("btn");
value = document.querySelector(".value");

function displayDate() {
  let date = new Date();
  value.innerHTML =
    date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
}
