// redeclare of variable  with the same name

var x;
var x = 10;

console.log(x);

//output 10;

// if you try to declare 'let'(variable) a new variable with the same name - it will give an error
var x;
let x = 10;
console.log(x);

// output : it shows x has already be declare .

//Q:11
let a = 3;
let b = new Number(3);
console.log(a == b);
console.log(a === b);

// output : true,false



//Q:12
let name ;
nmae = {}
console.log(nmae);
//output : undefined


//Q:13
function fruit() {
    console.log("woof!");
}
fruit.name = 'apple';
console.log(fruit())
//output : woof!


//Q:14
function sum(a,b){
    return a+b;
}
console.log(sum(1, "2"));
//output : 12

//Q:15
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
//output : 0,2,2


//Q:16
function getAge(...args){
    console.log(typeof args);
}
getAge(21);
//output : object


//Q:17
function getAge(){
    'use strict';
    age = 21;
    console.log(age);
}
getAge();
//output: error // because : when we use 'use strict' then it is necessery to declare type of any defined variable.
//output : ReferenceError: age is not defined


//Q:18
// What is eval fundtion does
// It will perform any operation to its parameter
// It will takes as a string but convert it into numeric value.
const sum = eval('10*10+5');
console.log(sum);
//output : 105


//Q:19 
// How long is cool_secret accessible?
sessionStorage.setItem("cool_secret", "I am secret");
//Output : Automatically remove where ever we close the tab or close the browser.



//Q:20
const obj = {1: "a", 2 : "b" , 3 : "c"};
console.log(obj.hasOwnProperty("1"));
console.log(obj.hasOwnProperty(1)); 
//Output : true, true
/* The difference between them is that hasOwnProperty() only checks for the property in the current */


//Q:21
const obj1 = {a:"one", b: "two", a: "repeat"};
console.log(obj1);
//Output : a : "repeat", b : "two"
// here a override its value but the position remains same.

//Q:22
for(let i =  1 ; i<5 ; i++){
    if(i===3) continue;
    console.log(i);
}
//output : 1 2 4


//Q: 23
const foo = () => console.log('First');
const bar = () => setTimeout(()=> console.log('Second'));
const baz = () => console.log('Third');
bar();
foo();
baz();
//output : First, Third, Second


//Q: 24
<div>
    <div onClick= "console.log('First div')">
        <div onclick="console.log('Second Div')">
            <button onClick="console.log('button')">
               Click!
            </button>
        </div>
    </div>
</div>
// Output : 
// button
// Second div
// First Div 

// Because when ever we clicking in an event it will make a bubble from inside to outside 



//Q:25
const person = {name : "satyam"}
 function sayHi(age){
    return `${this.name} is ${age}`;
 }
 console.log(sayHi.call(person,21));
 console.log(sayHi.bind(person,21));

 //output : satyam is 21 , second one is returning a function, because bind returns a new function, while binding our function we again have to call it after calling function with "()" So after that it returs  same as call.
 


 //Q:26
function sayHi(){
    return (() => 0)();
}
console.log(typeof sayHi());
//output : number


//Q:27
function sayHi() {
    return  ()=> 0;
}
console.log(typeof sayHi()); // function
console.log(typeof sayHi()()); // number
// Output : function, number



//Q:28
console.log(typeof typeof 1); // string
//output : string



//Q:29
const numbers = [1,2,3];
numbers[9] = 11;
console.log(numbers);
//Output : [1, 2, 3, empty * 6 , 11]



//Q:30
const numbers = [1,2,3];
numbers[3] = numbers;
console.log(numbers);
//output : 1 ,2 ,3 ,infiniteArray.



//Q:31
// Everything in javascript is either a...
//A: primitive or Object
//B: function or object
//C: trick  question! only objects
//D: number or object

//output : A - Primitive or Object.



//Q:32
console.log(!!null);
console.log(!!"");
console.log(!!1);
// output : false , false , true .



//Q:33
console.log(setInterval(()=>console.log('Hi'),1000))
console.log(setInterval(()=>console.log('Hi'),1000))
console.log(setInterval(()=>console.log('Hi'),1000))
//output : setInterval return its ID like 1,2,3..etc. with the behalf of these IDs we can perform operations on perticular setInterval() functions.



//Q:34
console.log([..."anil"]);
// output : ['a','n','i','l'];
// destructural : It will break our array, object, string in a minimal part.



//Q:35
let data = 3 + 4 + '5'; // 75
console.log(typeof data);
// output : String, and 75 without typeof
// reason : because of the "+" operator which converts it into string and then concatenates with other values.



//Q:36
console.log(typeof 3+4+'5');
//output : number45



//Q:37
console.log(typeof (3+4+'5'));
// output : string



//Q:38
console.log(typeof (3+4+ +'5'));
//output: number
// +'5' it convert it into  number.



//Q:39
console.log(typeof []);
//output: object



//Q:40
console.log([]==[]);
//output: false , because both array has different memory location.



//Q:41
let data1 = [1, 2, 3].map(num => {
    if(typeof num === 'number') return;
    return num * 2;
});
console.log(data1);
// output : [undefine , undefine, undefine]



//Q:42
function getInfo(member){
    member.name = 'Anil';
}
const person1 = { name : 'Sarah'};
getInfo(person1);
console.log(person1);
// output : { name : 'Anil'}



//Q:43
function Car(){
    this.make = 'tata';
    return { make : 'Kia' };
}
// If we have a function, and we returning something from that function it means it overrides the prev key.
const myCar = new Car();
console.log(myCar.make);
//output : 'Kia'



//Q:44
(() => {
    let x = (y = 10);
})();
console.log(typeof x); 
// ReferenceError: x is undefined, because the scope of let variable is block scope. So it can not be accessed outside of its own block. // undefined



//Q:45
(() => {
    let x = y = 10;
    // above is basically a short form of " let x; y " (here we did not declare the type of y). so by default it takes var typ, which has a global scope.
})();
console.log(typeof y); 
//output : number, value = 10.



//Q:46
// Is that any error happen in below code?
 (()=>{
    let  x = 10;
 })();

 (()=>{
    let  x = 10;
 })();

 //output : No error, because, let has a block scope, if we declare two let variable in same scope then it will give error, two let variable with same name in different scope not give any error.




//Q:47
(()=>{
    let  x = y = 10;
 })();

 (()=>{
    let  x = y = 20;
 })();

 console.log(y);
 //output : 20 , beacause here y is global variable and its value overrides 10 to 20 and then output is 20.




//Q:48
let x = 100;
(()=>{
    var x = 20;
})();
console.log(x);
//output: 100
// because if the same name variable present outside the var scope block then var is only accessable within its block and out side that block only outer variable will accessable.


//Q:49
console.log(!true - true);
//output : -1. because !true = 0 and true = 1, then output will be -1.



//Q:50
console.log(true + +"10" );
//output : 11. Because +"10" converted to 11 and true converted to 1 then answer will be 11.


