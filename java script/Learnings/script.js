// console.log("apna college!");
// alert("what is your name");

// fullName = "tony";
// age= 24;
// x = null;
// y = undefined;
//isFollow = true; //boolean
// console.log(isFollow);

// VAR - can be re-declared and update
// LET- can not be re-declared but can be update
// CONST- can not be re-declared or update

//OBJECT

// const student = {
//     fullName : "nandini garg",
//     age : 21,
//     cgpa : 8.6
// };
// student['name'] = "neha"
// console.log(student.name);

//PRACTICE-1
// const profile = {
//     fullName: "shradha",
//     followers: 123,
//     following: 345,
//     isFollow: true,
// }
// console.log(profile);

// NO IS EVEN OR ODD
// let num = 1;
//     if(num%2 === 0){
//         console.log(num, "is even");
//     }
//     else{
//         console.log(num,"is odd");
//     }

// let age = 19;
// if(age>18){
//     console.log("can vote");
// }
// else if(age = 18){
//     console.log("just vote");
// }
// else{
//     console.log("cannit vote");
// }

//TERNARY OPERATOR
// let age = 17;

// age>=18  "adult" :"not adult";

//PRACTICE 2
// let num = prompt("enter a number");
// if(num%5 === 0){
//     console.log(num, "num is multiple of 5");
// }
// else{
//     console.log(num, "num is not multiple of 5");
// }

//LOOPS
// let sum = 0;
// for(let i =0; i<20; i++){
//     sum = sum+i;

// console.log("sum", sum);
// }

//ACCESS ID
//if given id is not present in the file then it prints NULL
// let heading = document.getElementById("heading1");
// console.log(heading);

//ACCESS CLASS
//if given class is not present in the file then it prints empty html collection
// let paragraph = document.getElementsByClassName("para");
// console.log(paragraph);

//ACCESS TAG
// let parag = document.getElementsByTagName("p");
// console.log(parag);

//QUERY SELECTOR(it select node list)

//return first element
// let firstEl = document.querySelector("p");
// console.log(firstEl);

//return a node list
// let allEl = document.querySelectorAll("p");
// console.log(allEl);

//THERE ARE 3 NODE IN "DOM" TREE
//1.text node
//2.comment node
//3.elements node

//INNERTEXT : return only text content
//INNEEHTML : return all html content with text content
//TEXTCONTENT : return textual content even for hidden elements
// let div = document.querySelector("div");
// console.log(div);

// let fru = document.querySelector("h3");

// let h2 = document.querySelector("h2");
// h2.innerText = h2.innerText + "from apna college";
// console.log(h2.innerText);

// let div = document.querySelectorAll(".box");
// // console.log(div[0]);
// let idx = 1;
// for(val of div){
//     div.innerText = `new unique value ${idx}`;
//     idx++;
// }

//GETATTRIBUTE : we can find the attribute
// let divs = document.querySelector("div");
// console.log(divs);

// let id = divs.getAttribute("id");
// console.log(id)

// let paragraph = document.querySelector("p");
// console.log(paragraph.getAttribute("class"));

//SETATTRIBUTE : chng the attribute value

// let paragraph = document.querySelector("p");
// console.log(paragraph.setAttribute("class" , "new class"))

// let div = document.querySelector("div");

// div.style.backgroundColor = "green";
// div.style.fontStyle = "italic";

//HOW TO INSERT ELEMENT IN JS : so to insert an element first we create an element and then we insert it in

//TO CREATE A BUTTON
// let newbtn = document.createElement("button");
// newbtn.innerText = "click me";
// console.log(newbtn);

//TO SHOW A BUTTON ON A PAGE
// let div = document.querySelector("div");
// div.append(newbtn);
// div.prepend(newbtn);
// div.before(newbtn);
// div.after(newbtn);

// let newHeading = document.querySelector("h1");
// newHeading.innerText = "Hi, i am new!";

// document.querySelector("body").prepend(newHeading);

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me";

// newBtn.style.backgroundColor = "red";
// newBtn.style.color = "white";

// document.querySelector("body").prepend("newBtn");

//EVENT
// let btn1 = document.querySelector("btn1");
// btn1.onclick = () =>{
//     console.log("button was clicked");
// }

// btn1.mouseover = () =>{
//     console.log("button was clicked");
// }

//EVENT LISTENERS
// btn1.addEventListener("click", () =>{
//     console.log("button was clicked");
// })

// btn1.addEventListener("click", (evt) =>{
//     console.log("button was clicked");
//     console.log(evt);
//     console.log(evt.type);
// })

//THIS KEYWORD

// const student = {
//     fullName : "nandini garg",
//     age : 21,
//     marks : 95.4,
//     printMarks : function() {
//         console.log("marks =", this.marks);//student.marks
//     }
// }

//PROTOTYPES : it is special property in js
//It is a default object which present in  any object that we created
// it has some inbuilt properties and methods
// Ex : when we created an array then push and pop and some other methods automatically present in this

//We can also create our prototype
// const employee = {  // object1
//     calcTax(){
//         console.log("tax rate is 10%");
//     },
// };

// const karanArjun = {  //object2
//     salary: 5000,
// };

// karanArjun.__proto__ = employee; //can access the function of obj1 to obj2 by using prototype

//IF OBJECT AND PROTOTYPE HAVE SAME METHOD, OBJECT'S METHOD WILL BE USED
// const employee = {  // object1
//     calcTax(){
//         console.log("tax rate is 10%");
//     },
// };

// const karanArjun = {  //object2
//     salary: 5000,
// calcTax(){
// console.log("tax rate is 20%");
//},
// };
//  karanArjun.__proto__ = employee;

//CLASSES : it is a program-code template for creating object

//NEW : it is keyword which create a object through classes
// it is basically used to access all the function,property and methods of classes in a object which we created

// class ToyotoCar {
//     start() {
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
// }
// let fortuner = new ToyotoCar();

//CONSTRUCTOR
// class ToyotaCar {
//     constructor(brand , mileage){
//         console.log("creating new object");
//         this.brand = brand;
//         this.mileage = mileage;
//     }
//     start(){
//         console.log("start")
//     }
//     stop(){
//         console.log("stop")
//     }
// }
// let fortuner = new ToyotaCar("fortuner" , 10);
// console.log(fortuner);

//SUPER KEYWORD: to invoke parent class constructor -- Doubt
// or if we created a child constructor then we use super keyword to access parent constructor
// EXTENDS : To inheritate the prop of parent class
// class Person{
//     constructor(name){
//         this.species = "Homo sapians";
//         this.name = name;
//     }
//     eat(){
//         console.log("eat");
//     }
// }
// class Engineer extends Person{
//     constructor(name){
//         super(name);
//     }
//     work(){
//         super.eat();
//         console.log("solve problems");
//     }
// }
// let engObj = new Engineer("nandini");

//QUE :

// let Data = "secret info";
// class User{
//     constructor(name , email){
//         this.name = name;
//         this.email = email;
//     }
//     viewData(){
//         console.log("data= ", Data);
//     }
// }
// class Admin extends User{
//     constructor(name , email){
//         // super(name, email);
//     }
//     editData(){
//         Data = "soom new value";
//     }
// }
// let student1 = new User("nandini", "jdsdjk@gmail");
// let dean = new User("vranda","jhjdh@gmil.com");

//ERROR HANDLING : try-catch

//SET TIME OUT
// function fun1(){
//     console.log("hello");
// }
// setTimeout(fun1, 4000);

//OR

// setTimeout(() =>{
//     console.log("hello");
// },1000);

//CALLBACK HELL
// function getData(dataId, getNextData){
//     setTimeout(() =>{
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }
// getData(1, () =>(
//     console.log("getting data2..");
//     getData(2, () =>(
//         console.log("getting data3..");
//     ));
// ));

// PROMISE CHAIN
// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//     }, 2000);
//   });
// }

//console.log("getting data1..");
// getData(1)
//   .then((res) => {
 //console.log("getting data2..");
//     return getData(2);
//  })
//  .then((res) => {
//console.log("getting data3..");
//     return getData(3);
//   })
//   .then((res) => {
//     console.log("success");
//   });

// ASYNC-AWAIT
// function getData(dataId) {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             console.log("data", dataId);
//             resolve("success")
//         },2000);
//     });
// }

// async function getAllData() {
// console.log("getting data1...")
//     await getData(1);
// console.log("getting data2...")
//     await getData(2);
// console.log("getting data3...")
//     await getData(3);
// }

//PROMISES : it is an object
//let promise = new Promise(resolve,reject) => {..})

//How to create promise
// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             console.log("data", dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         }, 5000);
//     });
// }

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("i am a promise");
//     // resolve("success");
//     //or
//     reject("network error");
//   });
// };
// let promise = getPromise();
// promise.then((res) => {
//   console.log("promise fulfilled", res);
// });
// //or
// promise.catch((err) => {
//   console.log("rejected", err);
// });

//ASYNC-AWAIT
//ASYNC : it always return a promise
//AWAIT : it pauses the execution of its surroiunding async function until the promise is fulfilled
//async function myfunction()

// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("weather data");
//       resolve(200);
//     }, 2000);
//   });
// }
// async function getWeatherData() {
//   await api();
//   await api();
// }

//IIFE : IMMEDIATELY INVOKED FUNCTION EXPESSION :- by using this code, function is automatically execute (not necessary of function call)
// but we not use it again only call at 1 time
// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("weather data");
//       resolve(200);
//     }, 2000);
//   });
// }
// (async function () {
//   await api();
//   await api();
// })();

//FETCH API : it provides an interface for fetching resources
// it uses request and response object 
// let promise = fetch(url,[options])

const URL = "https://cat-fact.herokuapp.com/facts";

const getFacts = async() =>{
    console.log("getting data...")
    let response = await fetch(URL);
    console.log(response);
};
