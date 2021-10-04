// JavaScript Document

// het binnen sliden van de upcoming events
var button = document.querySelector("main section:last-of-type button"); //selecteer de button
let upcoming = document.querySelector("section:last-of-type"); //selecteer de section

button.addEventListener("click", openUpcoming); //toevoegen van het event door te klikken wordt de function uitgevoerd

function openUpcoming() {
    upcoming.classList.toggle("toonUpcoming"); //toonUpcoming de class wordt toegevoegd aan de section het het id upcoming

}

console.log(upcoming); //om te checken of upcoming het juiste selecteert in de console


//muziek van maddog gaat aan
var maddog = document.querySelector("audio:nth-of-type(2)");
var maddogImage = document.querySelector(".pagina2 section:nth-of-type(2) article img:nth-of-type(1)");

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
var missk8 = document.querySelector("audio:nth-of-type(3)");
var missk8Image = document.querySelector(".pagina2 section:nth-of-type(2) article img:nth-of-type(2)");

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
var angerfist = document.querySelector("audio:nth-of-type(1)");
var angerfistImage = document.querySelector(".pagina2 section:nth-of-type(2) article img:nth-of-type(3)");

angerfistImage.addEventListener("mouseover", angerfistSpeelt);
angerfistImage.addEventListener("mouseout", angerfistStopt);

function angerfistSpeelt() {
    angerfist.play();
}

function angerfistStopt() {
    angerfist.pause(); //zet de audio weer uit
    angerfist.currentTime = 0;
}