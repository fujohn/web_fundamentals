// variables
var count = 5;
var message = "Hello World";
var likesJS = true;

// changing variable to different types
var counting = 5;
counting = "I'm now a string!";

// operators
var product = 3.14159 + 2.71828; // 5.85987
var a_name = "Marisa";
var message = "JS is actually the trickiest language";
console.log(a_name + " says " + message); // "Marisa says JS is actually the trickiest language"

var name = "Phil";
var luckyNumber = 8;
console.log(name + "'s lucky number is " + luckyNumber); // "Phil's lucky number is 8"

console.log("the number is " + 12 + 3);  // "the number is 123"
console.log(12 + 3 + " is a different number"); // "15 is a different number"

var total = 10;
total += 5; // equivalent to total = total + 5;

var message = "hello";
message += " world"; // message is now "hello world"

// function
function createArray(num) {    
    var newArray = [];    
    for (var i = 0; i <= num; i++) {        
        newArray.push(i);    
    }
    }
    createArray(5);
    //The newArray only exists inside of the function.  Out here it no longer exists!
    
// html: <button onclick="alert('hello')">Click Me!</button>  <-- this will create an alert box with 'hello'
//       <script src="script.js"></script>

// if we change alert to custom, will have to link script to where custom was defined
function custom() {
    // we can include more code here if we want to
    console.log("this message is coming from script.js");
}

// html: <button onclick="turnOff(this)">On</button> <-- the variable "this" refers to the element itself
function turnOff(element) {
    element.innerText = "Off";
} // this code will turn a button that says On to Off

// html: <img src="ninja.png" alt="ninja" onclick="hide(this)">
function hide(element) {
    element.remove();
} // this code will remove the image on click

// <div class="block" onmouseover="over(this)" onmouseout="out(this)"></div>
//  the 2 functions below will change the background color of element when mouse is over and no longer over it respectively
function over(element) {
    element.style.backgroundColor = "lime";    
}
    
function out(element) {
    element.style.backgroundColor = "silver";   
}


// QuerySelector is a JS methodology to get the tag/class/id of choice to manipulate
// <h1 id="title">Hello World</h1>
// Both of these will select the h1 tag
var h1 = document.querySelector("h1");
var title = document.querySelector("#title");

// can also combine selections like in css
var logoImg = document.querySelector(".nav img");
// QuerySelector will only get the first elements it finds

{/* <h3>Lorem Ipsem</h3> */}
var h3 = document.querySelector("h3");
h3.innerText = "New Title"; // changes the h3 text from Lorem Ipsem to New Title

// <img src="cat.jpg" alt="pet" id="pet-img" />
// <button onclick="switchImg()">Switch</button>

var petImg = document.querySelector("#pet-img");
    
function switchImg() {
    petImg.src = "dog.jpg";  
} // clicking the cat.jpg will change it to dog (clicking the dog pic will change to dog, so no difference)


// <button onclick="setActive(this)">Switch to dark mode</button>
function setActive(element) {
    element.style.backgroundColor = "#222222";
    element.style.color = "#ffffff";
} // .style will be able to change the element's style (CSS) elements, default or edited in CSS

function setActive(element) {
    element.classList.add("dark-mode");
} // this adds a class called dark-mode into the element

function setActive(element) {
    if(element.classList.includes("dark-mode")) { // includes is like .isin() in python or IN in SQL
        element.innerText = "Switch to light mode";
        element.classList.remove("dark-mode"); // take the class out so that it uses default style before dark-mode is applied
    } else {
        element.innerText = "Switch to dark mode";
        element.classList.add("dark-mode");
    }
}


// delayed message

function message() {
    console.log("Delayed message");    
}
    
console.log("Start");
setTimeout(message, 3000); // 3000 refers to lag in miliseconds, therefore 3 seconds
console.log("End");