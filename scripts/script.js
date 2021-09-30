// JavaScript Document

// var button = document.getElementsByClassName("button");
// var upcoming = document.getElementsByClassName("upcoming");

// function openUpcoming() {
//     upcoming.classList.add("toonUpcoming")
// }
// button.addEventListener("click", openUpcoming);



// var deButton = document.querySelector("h2");

// function doeFormNeerEnOp(){
// 	let hetFormulier = document.querySelector("form");
// 	hetFormulier.classList.toggle("toonForm");
// }

// deButton.addEventListener("click", doeFormNeerEnOp);


var button = document.getElementById("button");
let upcoming = document.getElementById("upcoming");

button.addEventListener("click", openUpcoming);

function openUpcoming() {
    upcoming.classList.toggle("toonUpcoming");
}

console.log(upcoming);