// JavaScript Document

// het binnen sliden van de upcoming events
var button = document.getElementById("button"); //selecteer de button
let upcoming = document.getElementById("upcoming"); //selecteer de section

button.addEventListener("click", openUpcoming); //toevoegen van het event door te klikken wordt de function uitgevoerd

function openUpcoming() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
        upcoming.classList.toggle("toonUpcoming"); //toonUpcoming de class wordt toegevoegd aan de section het het id upcoming
    }
}

console.log(upcoming); //om te checken of upcoming het juiste selecteert in de console


//muziek van maddog gaat aan
var maddog = document.getElementById("maddog");
var maddogImage = document.getElementById("maddogImage");

maddogImage.addEventListener("mouseover", maddogSpeelt);
maddogImage.addEventListener("mouseout", maddogStopt);

function maddogSpeelt() {
    maddog.play();
}
function maddogStopt() { 
    maddog.pause(); //zet de audio weer uit
    maddog.currentTime = 0;
}


//muziek van missk8 gaat aan
var missk8 = document.getElementById("missk8");
var missk8Image = document.getElementById("missk8Image");

missk8Image.addEventListener("mouseover", missk8Speelt);
missk8Image.addEventListener("mouseout", missk8Stopt);

function missk8Speelt() {
    missk8.play();
}
function missk8Stopt() { 
    missk8.pause(); //zet de audio weer uit
    missk8.currentTime = 0;
}


//muziek van angerfist gaat aan
var angerfist = document.getElementById("angerfist");
var angerfistImage = document.getElementById("angerfistImage");

angerfistImage.addEventListener("mouseover", angerfistSpeelt);
angerfistImage.addEventListener("mouseout", angerfistStopt);

function angerfistSpeelt() {
    angerfist.play();
}
function angerfistStopt() { 
    angerfist.pause(); //zet de audio weer uit
    angerfist.currentTime = 0;
}